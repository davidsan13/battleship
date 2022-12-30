import Controller from '../src/controller'
import Player from '../src/player'

describe('Controller game loop', () => {
  test('startGame function', () => {
    let gameCont = Controller()
    gameCont.startGame()
    const ai = Player()
    const player = gameCont.getPlayer()
    expect(player.gameboard.gameboard[0][0]).toEqual(ai.gameboard.gameboard[0][0])
  })
})