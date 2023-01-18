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
    function getAiBoard() {
        return aiBoard
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
                // const cell = document.querySelector(`[data-cell=${location[0]}${location[1]}]`)
                // console.log(cell)
            }
        })
    }

    function updatePlayerDom(gameboard) {
        const playerUIBoard = document.querySelector('.player')
        const board = gameboard.gameboard
        board.forEach((x, index) => {
            x.forEach((y, i) => {
                if(y.hasShip) {
                    const cell = playerUIBoard.querySelector(`[data-cell='${index}${i}']`)
                    cell.setAttribute('data-hasShip', y.hasShip)
                }
            })
            console.log(index)
        })
        // console.log(playerUIBoard.querySelector(`[data-cell='${x}${y}']`))
    }
    function startGame() {
        player = Player()
        ai = Player()
        playerShips = createShips()
        aiShips = createShips()
        aiBoard = createBoard()
        playerBoard = createBoard()
        placeShips(playerShips, playerBoard)
        placeShips(aiShips, aiBoard)
        console.log('Game Initialize')
        updatePlayerDom(playerBoard)
        
    }

    function ai() {
        let attackCell = []

    }
    const ai = () => {
        let attackCell = []

        function attack() {
            const x = Math.floor(Math.random() * 10)
            const y = Math.floor(Math.random() * 10)
            const cell= x + y
        }

        function updateArray(cell) {
            attackCell.push(cell)
        }
    }

    return {
        startGame,
        createShips,
        placeShips,
        getPlayer,
        getShips,
        playerBoard,
        getAiBoard,
    }
}

export default Controller
