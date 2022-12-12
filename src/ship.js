/*
Carrier: 5
Battleship: 4
Cruiser: 3
Submarine: 3
Destroyer: 2
*/

const Ship = (len, name) => {
  const length = len
  let hits = 0
  let sunk = false

  const getLength = () => length
  const getHits = () => hits
  const getSunk = () => sunk
  const getName = () => name
  

  const updateHits = () => {
    hits += 1
    isSunk()
  }
  const isSunk = () => {
    if(hits === length) {
      sunk = true
    }
  }

  return {
    getLength,
    getHits,
    getSunk,
    updateHits,
    isSunk,
    getName,
  }
}

export default Ship