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

let toolbar = document.querySelector('.toolbar')
let colors = document.querySelectorAll('.colors')
toolbar.addEventListener('click', () => {
    toolbar.classList.toggle('small')
    toolbar.classList.toggle('big')
    getColor()
    colors.forEach(div => {
        div.classList.toggle('hidden')
        div.classList.toggle('shown')
    })
})

function getColor () {

    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', () => {
        })
    }
}

input.addEventListener("keypress", (event) => {  //click button if enter key is pressed
    if(event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
}) 

clickset = false
let color = 'black'


button.addEventListener("click", () => { // get number input for grid
    let value = Number(document.getElementById('selection').value);
    if (value > 100) {
        alert('Error: Number is too large. Please enter number betwee 1-100');
    } else {
        createGrid(value);
        let parentDiv = document.querySelector('.gridContainer')
        parentDiv.addEventListener('mousedown', () => {
            clickset = true
        });
        parentDiv.addEventListener('mouseup', () => {
            clickset = false
        });
        let div = Array.from(document.getElementsByName('newName'));
            for (let i = 0; i < div.length; i++) {
                div[i].addEventListener('mouseover', (event) => {
                    if (clickset) {
                            div[i].style.backgroundColor = color
                    } else {
                        return
                    }     
             })
        }
    }
})

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('newrgb')
let eraser = document.getElementById('eraser')
let clear = document.getElementById('clear')

one.addEventListener('click', () => {
    color = 'rgb(219, 0, 0)'
})

two.addEventListener('click', () => {
    color = 'rgb(238, 107, 0)'
})

three.addEventListener('click', () => {
    color = 'rgb(255, 242, 0)'
})

four.addEventListener('click', () => {
    color = 'rgb(7, 213, 0)'
})

five.addEventListener('click', () => {
    color = 'rgb(0, 64, 255)'
})

six.addEventListener('click', () => {
    color = 'rgb(85, 0, 128)'
})

seven.addEventListener('click', () => {
    color = 'black'
})

eight.addEventListener('change', () => {
    color = eight.value
})

eraser.addEventListener('click', () => {
    color = "white"
})

clear.addEventListener('click', () => {
    let div = Array.from(document.getElementsByName('newName'));
        for (let i = 0; i < div.length; i++) {
            div[i].style.backgroundColor = 'white'
        }
})

