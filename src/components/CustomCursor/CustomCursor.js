import React, { useEffect, useState } from 'react'
import { fromEvent } from 'rxjs'
import isMobile from 'ismobilejs'
import './CustomCursor.scss'

const CustomCursor = () => {
  const [showCustomCursor, setShowCustomCursor] = useState(false)
  const [pageX, setPageX] = useState(window.pageX)
  const [pageY, setPageY] = useState(window.pageY)

  useEffect(() => {
    const userOnMobileDevice = isMobile(window.navigator).any
    setShowCustomCursor(!userOnMobileDevice)


    const mouseMoves = fromEvent(window, "mousemove");
    mouseMoves.subscribe(mouseEvent => {
      setPageX(mouseEvent.pageX)
      setPageY(mouseEvent.pageY)
    })
  }, [])

  useEffect(() => {
    if (showCustomCursor && (pageX !== undefined && pageY !== undefined)) {
      const cursor = document.querySelector('.custom-cursor')
      cursor.setAttribute('style', `top: ${(pageY - 10)}px; left: ${(pageX - 10)}px;`)
    }
  }, [pageX, pageY])

  return showCustomCursor ? <div className="custom-cursor"></div> : null
}

export default CustomCursor