let minuteTravail = 0;
let secondeTravail = 5;
let minutePause = 0;
let secondePause = 5;
let minute = minuteTravail;
let seconde = secondeTravail;
let enPause = false;
let IDInterval = 0;
let estActif = false;
let estThemeSombre = false;

const minuteur = document.getElementById("temps");
const boutonLancer = document.getElementById("lancerBouton");
const etude = document.getElementById("etude");
const pause = document.getElementById("pause");
const theme = document.getElementById("theme");

boutonLancer.addEventListener('click', () => {
    if (!estActif) {
        IDInterval = setInterval(decompte, 1000);
        estActif = true;
        boutonLancer.textContent = "ZA WARUDO";
    } else {
        clearInterval(IDInterval);
        affichage(minuteTravail, secondeTravail);
        enPause = false;
        estActif = false;
        boutonLancer.textContent = "Link Start";
    }

});

theme.addEventListener('click', () => {
    if (estThemeSombre) {
        darkMode();
        estThemeSombre = true;

    } else {
        lightMode();
        estThemeSombre = false;
    }
});

function affichage(minute, seconde) {
    const minuteFormat = minute < 10 ? "0" + minute : minute;
    const secondeFormat = seconde < 10 ? "0" + seconde : seconde;
    etude.classList.add('disabled');
    pause.classList.add('disabled');
    minuteur.textContent = minuteFormat + ":" + secondeFormat;
}

affichage(minute, seconde);

function decompte() {
    affichage(minute, seconde);
    enPause ? etude.classList.add('disabled') : etude.classList.remove('disabled');
    enPause ? pause.classList.remove('disabled') : pause.classList.add('disabled');
    if (seconde == 0) {
        if (minute == 0) {
            minute = enPause ? minuteTravail : minutePause;
            seconde = enPause ? secondeTravail : secondePause;
            enPause = !enPause;
        } else {
            minute--;
            seconde = 59;
        }
    } else {
        seconde--;
    }
}

function darkMode() {
    theme.innerHTML = '<img src="images/dark-mode.png" />';

}

function lightMode() {
    theme.innerHTML = '<img src="images/light-mode.png" />';
}