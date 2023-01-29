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
    const controller = Controller()
    startBtn.addEventListener('click', () => {
      controller.startGame()
      updateActive()
    })
    
    board.forEach(item => {
      item.addEventListener('click', (e) => {
        const coord = cellCoord(e.target)
        const player = controller.getPlayer()
        const aiBoard = controller.getAiBoard()
        console.log(aiBoard)
        player.attack(coord, aiBoard)
        e.target.dataset.isShot = aiBoard.gameboard[coord[0]][coord[1]].isShot
        e.target.dataset.hasShip = aiBoard.gameboard[coord[0]][coord[1]].hasShip
        // console.log(aiBoard.gameboard[coord[0]][coord[1]].isShot)
      })
    })
}

function cellCoord(cell) {
  const x = cell.dataset.cell[0]
  const y = cell.dataset.cell[1]
  const coord = [x,y]
  return coord
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
