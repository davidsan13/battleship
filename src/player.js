import Gameboard from './gameboard'
const Player = () => {
  
  function attack(array, opponentBoard){
    opponentBoard.gameboard.receiveAttack(array[0],array[1])
    opponentBoard.gameboard.notification(array[0],array[1])
  }

  return {attack}
}

export default Player