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
  let shipPlaced = false
  

  const getLength = () => length
  const getHits = () => hits
  const getSunk = () => sunk
  const getName = () => name
  const getPlaced = () => shipPlaced

  const updateHits = () => {
    hits += 1
    isSunk()
  }
  const isSunk = () => {
    if(hits === length) {
      sunk = true
    }
  }

  const updatePlaced = () => {
    shipPlaced = true
  }

  return {
    getLength,
    getHits,
    getSunk,
    updateHits,
    isSunk,
    getName,
    getPlaced,
    updatePlaced
  }
}

export default Ship