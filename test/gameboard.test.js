/* eslint-disable no-undef */
import Gameboard from '../src/gameboard'
import Ship from '../src/ship'

describe('Gameboard functions', () => {
  let gameboard
  let carrier
  let destroyer
  let ships
  let location
  beforeEach(() => {
    location = [0,4]
    gameboard = Gameboard()
    carrier = Ship(1, 'carrier')
    destroyer = Ship(2, 'destroyer')
    gameboard.placeShip(carrier, location)
    destroyer.updateHits()
    destroyer.updateHits()
    ships = [carrier, destroyer]
  })
  test.skip('create gamebard', () => {
    const arr = new Array(10).fill().map(() => new Array(10).fill({ hasShip: false, isShot: false }));
    expect(gameboard.gameboard[0][0]).toEqual(arr[0][0])
  })

  test.skip('placing ship on board', () => {
    location = [0,4]
    // gameboard.placeShip(destroyer, location)
    expect(gameboard.placeShip(destroyer, location)).toBe(0)
  })

  test.skip('cell object is updated with ship name', () => {
    expect(gameboard.gameboard[0][4].name).toBe(carrier.getName())
  })

  test.skip('check index has ship', () => {
    gameboard.gameboard[0][0].hasShip = true
    expect(gameboard.checkhasShip(carrier, 0, 0)).toBeTruthy()
  })

  test.skip('check for all ships sunk ', () => {
    expect(gameboard.checkSunk(ships)).toBe(false)

  })
  test('grid update isShot', () => {
    // gameboard.receiveAttack(0,4)
    const ship = gameboard.gameboard[0][4].name
    expect(gameboard.gameboard[0][4].isShot).toBeFalsy()
    expect(carrier.getHits()).toBe(1)
    // expect(gameboard.gameboard.)
  })
  test.skip('gameboard ships array push', () => {
    expect(gameboard.getShips()).toBe([carrier])
  })
})


