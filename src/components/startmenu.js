import Controller from '../controller'

function StartMenu() {
    const container = document.createElement('div')
    const title = document.createElement('h1')
    const startBtn = document.createElement('button')

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
    startBtn.addEventListener('click', (e) => {
      const controller = Controller()
      controller.startGame()
      removeActive()
    })
}

function removeActive () {
  const active = docuement.querySelector('.active');
  if (active != null) {
    active.classList.remove('active')
  }
}
export  {StartMenu, listener}
