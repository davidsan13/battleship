const Ai = (aiPlayer) => {
  let attackedCell = []

  function selectCell() {
    const x = Math.floor(Math.random() * 10).toString()
    const y = Math.floor(Math.random() * 10).toString()
    const cell = x+y
    return cell
  }

  function updateArray(cell) {
    attackedCell.push(cell)
  }

  function attackPlayer(opponentBoard) {
    let cell = selectCell()
    while(attackedCell.includes(cell)) {
      cell = selectCell()
      console.log('hhelll')
    }
    const location = coord(cell)
    console.log(attackedCell.includes(cell))
    updateArray(cell)
    aiPlayer.attack(location, opponentBoard)
    const uiCell = document.querySelector('.player').querySelector(`[data-cell='${location[0]}${location[1]}']`)
    
    uiCell.dataset.isShot = opponentBoard.gameboard[location[0]][location[1]].isShot
    uiCell.dataset.hasShip = opponentBoard.gameboard[location[0]][location[1]].hasShip
  }

  function coord(cell) {
    const x = cell[0]
    const y = cell[1]
    const location = [x, y]
    return location
  }

  return { attackPlayer }
}

export default Ai