import Controller from '../controller'

function StartMenu() {
    const container = document.createElement('div')
    const title = document.createElement('h1')
    const startBtn = document.createElement('a')
    

    container.classList.add('menu-container')
    title.classList.add('title')
    startBtn.classList.add('start-btn')

    title.textContent = 'BATTLESHIP'
    startBtn.textContent = 'New Game'
    container.appendChild(title)
    container.appendChild(startBtn)

    return container
}

function listener() {
    const startBtn = document.querySelector('.start-btn')
    const controller = Controller()
    startBtn.addEventListener('click', () => {
      controller.startGame()

    })    
}



export  {StartMenu, listener}
