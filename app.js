// togloomiin global huwisagchdiig zarlay
// togloom duussan esehiig hadgalah tulwiin huwisagch
var isNewGame;
var activePlayer;
var scores;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");

initGame();
// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function (){
if(isNewGame){
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
    }else{
    // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.
    switchToNextPlayer();
    }
}
else{
    alert('togloom duussan bn. NEw game towchiig darj ehelne uu');
}

});
// hold towchnii event listener
document.querySelector('.btn-hold').addEventListener('click', function(){
        if(isNewGame){
            // ug toglogchiin tsugluulsan eeljnii onoog global onoon deer n nemj ugnu
        scores[activePlayer] += roundScore;

        // delgets deer onoog n uurchluh
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // ug toglogch hojson esehiig shalgah
        if(scores[activePlayer] > 20){
            // togloom duussan tuluwt oruulna
            isNewGame = false;
            // winner gsn textiig nernii orond gargana
            document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
        }
        else{
            // toglogchiin eeljiig solino
            switchToNextPlayer();
        }
        }
        else{
            alert('togloom duuslaa. New game towchiig darj dahin ehelne uu!');
        }
});

// ene function n eeljiig daraachiin toglogch ruu shiljuuldeg
function switchToNextPlayer(){
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
}

document.querySelector('.btn-new').addEventListener('click', function(){
    initGame();
});


function initGame(){
    // togloom ehellee tuluwt oruulna
    isNewGame = true;

    // toglogchiin eeljiig hadgalah huwisagch, 1r toglogchiig 0, 2r toglogchiig 1 gej temdeglii
    activePlayer = 0;

    // toglogchdiin onoog tsugluulah huwissagch
    scores = [0, 0];

    // eeljiin onoog hadgalah huwisagch
    roundScore = 0;
    
    // shoo buuh bolgondoo ali talaaraa buuhiig hadgalah huwisagch

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('score-1').textContent = 0; 
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    diceDom.style.display = "none";
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

}