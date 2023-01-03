function StartMenu () {
  const container = document.createElement('div')
  const title = document.createElement('h1')
  const startBtn = document.createElement('button')

  container.classList.add('menu-container')
  title.classList.add('title')
  startBtn.classList.add('start-btn')

  title.textContent('BATTLESHIP')
  startBtn.textContent('New Game')

  container.appendChild(title)
  container.appendChild(startBtn)
  
  return container
}