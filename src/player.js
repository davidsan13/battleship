import Gameboard from './gameboard'
const Player = () => {
  
  function attack(array, opponentBoard){
    opponentBoard.receiveAttack(array[0],array[1])
    opponentBoard.notification(array[0],array[1])
  }

  return {attack}
}

export default Player