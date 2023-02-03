function Main() {
  const container = document.createElement('div')
  const playerContainer = document.createElement('div')
  const opponentContainer= document.createElement('div')
  const playerBoard = document.createElement('div')
  const opponentBoard = document.createElement('div')
  const playerTitle = document.createElement('h1')
  const opponentTitle = document.createElement('h1')

  container.classList.add('main')
  playerContainer.classList.add('playerContainer')
  opponentContainer.classList.add('opponentContainer')
  playerBoard.classList.add('player', 'board')
  opponentBoard.classList.add('opponent', 'board')

  playerTitle.textContent = 'Player'
  opponentTitle.textContent = 'Opponent'

  playerBoard.appendChild(playerTitle)
  opponentBoard.appendChild(opponentTitle)
  container.appendChild(createBoard(playerBoard))
  container.appendChild(createBoard(opponentBoard))
 
  return container
}

function createBoard(boardContainer) {
  for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
      const cell = document.createElement('div')
      cell.dataset.cell = `${i}${j}`
      boardContainer.appendChild(cell)
    }
  }
  return boardContainer
}

export default Main