let container = document.querySelector('.gridContainer')
let input = document.querySelector('input')
let button = document.getElementById('myBtn')

//Checks for and removes any old divs before adding new ones
function removeChildNodes() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}
    //click button if enter key is pressed
    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter") {
            event.preventDefault();
            button.click();
        }
    })  

    button.addEventListener("click", () => {
        console.log('test')
    })

function getInput (input) {
    let numberInput = +input

    

}



function createGrid (num) {

    removeChildNodes()

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`

    //Create divs to change color
    for (let i = 0; i < num * num; i++) {
        let div = document.createElement('div') 
        div.classList.add('gridItem')
        container.appendChild(div)
    }
}