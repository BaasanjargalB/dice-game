// toglogchiin eeljiig hadgalah huwisagch, 1r toglogchiig 0, 2r toglogchiig 1 gej temdeglii
var activePlayer = 0;

// toglogchdiin onoog tsugluulah huwissagch
var scores = [0, 0];


// eeljiin onoog hadgalah huwisagch
var roundScore = 0;


// shoo buuh bolgondoo ali talaaraa buuhiig hadgalah huwisagch

// var  diceNumber = Math.floor(Math.random() * 6) + 1; 

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('score-1').textContent = 0; 
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function (){

    // 1-6 hurtel sanamsargui neg too gargaj awna
    var  diceNumber = Math.floor(Math.random() * 6) + 1; 

    // Shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";

    // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
    diceDom.src = 'dice-'  + diceNumber + '.png';

    // buusan too 1ees ylgaatai bol idewhtei toglogchiin eeljiin onoog nemegduulne
    if(diceNumber !== 1){
        // 1-ees ylgaatai too buulaa. Buusan toog toglogchid nemj ugbnu
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else{
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.

        // ene toglogchiin eeljindee tsugluulsan onoog 0 bolgo
        document.getElementById("current-" + activePlayer).textContent = 0;

        // herew idewhtei toglogch n 0 baiwl idewhtei toglogchiig 1 bolgo
        // ugui bol 0 bolgo
        roundScore = 0;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        // ulaan tsegiig haij oloh
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // Shoog tur alga bolgoh
        diceDom.style.display = 'none';

        // if(activePlayer === 0){
        //     activePlayer = 1;
        // }
        // else activePlayer = 0;
    }
});
