
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
    gameboard[x][y].isShot = true
  }

  const placeShip = (ship) => {
    if(gameboard[0].length - 4 >= ship.getLength()) {
      for(let i = 0; i < ship.getLength(); i++) {
        gameboard[0][4+i].hasShip = true
      }
    }
  }

  const checkhasShip = (ship) => {
    for(let i = 0; i < ship.getLength(); i++) {
      if(gameboard[0][4+i].hasShip === true) {
        return true
      }
    }
    return false
  }

  function checkSunk(ships) {
    for(let i = 0; i < ships.length; i++) {
      if(ships[i].getSunk() === false) {
        return false
      }
    }
    return true
  }
 
  
  return {gameboard, receiveAttack, placeShip, checkhasShip, checkSunk}
}


export default Gameboard