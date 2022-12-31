import Gameboard from './gameboard'
import Player from './player'
import Ship from './ship'

const Controller = () => {
  let player
  let ai
  let playerBoard
  let aiBoard
  let playerShips = []
    function startGame() {
      player = Player()
      ai = Player()

        // console.log(player)
      return {player, ai}
    }

    function placeShip() {
      console.log(player)
    }
    function getPlayer() {
      return player
    }

    function createShips() {
      const  carrier = Ship(5)
      const battleship = Ship(4)
      const cruiser = Ship(3)
      const submarine = Ship(3)
      const destroyer = Ship(2)
      playerShips.push(carrier, battleship, cruiser, submarine, destroyer)
    }

    function getShips() {
      return playerShips
    }
    function createBoard() {
      playerBoard = Gameboard();
    }

    function placeShips() {
        playerShips.forEach(ships => {
          let x = Math.floor(Math.random() * 10);
          let y = Math.floor(Math.random() * 10);
          let location = [x,y]
          playerBoard.placeShip(ship,location)
        })
      
    }
    return {startGame, createShips, placeShip, getPlayer, getShips}
}

export default Controller
