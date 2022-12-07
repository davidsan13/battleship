/*
Carrier: 5
Battleship: 4
Cruiser: 3
Submarine: 3
Destroyer: 2
*/

const Ship = (len) => {
  const length = len
  let hits = 0
  let sunk = false
  let location = []

  const getLength = () => length
  const getHits = () => hits
  const getSunk = () => sunk
  const getLocation = () => location
  const hit = () => {
    hits += 1
  }

  const updateHits = () => {
    hits += 1
  }
  const isSunk = () => {
    if(hits === length) {
      sunk = true
    }
  }
  const updateLocation = (array) => {
    location = array
    console.log(location)
  }

  return {
    getLength,
    getHits,
    getSunk,
    getLocation,
    hit,
    updateHits,
    isSunk,
    updateLocation}
}

export default Ship