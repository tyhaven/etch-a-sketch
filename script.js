let container = document.querySelector('.gridContainer')
let input = document.getElementById('selection')
let button = document.getElementById('myBtn')

function testFunc () {
    console.log('test')
}

function removeChildNodes() { //Checks for and removes any old divs before adding new ones
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function createGrid (num) {
    removeChildNodes()
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`
    for (let i = 0; i < num * num; i++) { //Create n divs
        let div = document.createElement('div') 
        div.classList.add('gridItem')
        container.appendChild(div)
    }
}

 input.addEventListener("keypress", (event) => {  //click button if enter key is pressed
    if(event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
})  

button.addEventListener("click", () => { // get number input for grid
    let value = Number(document.getElementById('selection').value)
    if (value > 100) {
        alert('Error: Number is too large. Please enter number betwee 1-100')
    } else {
    createGrid(value)
    }
})

let div = document.getElementsByClassName('gridItem')
let newArr = []
newArr.push(...div)