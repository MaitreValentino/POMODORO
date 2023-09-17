let minuteTravail = 5;
let secondeTravail = 0;
let minutePause = 5;
let secondePause = 0;
let minute = minuteTravail;
let seconde = secondeTravail;
let enPause = false;
let IDInterval = 0;

const minuteur = document.getElementById("temps");
const boutonLancer = document.getElementById("lancerBouton");
const boutonReinitialiser = document.getElementById("arretBouton");

boutonLancer.addEventListener('click', () => {
    IDInterval = setInterval(decompte, 1000);
});

boutonReinitialiser.addEventListener('click', () => {
    clearInterval(IDInterval);
    affichage(minuteTravail, secondeTravail);
    enPause = false;
});

function affichage(minute, seconde) {
    const minuteFormat = minute < 10 ? "0" + minute : minute;
    const secondeFormat = seconde < 10 ? "0" + seconde : seconde;
    minuteur.textContent = minuteFormat + ":" + secondeFormat;
}

affichage(minute, seconde);

function decompte() {
    affichage(minute, seconde);
    if (seconde == 0) {
        if (minute == 0) {
            minute = enPause ? minute : minutePause;
            seconde = enPause ? seconde : secondeTravail;
            enPause = !enPause;
        }
        minute--;
        seconde = 59;
    } else {
        seconde--;
    }

}