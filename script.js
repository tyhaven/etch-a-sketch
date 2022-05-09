function createGrid (num) {
    let container = document.querySelector('.gridContainer')

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`

    //Create divs to change color
    for (let i = 0; i < num * num; i++) {
        let div = document.createElement('div') 
        div.classList.add('gridItem')
        container.appendChild(div)
    }
}