import _ from 'lodash'
import './style.css'
import Main from './components/main'
import './assets/styles.css'
import {StartMenu, listener} from './components/startmenu'

function component() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    wrapper.appendChild(StartMenu())
    wrapper.appendChild(Main())

   
    document.body.appendChild(wrapper)
    listener()
  
}

component()
