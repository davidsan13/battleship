import Ship from '../src/ship'



describe('ship class', () => {
  let ship1
  beforeEach(() => {
    ship1 = Ship(3)
  })
  describe.skip("ship's attributes", () => {
    
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
  
  describe("ship's methods", () => {
    test.skip('hit()', () => {
      ship1.hit()
      ship1.hit()
      expect(ship1.hits).toBe(2)
    })

    test.skip('isSunk()', () => {
      ship1.hits = ship1.length
      ship1.isSunk()
      expect(ship1.sunk).toEqual(false)
    })

    test('updateLocation', () => {
      ship1.updateLocation([[0,1],[0,2]])
      expect(ship1.getLocation()).toEqual([[0,1], [0,2]])
    })
  })
});