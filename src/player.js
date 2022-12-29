import Gameboard from './gameboard'
const Player = (opponentBoard) => {
  const gameboard = Gameboard()
  function attack(array){
    opponentBoard.gameboard.receiveAttack(array[0],array[1])
    opponentBoard.gameboard.notification(array[0],array[1])
  }

  return {attack, gameboard}
}

export default Player