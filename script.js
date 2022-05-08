function createGrid (num) {
    let container = document.querySelector('.gridContainer')
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div') 
        div.classList.add('gridItem')
        container.appendChild(div)


         
    }
}