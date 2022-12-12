/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-expressions, no-undef
import Gameboard from '../src/gameboard'
import Ship from '../src/ship'
import Player from '../src/player'


describe('Player object', () => {
  let player1
  let player2
  let carrier
  let array
  beforeEach(() => {
    // opponentBoard = Gameboard()
    // playerBoard = Gameboard()
    carrier =  Ship(2, carrier)
    player1 = Player()
    player2 = Player()
    array = [0,0]
    player2.gameboard.placeShip(carrier, array)
  })
  test('attack opponent board', () => {
    player1.attack(array, player2)
    player1.attack([0,1], player2)
    expect(player2.gameboard.gameboard[0][0].hasShip).toBeTruthy()
    expect(carrier.getSunk()).toBe(true)
  })
})