let minute = 1;
let seconde = 5;

const minuteur = document.getElementById("temps");
const boutonLancer = document.getElementById("lancerBouton");

boutonLancer.addEventListener('click', () => {
    setInterval(decompte, 1000);
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
        minute--;
        seconde = 59;
    } else {
        seconde--;
    }

}