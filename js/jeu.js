// Question en cours
let currentQuestion = 4;

// Nb de points
let pointsTotal = 0;

// Le total des questions
const totalQuestion = 5;

// Tableau des questions
const questionsDescription = [
    "La marque Audimat, de Médiamétrie, est devenu un mot du langage courant",
    "Ninho est le rappeur qui a vendu le plus d'album en 2021",
    "La VR signifie Virtual Reality soit Réalité Virtuelle",
    "Le site de E-Commerce le plus visité par les français est CDiscount",
    "Le seuil des 2 millions d'entrées est franchi pour le film The Batman"
];

// Tableau des thèmes des questions
const themes = [
    "Médiamétrie",
    "Musique",
    "High Tech",
    "E-Commerce",
    "Cinéma"
];

// Tableau des réponses aux questions
const reponses = [
    true,
    true,
    false,
    true,
    false,
];

// Tableau des points accordés à chaque question
const points = [
    1,
    2,
    3,
    4,
    5,
];

// Si le joueur à donné une réponse
let choixUtilisateur = false;

// Le compte à rebours
let timer;

// Son du quiz
const son_jeu = new Audio('son/quiz.mp3')


// Affichage des questions sur les cartes
let cartes = document.querySelectorAll('.question');
for (let i = 0; i < questionsDescription.length ; i++) {
    cartes[i].lastElementChild.firstElementChild.innerHTML = themes[i];
    cartes[i].lastElementChild.lastElementChild.innerHTML = questionsDescription[i];
}


// LANCEMENT DU JEU
runTimer();

// PASSAGE A LA QUESTION SUIVANTE
function questionSuivante() {
    currentQuestion--;
    if (currentQuestion < 0) {
        affichageFinJeu();
    } else {
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
        reponseFausseAffichage();
        cartes[currentQuestion].classList.add('disapear');
        cartes[currentQuestion].style.display = "none";
        questionSuivante();
        setTimeout(runTimer, 1500);
    }, 6000);
}


// Affichage de la réponse à la question
function reponseFausseAffichage(){
    document.getElementById("reponse_fausse").classList.remove("hidden");
    setTimeout(function (){
        document.getElementById("reponse_fausse").classList.add("hidden");
    }, 1500);
}

function reponseBonneAffichage(){
    // On montre
    document.getElementById("reponse_bonne").classList.remove("hidden");
    setTimeout(function (){
        // On cache
        document.getElementById("reponse_bonne").classList.add("hidden");
    }, 1500);
}

// Affichage lors de la fin du jeu
function affichageFinJeu() {
    setTimeout(function () {
        window.location.replace('./accueil.html');
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

