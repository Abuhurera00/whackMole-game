const squares = document.querySelectorAll('.square');
const score = document.querySelector('#score');
const TimeLeft = document.querySelector('#time-left');


let result = 0;
let time = 30;
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    // console.log( squares[Math.floor(Math.random()*9)])
    randomSquare.classList.add('mole');
    randomSquareId = randomSquare.id
}
randomSquare()




squares.forEach(square => {
    square.addEventListener('click', () =>{
        if (square.id == randomSquareId) {
            result++
            score.innerHtml = result
            randomSquareId = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}
moveMole()

function countDown(){
    time--
    TimeLeft.innerHTML = time
    if(time == 0){
        clearInterval(countDownId)
        clearInterval(timerId)
    }
}

let countDownId = setInterval(countDown, 1000)