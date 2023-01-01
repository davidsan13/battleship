import Controller from '../src/controller'
import Player from '../src/player'

describe('Controller game loop', () => {
  test('startGame function', () => {
      const gameCont = Controller()
      gameCont.startGame()
      const player = gameCont.getShips()
      // console.log(gameCont.playerBoard)
      // expect(player.gameboard.gameboard[0][0]).toEqual(ai.gameboard.gameboard[0][0])
  })
})
