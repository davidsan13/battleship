const Gameboard = () => {
  // const placeShip = (array)
  let gameboard

  (function initBoard(){
    gameboard = (new Array(10)).fill().map(() => new Array(10).fill());
    for(let i = 0; i<10; i++) {
      for(let j = 0; j<10; j++){
        gameboard[i][j] = { hasShip: false, isShot: false }
      }
    }
    return gameboard
  })()

  const receiveAttack = (x,y) => {
    const cell = gameboard[x][y]
    cell.isShot = true

  }

  const placeShip = (ship) => {
    console.log(ship.getLength())
    if(gameboard[0].length - 4 >= ship.getLength()) {
      for(let i = 0; i < ship.getLength(); i++) {
        gameboard[0][4+i].hasShip = true
      }
    }
  }

  const checkCellhasShip = (ship) => {
    for(let i = 0; i < ship.getLength(); i++) {
      if(gameboard[0][4+i].hasShip === true) {
        return true
      }
    }
    return false
  }
  return {gameboard, receiveAttack, placeShip, checkCellhasShip}
}


export default Gameboard