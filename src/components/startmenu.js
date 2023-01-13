import Controller from '../controller'

function StartMenu() {
    const container = document.createElement('div')
    const title = document.createElement('h1')
    const startBtn = document.createElement('a')
    

    container.classList.add('menu-container', 'active')
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
    const board = document.querySelector('.opponent').querySelectorAll('[data-cell]')
    console.log(board)
    startBtn.addEventListener('click', () => {
      const controller = Controller()
      controller.startGame()
      updateActive()
    })
    
    board.forEach(item => {
      item.addEventListener('click', () => {
        console.log('hello')
      })
    })
}

function updateActive () {
  const active = document.querySelector('.active');
  const menu = document.querySelector('.menu');
  const main = document.querySelector('.main')
  active.classList.remove('active')
  if (active.className.includes('menu')) {
    main.classList.add('active')
  } else {
    menu.classList.add('active')
  }
}
export  {StartMenu, listener}
