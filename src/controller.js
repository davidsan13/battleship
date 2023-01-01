import Gameboard from './gameboard'
import Player from './player'
import Ship from './ship'

const Controller = () => {
    let player
    let ai
    let playerBoard
    let aiBoard
    const playerShips = []
    function startGame() {
        player = Player()
        ai = Player()
        createShips()
        playerBoard = createBoard()
        placeShips()
        // console.log(playerBoard.gameboard[1][3])
        // console.log(player)
        return { player, ai }
    }

    function getPlayer() {
        return player
    }

    function createShips() {
        const carrier = Ship(5, 'carrier')
        const battleship = Ship(4, 'battleship')
        const cruiser = Ship(3, 'cruiser')
        const submarine = Ship(3, 'submarine')
        const destroyer = Ship(2, 'destroyer')
        playerShips.push(carrier, battleship, cruiser, submarine, destroyer)
    }

    function getShips() {
      return playerShips
    }
    function createBoard() {
      playerBoard = Gameboard()
      return playerBoard
    }

    function placeShips() {
      playerShips.forEach((ship) => {
        while (!ship.getPlaced()) {
          const x = Math.floor(Math.random() * 10)
          const y = Math.floor(Math.random() * 10)
          const location = [x, y]
          playerBoard.placeShip(ship, location)
        }
      })
    }
    return {
        startGame,
        createShips,
        placeShips,
        getPlayer,
        getShips,
        playerBoard,
    }
}

export default Controller
