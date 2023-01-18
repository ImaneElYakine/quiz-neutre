// index.html
const btnPremiereCo = document.getElementById("btnPremiereCo");
const premiereCo1 = document.getElementById("premiereCo1");
const premiereCo2 = document.getElementById("premiereCo2");
const logoMediametrie = document.getElementById("logoQuiz");

// Apparition de la popup de première connexion
if(logoMediametrie) {
    setTimeout(function () {
        logoMediametrie.style.display = "none";
        premiereCo1.style.display = "block";
    }, 3000);
}

// Gestion de la popup de première connexion
if(btnPremiereCo){
    btnPremiereCo.addEventListener("click", function() {
        premiereCo1.style.display = "none";
        premiereCo2.style.display = "block";
    });
}

// accueil.html
const pictoCadeau = document.getElementById("pictoCadeau");
const cadeaux = document.getElementById("cadeaux");
const closeCadeaux = document.getElementById("closeCadeaux");
const pictoInfo = document.getElementById("pictoInfo");
const informations = document.getElementById("informations");
const closeInfo = document.getElementById("closeInfo");
const pictoBonus = document.getElementById("pictoBonus");
const bonus = document.getElementById("bonus");
const closeBonus = document.getElementById("closeBonus");
const btnClassement = document.getElementById("btnClassement");
const classement = document.getElementById("classement");
const closeClassement = document.getElementById("closeClassement");
const closeDejaJoue = document.getElementById("closeDejaJoue");
const son_fond = new Audio('son/fond.mp3');
son_fond.loop = true;

if(document.getElementById("pictoBonus")) {
    document.body.style.overflow = "auto";
    setTimeout(function () {
        document.getElementById("pictoBonus").classList.remove('animate-bounce');
    }, 6000);
}

// Gestion de la popup des cadeaux
if(pictoCadeau) {
    pictoCadeau.addEventListener("click", function () {
        cadeaux.style.display = "block";
        document.body.style.overflow = "hidden";
    });
}

if(closeCadeaux) {
    closeCadeaux.addEventListener("click", function () {
        cadeaux.style.display = "none";
        document.body.style.overflow = "visible";
    });
}

// Gestion de la popup d'informations
if(pictoInfo) {
    pictoInfo.addEventListener("click", function () {
        informations.style.display = "block";
        document.body.style.overflow = "hidden";
    });
}

if(closeInfo) {
    closeInfo.addEventListener("click", function () {
        informations.style.display = "none";
        document.body.style.overflow = "auto";
    });
}


// Gestion de la popup bonus
if(pictoBonus) {
    pictoBonus.addEventListener("click", function () {
        bonus.style.display = "block";
    });
}

if(closeBonus) {
    closeBonus.addEventListener("click", function () {
        bonus.style.display = "none";
    });
}

// Gestion de la popup classement
if(btnClassement) {
    btnClassement.addEventListener("click", function () {
        classement.style.display = "block";
        document.body.style.overflow = "hidden";
    });
}

if(closeClassement) {
    closeClassement.addEventListener("click", function () {
        classement.style.display = "none";
        document.body.style.overflow = "visible";
    });
}

// Gestion de la déjà joué
if(closeDejaJoue) {
    closeDejaJoue.addEventListener("click", function () {
        document.getElementById("deja-joue").style.display = "none";
        document.body.style.overflow = "visible";
    });
}

// règles.html
const regles1 = document.getElementById("regles1");
const regles2 = document.getElementById("regles2");
const regles3 = document.getElementById("regles3");


const goRegle1 = function goRegle1() {
    regles1.classList.remove("hidden");
    regles2.classList.add("hidden");
}

const goRegle2 =function goRegle2() {
    regles2.classList.remove("hidden");
    regles1.classList.add("hidden");
    regles3.classList.add("hidden");
}

function goRegle3() {
    regles3.classList.remove("hidden");
    regles2.classList.add("hidden");
}

if(document.getElementById("goRegle1")) {
    document.getElementById("goRegle1").onclick = goRegle1;
}

if(document.getElementById("goRegle2")){
    document.getElementById("goRegle2").onclick = goRegle2;
}

if(document.getElementById("goRegle3")){
    document.getElementById("goRegle3").onclick = goRegle3;
}

if(document.getElementById("goRegle2bis")){
    document.getElementById("goRegle2bis").onclick = goRegle2;
}

// Son de fond
function sonFond(){
    if (son_fond.paused === true) {
        document.getElementById("picto_son").src = "img/picto-audio.svg";
        son_fond.play();
    }
    else if (son_fond.paused === false){
        document.getElementById("picto_son").src = "img/picto-audio-muet.svg";
        son_fond.pause();
    }
}










