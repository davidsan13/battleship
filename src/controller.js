import Gameboard from './gameboard'
import Player from './player'
import Ship from './ship'

const Controller = () => {

    function startGame() {
      let player = Player()
      let ai = Player()
        // console.log(player)
      return {player, ai}
    }

    return { startGame,}
}

export default Controller
