import Gameboard from './gameboard'
import Player from './player'
import Ship from './ship'
import Ai from './ai'
const Controller = () => {
    let player
    let ai
    let AiAtt
    let playerBoard
    let aiBoard
    let playerShips
    let aiShips
    let playerTurn = true
    let coord
    let winner

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
        // const battleship = Ship(4, 'battleship')
        // const cruiser = Ship(3, 'cruiser')
        // const submarine = Ship(3, 'submarine')
        // const destroyer = Ship(2, 'destroyer')
        ships.push(carrier)
        // , battleship, cruiser, submarine, destroyer)
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
                if (y.hasShip) {
                    const cell = playerUIBoard.querySelector(
                        `[data-cell='${index}${i}']`
                    )
                    cell.setAttribute('data-hasShip', y.hasShip)
                }
            })
        })
        // console.log(playerUIBoard.querySelector(`[data-cell='${x}${y}']`))
    }
    function startGame() {
        const main = document.querySelector('.main');
        updateActive(main)
        player = Player()
        ai = Player()
        player.name = 'Player 1'
        ai.name = 'Ai'
        AiAtt = Ai(ai)
        playerShips = createShips()
        aiShips = createShips()
        aiBoard = createBoard()
        playerBoard = createBoard()
        placeShips(playerShips, playerBoard)
        placeShips(aiShips, aiBoard)
        console.log('Game Initialize')
        updatePlayerDom(playerBoard)
        boardListener()
    }

    function updateActive(dom){
        const active = document.querySelector('.active');
        active.classList.remove('active')
        dom.classList.add('active')
    }
    function updatePlayerTurn() {
        if(playerTurn) {
            playerTurn = false
        } else {
            playerTurn = true
        }
    }

    function boardListener() {
        const board = document
            .querySelector('.opponent')
            .querySelectorAll('[data-cell]')
        board.forEach((item) => {
            item.addEventListener('click', (e) => {
                coord = cellCoord(e.target)
                if(e.target.dataset.isShot) {
                    return
                }
                playerAttack(e.target)
                updatePlayerTurn()
                const winnerEl = document.querySelector('.winner');
                
                activeBoard()
                noti(aiBoard)
                if(!checkWinner(aiBoard, aiShips, player)) {
                    setTimeout(aiMove, 1000)
                }
                
            })
        })
    }

    function playerAttack(e) {
        player.attack(coord, aiBoard)
        e.dataset.isShot = aiBoard.gameboard[coord[0]][coord[1]].isShot
        e.dataset.hasShip = aiBoard.gameboard[coord[0]][coord[1]].hasShip
    }

    function aiMove() {
        AiAtt.attackPlayer(playerBoard)
        updatePlayerTurn()
        activeBoard()
        noti(playerBoard)
    }
    function cellCoord(cell) {
        const x = cell.dataset.cell[0]
        const y = cell.dataset.cell[1]
        const coord = [x, y]
        return coord
    }

    function checkWinner(board, ships, player) {
        const winnerEl = document.querySelector('.winner');
        if (board.allSunk(ships)) {
            winner = player.name
            winnerEl.textContent = winner
            updateActive(winnerEl.parentElement)
            return true
        }
        return false
    }

    function activeBoard() {
        const oppBoard = document.querySelector('.opponent', '.board')
        if (!playerTurn) {
            oppBoard.classList.add('active')
        } else {
            oppBoard.classList.remove('active')
        }
    }

    function noti(gameboard) {
        const m = document.querySelector('.message')
        const message = gameboard.notification(coord[0], coord[1])
        m.textContent = message
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
