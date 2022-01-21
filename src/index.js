import React from 'react'
import ReactDOM from 'react-dom'

import {
  Contact,
  Portfolio,
  LandingImage,
  CustomCursor
} from './components/index'

import './main.scss'


ReactDOM.render(
  <div onMouseMove={(e)=> {
    const cursor = document.querySelector('.custom-cursor')
    cursor.setAttribute('style', `top: ${(e.pageY - 10)}px; left: ${(e.pageX - 10)}px;`)
    }}
  >
    <CustomCursor/>
    <LandingImage/>
    <Portfolio/>
    <Contact/>
  </div>,
  document.getElementById('app')
)
