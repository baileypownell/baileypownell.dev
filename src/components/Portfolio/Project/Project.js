import React, { useEffect, useState } from 'react'
import RWT from '../../../../dist/images/happy-balance.png'
import VC from '../../../../dist/images/recipe-stash-dashboard.png'
import ISBA from '../../../../dist/images/ISBA.jpg'
import BW from '../../../../dist/images/3bdhome.jpg'
import './Project.scss'
import { SideSheet, Position, ArrowLeftIcon } from 'evergreen-ui'
import { RecipeStashProjectPage, WeightTrackerProjectPage, ThreeBeersProjectPage, ISBAProjectPage } from '../../../components/index'

const Projects = {
  ISBA: 'isba', 
  COOKBOOK: 'cookbook', 
  WEIGHT_TRACKER: 'weight-tracker', 
  BAND_WEBSITE: 'band-website'
}

const Project = (props) => {

  const [ showButton, setShowButton ] = useState(false)
  const [ backgroundImage, setBackgroundImage ] = useState('')
  const [ isShown, setIsShown ] = useState(false)

  const determineBackground = () => {
    switch(props.id) {
      case Projects.WEIGHT_TRACKER:
        setBackgroundImage(RWT)
        break
      case Projects.COOKBOOK:
        setBackgroundImage(VC)
        break
      case Projects.ISBA:
        setBackgroundImage(ISBA)
      break
      case Projects.BAND_WEBSITE:
        setBackgroundImage(BW)
      break
      default:
        setBackgroundImage(VC)
      return
    }
  }

  useEffect(() => {
    determineBackground()
    window.addEventListener('resize', resize.bind(this))
    resize()

    // effectively componentWillUnmount() 
    return () => {
      window.removeEventListener('resize', resize.bind(this))
    }
  }, [])

  const resize = () => {
    setShowButton( window.innerWidth <= 1000 )
  }

  const openSideSheet = () => {
    setIsShown(true)
  }

  const closeSideSheet = () => {
    setIsShown(false)
  }

  const { github_link, id } = props

  return (
    <>
      <div className="parent">
        <div className="website" style={{ backgroundImage: `url(${backgroundImage})`}}></div>
          <div className="darken">
            <div className="information-banner">
              { github_link ? <button><a href={github_link} target="_blank">View Source Code</a></button> : null }
              <button
              onClick={() => openSideSheet()}>Learn More</button>
          </div>
        </div>
      </div>

      <SideSheet
          width={1000}
          isShown={isShown}
          preventBodyScrolling={true}
          position={Position.RIGHT}
          onCloseComplete={() => closeSideSheet()}
        >
          <div className="side-sheet-content">
              { showButton ? <button onClick={closeSideSheet}><ArrowLeftIcon size={16} marginRight={8} /> Close </button> : null }
              { id === Projects.WEIGHT_TRACKER ? <WeightTrackerProjectPage></WeightTrackerProjectPage> : null }
              { id === Projects.COOKBOOK ? <RecipeStashProjectPage></RecipeStashProjectPage> : null }
              { id === Projects.BAND_WEBSITE ? <ThreeBeersProjectPage></ThreeBeersProjectPage> : null }
              { id === Projects.ISBA ? <ISBAProjectPage></ISBAProjectPage> : null }
          </div>
      </SideSheet>
    </>
  )
}

export default Project
