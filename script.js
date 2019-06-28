for(let i = 0; i < 6; i++) {
    let div = document.createElement('div')
    div.classList.add('hole')
    div.classList.add(`hole${i+1}`)
    document.querySelector('#game-container').appendChild(div)
}

const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
var lastHole; //creating a global variable
var timeUp = false;
const startButton = document.querySelector('#start')

startButton.addEventListener('click', startGame())

holes.forEach((hole) => {
    let moleDiv = document.createElement('div')
    moleDiv.classList.add('mole')
    hole.appendChild(moleDiv)
})

function randomTime (min, max) {
    //gives a random number based off arguments passed in
    return Math.random() * (max - min) + min;
}

function randomHole (holes) { //get me a random DOM hole element
    let index = Math.floor(Math.random() * holes.length) //rounds down the random number we got from multiply math.random by the array.length
    let hole = holes[index]
    if (hole === lastHole) {
        return randomHole(holes) //stop and rerun the function if there are repeats
    }
    lastHole = hole
    return hole
}

function popUp () {
    let time = randomTime(200, 1000)
    let hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up')
        if (!timeUp) popUp()
    }, time)
}

function startGame () {
    scoreBoard.textContent = 0
    timeUp = false
    popUp()
    setTimeout(() => timeUp = true, 10000)
}

