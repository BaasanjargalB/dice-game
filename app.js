// toglogchiin eeljiig hadgalah huwisagch, 1r toglogchiig 0, 2r toglogchiig 1 gej temdeglii
var activePlayer = 1;

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

document.querySelector(".btn-roll").addEventListener("click", function (){
    var  diceNumber = Math.floor(Math.random() * 6) + 1; 
    diceDom.style.display = "block";
    diceDom.src = 'dice-'  + diceNumber + '.png';
});
