// toglogchiin eeljiig hadgalah huwisagch, 1r toglogchiig 0, 2r toglogchiig 1 gej temdeglii
var activePlayer = 1;

// toglogchdiin onoog tsugluulah huwissagch
var scores = [0, 0];


// eeljiin onoog hadgalah huwisagch
var roundScore = 0;


// shoo buuh bolgondoo ali talaaraa buuhiig hadgalah huwisagch

var  dice = Math.floor(Math.random() * 6) + 1; 

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0; 
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
