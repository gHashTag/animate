import React, { PureComponent } from 'react'
import Plx from 'react-plx'
import { Image, Dimensions } from 'react-native'

const win = Dimensions.get('window')

class AnimateDoorLeft extends PureComponent {
  render() {
    const { path, start, duration, distance } = this.props
    return (
      <Plx parallaxData={
        [{
          start,
          duration,
          properties: [
            {
              startValue: 0,
              endValue: -win.width / 2,
              property: 'translateX'
            }
          ]
        }]
      } 
      style={{
        position: 'fixed',
        left: distance
      }}
      >
        <Image 
          source={path} 
          style={{
            height: win.height,
            width: win.height / 2.75,
            marginLeft: -win.height / 2.75 
          }} 
        />
      </Plx> 	
    )
  }
}

export default AnimateDoorLeft
