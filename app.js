//variables
const statut =document.querySelector('h2');
let gameActiv = true;
let playerActiv = "X";
let statutGame = ["", "", "", "", "", "", "", "", "",]


//conditions pour gagner
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3 ,6],
    [1, 4 ,7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//tour joueur

const win = () => `Le joueur ${playerActiv} à gagné`;
const equal = () => "Egalité";
const turnPlayer = () => `C'est au tour du joueur ${playerActiv}`;
statut.innerHTML = turnPlayer();

document.querySelectorAll(".case").forEach(cell => cell.addEventListener('click', gestionCliclCase));
document.querySelector("#tryAgain").addEventListener('click', recommencer);


//le clic des cases
function gestionCliclCase(){
    //index des cases
    const indexCase = parseInt(this.dataset.index)


    if(statutGame[indexCase] !== "" || !gameActiv){
        return
    }
    statutGame[indexCase]= playerActiv;
    this.innerHTML= playerActiv;

    verifGagne()
}


//vérification pour conditions victoire
function  verifGagne(){
    let turnWin = false;

    for(let conditionVictoire of winConditions){
        let val1 = statutGame[conditionVictoire[0]];
        let val2 = statutGame[conditionVictoire[1]];
        let val3 = statutGame[conditionVictoire[2]];
        if(val1 === "" || val2 === "" || val3 === ""){
            continue;
        }
        if(val1 === val2 && val2 === val3){
            turnWin = true;
            break;
        }
    }
    if(turnWin){
        statut.innerHTML = win();
        gameActiv = false;
        return;
    }

    if(!statutGame.includes("")){
        statut.innerHTML = equal();
        gameActiv = false;
        return;
    }
    playerActiv = playerActiv === "X" ? "O" : "X";
    statut.innerHTML = turnPlayer()
}


//Rafraichir le jeu
function recommencer(){
    playerActiv = "x";
    gameActiv = true;
    statutGame = ["", "", "", "", "", "", "", "", "",];
    statut.innerHTML = turnPlayer();
    document.querySelectorAll('.case').forEach(cell => cell.innerHTML = "");
}