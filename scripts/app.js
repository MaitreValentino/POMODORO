let minuteTravail = 25;
let secondeTravail = 0;
let minutePause = 5;
let secondePause = 0;
let minute = minuteTravail;
let seconde = secondeTravail;
let enPause = false;
let IDInterval = 0;
let estActif = false;

const minuteur = document.getElementById("temps");
const boutonLancer = document.getElementById("lancerBouton");
const etude = document.getElementById("etude");
const pause = document.getElementById("pause");
const popup = document.getElementById("popup");
const popupBouton = document.getElementById("closePopup");

boutonLancer.addEventListener('click', () => {
    if (!estActif) {
        IDInterval = setInterval(decompte, 1000);
        estActif = true;
        boutonLancer.textContent = "Arrêter";
    } else {
        clearInterval(IDInterval);
        affichage(minuteTravail, secondeTravail);
        enPause = false;
        estActif = false;
        boutonLancer.textContent = "Démarrer";
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

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

let modifEtude = document.getElementById("modifTravaille");
let modifPause = document.getElementById("modifPause");

minuteur.addEventListener('mouseover', () => {
    if (estActif) {
        temps.classList.add("notAllowed");
    } else {
        temps.classList.remove("notAllowed");
        minuteur.addEventListener('click', () => {
            openPopup();
            popupBouton.addEventListener('click', () => {
                modifPause.value
                closePopup();
            })
        });
    }
});