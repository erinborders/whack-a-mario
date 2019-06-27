for(let i = 0; i < 6; i++) {
    let div = document.createElement('div')
    div.classList.add('hole')
    div.classList.add(`hole${i+1}`)
    document.querySelector('#game-container').appendChild(div)
}

const holes = document.querySelectorAll('.hole')

holes.forEach((hole) => {
    let moleDiv = document.createElement('div')
    moleDiv.classList.add('mole')
    hole.appendChild(moleDiv)
})