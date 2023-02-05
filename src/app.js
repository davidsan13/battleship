import _ from 'lodash'
// import './style.css'
import Main from './components/main'
import './assets/styles.css'
import {StartMenu, listener} from './components/startmenu'
import gameover from './components/gameover'
import notification from './components/notif'

function component() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    wrapper.appendChild(StartMenu())
    wrapper.appendChild(Main())
    wrapper.appendChild(gameover())
    wrapper.appendChild(notification())
    document.body.appendChild(wrapper)
    listener()
  
}

component()
