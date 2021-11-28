const left_button = 0;
const cases = document.getElementsByClassName('case');
const right_button = 2;

const turn = document.getElementById('won');


document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for(let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('mouseup', function(event){
        if(event.button === left_button){
            if(this.innerHTML === ""){
                inserText(this, 'X');
                turn.innerText = "C'est au tour du joueur O";
            }
        }
        else if(event.button === right_button){
            if (this.innerHTML === ""){
                inserText(this, 'O');
                turn.innerText = "C'est au tour du joueur X";
            }
        }

    })

}

function inserText(element, lettrejoueur, ClassCss) {
    element.innerHTML = lettrejoueur;
    element.classList.add(ClassCss);
    element.backgroundColor = "#7c7b7b";
}


