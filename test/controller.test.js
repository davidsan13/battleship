import Controller from '../src/controller'
import Player from '../src/player'

describe('Controller game loop', () => {
  test('startGame function', () => {
    let gameCont = Controller()
    gameCont.startGame()
    const ai = Player()
    gameCont.createShips()
    const player = gameCont.getShips()
    console.log(player)
    // expect(player.gameboard.gameboard[0][0]).toEqual(ai.gameboard.gameboard[0][0])
  })
})