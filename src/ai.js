const ai = (aiPlayer) => {
  let attackedCell = []

  function selectCell() {
    const x = Math.floor(Math.random() * 10)
    const y = Math.floor(Math.random() * 10)
    const cell = x + y
    return cell
  }

  function updateArray(cell) {
    attackedCell.push(cell)
  }

  function attackPlayer(aiPlayer, cell, opponentBoard) {
    const cell = selectCell()
    if (!attackedCell.includes(cell)) {
      updateArray(cell)
      const array = [cell[0], cell[1]]
      aiPlayer.attack(array, opponentBoard)
      const uiCell = document.querySelector(`[data-cell='${cell[0]}${cell[1]}']`)
      uiCell.isShot = opponentBoard.gameboard[coord[0]][coord[1]].isShot
      uiCell.hasShip = opponentBoard.gameboard[coord[0]][coord[1]].hasShip
    }
  }
}