const Ai = (aiPlayer) => {
  let attackedCell = []

  function selectCell() {
    const x = Math.floor(Math.random() * 10)
    const y = Math.floor(Math.random() * 10)
    const cell = [x,y]
    return cell
  }

  function updateArray(cell) {
    attackedCell.push(cell)
  }

  function attackPlayer(opponentBoard) {
    const cell = selectCell()
    console.log(cell)
    if (!attackedCell.includes(cell)) {
      updateArray(cell)
      // const array = [cell[0], cell[1]]
      // console.log(array)
      aiPlayer.attack(cell, opponentBoard)
      const uiCell = document.querySelector('.player').querySelector(`[data-cell='${cell[0]}${cell[1]}']`)
      console.log(uiCell)
      uiCell.dataset.isShot = opponentBoard.gameboard[cell[0]][cell[1]].isShot
      uiCell.dataset.hasShip = opponentBoard.gameboard[cell[0]][cell[1]].hasShip
    }
  }

  return { attackPlayer }
}

export default Ai