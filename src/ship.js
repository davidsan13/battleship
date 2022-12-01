const Ship = (len) => {
  const length = len
  let hits = 0
  let sunk = false

  const getLength = () => length
  const getHits = () => hits
  const getSunk = () => sunk
  const hit = () => {
    hits += 1
  }

  const isSunk = () => {
    if(length === hits) {
      sunk = true
    }
  }

  return {getLength, getHits, getSunk, hit, isSunk}
}

export default Ship