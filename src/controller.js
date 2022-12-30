import Gameboard from './gameboard'
import Player from './player'
import Ship from './ship'

const Controller = () => {
  let player
  let ai
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
    }
    return {startGame, placeShip, getPlayer}
}

export default Controller
