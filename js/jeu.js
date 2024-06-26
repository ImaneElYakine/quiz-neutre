// Question en cours
let currentQuestion = 2;

// Nb de points
let pointsTotal = 0;

// Le total des questions
const totalQuestion = 3;

// Tableau des questions
const questionsDescription = [
    "La marque Audimat, de Médiamétrie, est devenu un mot du langage courant",
    "Ninho est le rappeur qui a vendu le plus d'album en 2021",
    "La VR signifie Virtual Reality soit Réalité Virtuelle",
];

// Tableau des thèmes des questions
const themes = [
    "Médiamétrie",
    "Musique",
    "test"
];

// Tableau des réponses aux questions
const reponses = [
    true,
    true,
    false
];

// Tableau des points accordés à chaque question
const points = [
    1,
    2,
    3
];

// Si le joueur à donné une réponse
let choixUtilisateur = false;

// Le compte à rebours
let timer;

// Son du quiz
const son_jeu = new Audio('son/quiz.mp3')
const son_faux = new Audio("son/faux.mp3");
const son_vrai = new Audio("son/correct.mp3");



// Affichage des questions sur les cartes
let cartes = document.querySelectorAll('.question');
for (let i = 0; i < questionsDescription.length ; i++) {
    console.log(i);
    cartes[i].lastElementChild.firstElementChild.innerHTML = themes[i];
    console.log(themes[i]);
    cartes[i].lastElementChild.lastElementChild.innerHTML = questionsDescription[i];
    console.log(questionsDescription[i]);
}


// LANCEMENT DU JEU
runTimer();

let dot = 1;
// PASSAGE A LA QUESTION SUIVANTE
function questionSuivante() {
    currentQuestion--;
    if (currentQuestion < 0) {
        affichageFinJeu();
    } else {
        document.getElementById("dot" + (dot)).classList.add("active");
        dot++;
        setTimeout(function (){
            // On révèle la nouvelle question
            cartes[currentQuestion].lastElementChild.classList.remove('blur');
        }, 1500);
    }
}

// VERIFICATION DE LA REPONSE
function verificationReponse(choix) {
    if (choix === false) {
        if (currentQuestion < totalQuestion) {
            // Réponse bonne (ajout de points)
            if (reponses[currentQuestion] === false) {
                reponseBonneAffichage();
                questionSuivante();
                setTimeout(runTimer, 1500);
                pointsTotal += points[currentQuestion];
                // Réponse fausse (pas de points)
            } else if (reponses[currentQuestion] === true) {
                reponseFausseAffichage();
                questionSuivante();
                setTimeout(runTimer, 1500);
            }
        }
    } else if (choix === true) {
        if (currentQuestion < totalQuestion) {
            // Réponse bonne (ajout de points)
            if (reponses[currentQuestion] === true) {
                reponseBonneAffichage();
                questionSuivante();
                setTimeout(runTimer, 1500);
                pointsTotal += points[currentQuestion];
                // Réponse fausse (pas de points)
            } else if (reponses[currentQuestion] === false) {
                reponseFausseAffichage();
                questionSuivante();
                setTimeout(runTimer, 1500);
            }
        }
    }
}

// L'UTILISATEUR A FAIT UN CHOIX
function choix(choix) {
    stopTimer();
    choixUtilisateur = true;
    verificationReponse(choix);
}

// ARRET DU TIMER
function stopTimer() {
    son_jeu.pause();
    son_jeu.currentTime = 0;
    clearTimeout(timer);
    document.getElementById("progress_bar").style.animation = 'none';
    document.getElementById("progress_bar").offsetHeight;
    document.getElementById("progress_bar").style.animation = null;
}

// DEBUT DU TIMER
function runTimer() {
    son_jeu.play();
    document.getElementById("progress_bar").style.animation = 'none';
    document.getElementById("progress_bar").offsetHeight;
    document.getElementById("progress_bar").style.animation = null;
    document.getElementById("progress_bar").style.animation = "progress 6s linear";
    timer = window.setTimeout(function () {
        son_jeu.pause();
        son_jeu.currentTime = 0;
        reponseFausseAffichage();
        cartes[currentQuestion].classList.add('disapear');
        cartes[currentQuestion].style.display = "none";
        questionSuivante();
        setTimeout(runTimer, 1500);
    }, 6000);
}


// Affichage de la réponse à la question
function reponseFausseAffichage(){
    son_faux.play();
    document.getElementById("reponse_fausse").style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    setTimeout(function (){
        document.body.style.pointerEvents = "auto";
        document.getElementById("reponse_fausse").style.display = "none";
        document.body.style.overflow = "visible";
    }, 1500);
}

function reponseBonneAffichage(){
    son_jeu.currentTime = 0;
    son_vrai.play();
    // On montre
    document.getElementById("reponse_bonne").style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    setTimeout(function (){
        // On cache
        document.body.style.pointerEvents = "auto";
        document.getElementById("reponse_bonne").style.display = "none";
        document.body.style.overflow = "visible";
    }, 1500);
}

// Affichage lors de la fin du jeu
function affichageFinJeu() {
    son_jeu.volume = 0;
    son_faux.volume = 0;
    setTimeout(function () {
        document.getElementById("progress").style.display = "none";
        document.getElementById("reponse_fausse").style.display = "none";
        document.getElementById("reponse_bonne").style.display = "none";
        document.getElementById("recapitulatif").classList.remove("hidden");
        document.getElementById("score_final").innerHTML = "Ton score est de : " + pointsTotal + " points";
        document.body.style.overflow = "hidden";
    }, 1500);
}

// VIA LES BOUTONS
function choixBouton(choix) {
    cartes[currentQuestion].classList.add('profile--match');
    cartes[currentQuestion].style.display = "none";
    stopTimer();
    choixUtilisateur = true;
    verificationReponse(choix);
}