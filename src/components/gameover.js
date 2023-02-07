function gameover() {
  const container = document.createElement('div')
  const header1 = document.createElement('h1')
  const header2 = document.createElement('h2')
  const restartBtn = document.createElement('button')

  container.classList.add('gameoverCon', 'active')
  header1.classList.add('gameover')
  header2.classList.add('winner')
  restartBtn.classList.add('restart')
  header1.textContent = 'Gameover'
  restartBtn.textContent = 'Restart'
  container.appendChild(header1)
  container.appendChild(header2)
  container.appendChild(restartBtn)

  return container
}

export default gameover