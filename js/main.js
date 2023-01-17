// https://hammerjs.github.io/
// https://www.wawasensei.dev/tuto/comment-coder-un-clone-de-tinder-en-javascript

let questions = document.querySelectorAll('.question');

const maxAngle = 42;
const smooth = 0.3;
const threshold = 42;
const thresholdMatch = 150;
questions.forEach(setupDragAndDrop);

function setupDragAndDrop(question) {
  const hammertime = new Hammer(question);
  hammertime.get('swipe').set({ velocity: 0.6});

  // Dès que l'utilisateur saisit une carte
  hammertime.on('swipe', function (e) {
    question.classList.remove('profile--back');
    let posX = e.deltaX;
    let posY = Math.max(0, Math.abs(posX * smooth) - 42);
    let angle = Math.min(Math.abs(e.deltaX * smooth / 100), 1) * maxAngle;
    if (e.deltaX < 0) {
      angle *= -1;
    }
    question.style.transform = `translateX(${posX}px) translateY(${posY}px) rotate(${angle}deg)`;
    question.classList.remove('profile--matching');
    question.classList.remove('profile--nexting');
    if (posX > thresholdMatch) {
      question.classList.add('profile--matching');
    } else if (posX < -thresholdMatch) {
      question.classList.add('profile--nexting');
    }

    // Dès que l'utilisateur lache sa carte, ici on récupérer l'info son choix
    if (e.isFinal) {
      question.style.transform = ``;
      if (posX > thresholdMatch) {
        question.classList.add('profile--match');
        setTimeout(function () {
          question.style.display = "none";
        }, 400);
        choix(true);
      } else if (posX < -thresholdMatch) {
        question.classList.add('profile--next');
        setTimeout(function () {
          question.style.display = "none";
        }, 400);
        choix(false);
      } else {
        question.classList.add('profile--back');
      }
    }
  });
}