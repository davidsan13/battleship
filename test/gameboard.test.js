/* eslint-disable no-undef */
import Gameboard from '../src/gameboard'
import Ship from '../src/ship'
/*
- miss attacks
- check if all ship sunk
- receiveAttack
*/


describe('Gameboard functions', () => {
  let gameboard
  let carrier
  beforeEach(() => {
    gameboard = Gameboard()
    carrier = Ship(5)
  })
  test.skip('create gamebard', () => {
    const arr = new Array(10).fill().map(() => new Array(10).fill({ hasShip: false, isShot: false }));
    expect(gameboard.gameboard[0][0]).toEqual(arr[0][0])
  })

  test.skip('placing ship on board', () => {
    gameboard.placeShip(carrier)
    expect(gameboard.gameboard[0][4].hasShip).toBeTruthy()
  })

  test('check index has ship', () => {
    gameboard.gameboard[0][0].hasShip = true
    expect(gameboard.checkCellhasShip(carrier)).toBeTruthy()
  })
  test.skip('grid update isShot', () => {
    gameboard.receiveAttack(0,0)
    expect(gameboard.gameboard[0][0].isShot).toBeTruthy()
  })
})