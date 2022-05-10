let container = document.querySelector('.gridContainer');
let input = document.getElementById('selection');
let button = document.getElementById('myBtn');
let clearBtn = document.getElementById('clearBtn')

function removeChildNodes() { //Checks for and removes any old divs before adding new ones
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createGrid (num) {
    removeChildNodes();
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`
    for (let i = 0; i < num * num; i++) { //Create n number of divs
        let div = document.createElement('div');
        div.classList.add('gridItem');
        div.setAttribute('name', 'newName')
        container.appendChild(div);
    }
}

input.addEventListener("keypress", (event) => {  //click button if enter key is pressed
    if(event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
}) 

clickset = false

button.addEventListener("click", () => { // get number input for grid
    let value = Number(document.getElementById('selection').value);
    if (value > 100) {
        alert('Error: Number is too large. Please enter number betwee 1-100');
    } else {
        createGrid(value);
        let parentDiv = document.querySelector('.gridContainer')
        parentDiv.addEventListener('mousedown', () => {
            clickset = true
        })
        parentDiv.addEventListener('mouseup', () => {
            clickset = false
        })
        let div = Array.from(document.getElementsByName('newName'));
            for (let i = 0; i < div.length; i++) {
                div[i].addEventListener('mouseover', (event) => {
                    if (clickset) {
                            div[i].classList.add('colored')
                    } else {
                        return
                    }
                        
             })
             
        }

    }
})

let toolbar = document.querySelector('.toolbar')
let colors = document.querySelectorAll('.colors')
toolbar.addEventListener('click', () => {
    toolbar.classList.toggle('small')
    toolbar.classList.toggle('big')
    colors.forEach(div => {
        div.classList.toggle('hidden')
        div.classList.toggle('shown')
    })
})

