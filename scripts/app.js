let minute = 25;
let seconde = 0;

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
