function gameover() {
  const container = document.createElement('div')
  const header1 = document.createElement('h1')
  const header2 = document.createElement('h2')
  const restartBtn = document.createElement('button')

  container.classList.add('gameoverCon')
  header1.classList.add('gameover')
  header2.classList.add('winner')
  header1.textContent = 'Gameover'
  container.appendChild(header1)
  container.appendChild(header2)
  container.appendChild(restartBtn)

  return container
}

export default gameover