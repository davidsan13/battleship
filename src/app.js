import _ from 'lodash'
import './style.css'
import Main from './components/main'
import './assets/styles.css'
import {StartMenu, listener} from './components/startmenu'

function component() {
    document.body.appendChild(StartMenu()) 

    listener()
  
}

component()
