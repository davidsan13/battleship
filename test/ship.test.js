/* eslint-disable no-undef */
// import { noConflict } from "lodash"

// ship
// length
// no of hits
// sunk: boolean

import Ship from '../src/ship'

describe('ship class', () => {
  const ship1 = Ship(3)
  describe('ship attributes', () => {

    test.skip('size of ship', () => {
      expect(ship1.getLength()).toEqual(4)
    })

    test('number of hits', () => {
      
      expect(ship1.getHits()).toEqual(0)
    })
    test.skip('check sunk', () => {
      expect(ship1.sunk).toEqual(false)
    })
  })
  
  describe.skip('ship methods', () => {
    test.skip('hit()', () => {
      ship1.hit()
      ship1.hit()
      expect(ship1.hits).toBe(2)
    })
    test('isSunk()', () => {
      ship1.hits = ship1.length
      ship1.isSunk()
      expect(ship1.sunk).toEqual(true)
    })
  })
});