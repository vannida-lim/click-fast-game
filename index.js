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
    let counter = 3
    let count = setInterval(() => {
        clickArea.textContent = counter
        counter--
        if (counter < 0) {
            clickArea.textContent = "GO!"
            startGame()
            clearInterval(count)
        }
    }, 1000)

})

clickArea.addEventListener('click', (e) => {
    if (!ended) {
        score++
        scoreText.textContent = score
    }
})

const startGame = () => {
    // startButton.style.display = 'none'

    score = -1
    ended = false

    startTime = new Date().getTime()

    const gameTimer = setInterval(()=> {
        let total = (new Date().getTime() - startTime) / 1000;

        if (total < duration) {
            timerText.textContent = total.toFixed(1)
            clicksText.textContent = (score / total).toFixed(1)
        } else {
            ended = true
            clearInterval(gameTimer)
            endGame()
            // startButton.style.display = 'inline'
        }
    }, 1)
}

const endGame = () => {
    let clicksPerSecond = (score / duration).toFixed(1)

    timerText.textContent = duration.toFixed(1)
    clicksText.textContent = clicksPerSecond

    setTimeout(()=> {
        alert(`You made ${score} clicks in ${duration} seconds. That's ${clicksPerSecond} clicks per second. Nice job, try again!`)
        clickArea.innerHTML = ''
        clickArea.append(startButton)
    }, 10)
}
