let container = document.querySelector('.gridContainer')
let input = document.getElementById('selection')
let button = document.getElementById('myBtn')

function testFunc () {
    console.log('test')
}

//Checks for and removes any old divs before adding new ones
function removeChildNodes() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
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

 //click button if enter key is pressed
 input.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
})  



button.addEventListener("click", () => {
    let value = Number(document.getElementById('selection').value)
    if (value > 100) {
        alert('Error: Number is too large. Please enter number betwee 1-100')
    } else {
    createGrid(value)
    }
})
    





