import Gameboard from './gameboard'
const Player = () => {
  const gameboard = Gameboard()
  function attack(array, opponentBoard){
    opponentBoard.gameboard.receiveAttack(array[0],array[1])
    opponentBoard.gameboard.notification(array[0],array[1])
  }

  return {attack, gameboard}
}

export default Player