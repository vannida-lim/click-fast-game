let score = null
let duration = 10
let startTime = null
let ended = true

let timerText = document.querySelector('#timer')
let scoreText = document.querySelector('#score')
let clicksText = document.querySelector('#clicks')
let startButton = document.querySelector('#start')
let clickArea = document.querySelector('#click-area')

startButton.addEventListener('click', (e) => {
    startGame()
})

clickArea.addEventListener('click', (e) => {
    // if (clickArea.className !== toggl) {
    //     clickArea.style.background = 'blue'
    // }

    if (!ended) {
        score++
        scoreText.textContent = score
    }
})


const show = (element) => {
    element.style.diplay = 'inline'
} 

const hide = (element) => {
    element.style.display = 'none'
}


const startGame = () => {
    hide(startButton)
    score = -1
    ended = false

    startTime = new Date().getTime()
    
    let timerId = setInterval(()=> {
        let total = (new Date().getTime() - startTime) / 1000;

        if (total < duration) {
            timerText.textContent = total.toFixed(1)
            clicksText.textContent = (score / total).toFixed(1)
        } else {
            ended = true
            clearInterval(timerId)
            endGame()
        }
    }, 1)
}

const endGame = () => {
    let clicksPerSecond = (score / duration).toFixed(1)

    timerText.textContent = duration.toFixed(1)
    clicksText.textContent = clicksPerSecond
    show(startButton)

    setTimeout(()=> {
        alert(`You made ${score} clicks, in ${duration} seconds. That's ${clicksPerSecond} clicks per second. Nice job, try again!`)
    }, 10)
}
