function Main() {
  const container = document.createElement('div')
  const playerContainer = document.createElement('div')
  const opponentContainer= document.createElement('div')
  const playerBoard = document.createElement('div')
  const opponentBoard = document.createElement('div')

  container.classList.add('main')
  container.textContent = 'Hello'
  playerContainer.classList.add('playerContainer')
  opponentContainer.classList.add('opponentContainer')
  playerBoard.classList.add('playerBoard')
  opponentBoard.classList.add('opponentBoard')

  
  container.appendChild(createBoard(playerBoard))
  container.appendChild(createBoard(opponentBoard))

  return container
}

function createBoard(boardContainer) {
  for(let i = 0; i<10; i++) {
    const row = document.createElement('div')
    row.classList.add('row-'+ i)
    for(let j = 0; j<10; j++) {
      const cell = document.createElement('div')
      cell.classList.add(j)
      row.appendChild(cell)
    }
    boardContainer.appendChild(row)
  }
  return boardContainer
}

export default Main