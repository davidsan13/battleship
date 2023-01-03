import Gameboard from './gameboard'
import Player from './player'
import Ship from './ship'

const Controller = () => {
    let player
    let ai
    let playerBoard
    let aiBoard
    let playerShips
    let aiShips

    function getPlayer() {
        return player
    }
    function getAi() {
        return ai
    }
    function getShips() {
        return playerShips
    }
    function getBoard(board) {
        return board.gameboard
    }
    function createShips() {
        const ships = []
        const carrier = Ship(5, 'carrier')
        const battleship = Ship(4, 'battleship')
        const cruiser = Ship(3, 'cruiser')
        const submarine = Ship(3, 'submarine')
        const destroyer = Ship(2, 'destroyer')
        ships.push(carrier, battleship, cruiser, submarine, destroyer)
        return ships
    }

    function createBoard() {
        const board = Gameboard()
        return board
    }

    function placeShips(shipsArray, board) {
        shipsArray.forEach((ship) => {
            while (!ship.getPlaced()) {
                const x = Math.floor(Math.random() * 10)
                const y = Math.floor(Math.random() * 10)
                const location = [x, y]
                board.placeShip(ship, location)
            }
        })
    }

    function startGame() {
        player = Player()
        ai = Player()
        console.log(ai)
        playerShips = createShips()
        aiShips = createShips()
        aiBoard = createBoard()
        playerBoard = createBoard()
        placeShips(playerShips, playerBoard)
        placeShips(aiShips, aiBoard)
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
