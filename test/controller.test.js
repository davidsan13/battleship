import Controller from '../src/controller'
import Player from '../src/player'

describe('Controller game loop', () => {
  test('startGame function', () => {
    let gameCont = Controller()
    gameCont.startGame()
    console.log(gameCont)
    // const ai = Player()
    // expect(gameCont.player).toEqual(ai)
  })
})