export default function notification() {
  const container = document.createElement('div')
  const message = document.createElement('h1')

  container.classList.add('notification')
  message.classList.add('message')

  container.appendChild(message)
  return container 
}