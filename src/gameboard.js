import { isObjectLike } from "lodash";

const Gameboard = () => {
  // const placeShip = (array)
  let gameboard
  const ships = {};
  
  (function initBoard(){
    gameboard = (new Array(10)).fill().map(() => new Array(10).fill());
    for(let i = 0; i<10; i++) {
      for(let j = 0; j<10; j++){
        gameboard[i][j] = {hasShip: false, isShot: false}
      }
    }
    return gameboard
  })()

  const getShips = () => ships

  const receiveAttack = (x,y) => {
    const cell = gameboard[x][y]
    let message
    cell.isShot = true
    if(cell.hasShip) {
      let ship = ships[cell.name]
      ship.updateHits()
    }
  }
  const placeShip = (ship, location) => {
    const x = location[0]
    const y = location[1]
    // console.log(gameboard)
    if(checkhasShip(ship, x, y)) return 1
    for(let i = 0; i < ship.getLength(); i++) {
      gameboard[x][y+i].hasShip = true
      gameboard[x][y+i].name = ship.getName()
    }
    ships[ship.getName()] = ship
    ship.updatePlaced()
    console.log(gameboard)
    return 0
    
  }

  const checkhasShip = (ship, x, y) => {
    for(let i = 0; i < ship.getLength(); i++) {
      if(y+i > 9 || gameboard[x][y+i].hasShip === true) {
        return true
      }
    }
    return false
  }

  function checkSunk(obj) {
    // for(const key in Obj) {
    //   if(object[key].getSunk() === false) {
    //     return false
    //   }
    // }
    let message = true
    Object.keys(obj).forEach((key) => {
      if(obj[key].getSunk() === false) {
        console.log(obj[key])
        message = false
      } 
    })
    return message
  }
 
  // review notif with attack
  function notification(x,y) {
    const cell = gameboard[x][y]
    let message
    cell.isShot = true
    if(cell.hasShip) {
      let ship = ships[cell.name]
      if(ship.getSunk()) {
        message = 'You Sunk a Ship'
      } else {
        message = 'You Hit a Ship'
      }
    } else {
      message = 'You Miss'
    }
    return console.log(message)
  }
  
  return {gameboard, receiveAttack, placeShip, checkhasShip, checkSunk, getShips, notification}
}


export default Gameboard