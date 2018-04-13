import React, { Component } from 'react'
import { Image, Dimensions } from 'react-native'

const win = Dimensions.get('window')

class BoxAnimate extends Component {
  render() {
    const { tx, ty, source } = this.props
    return (
      <div style={styles.container}>
        <Image 
          style={[styles.imageBox, { 
            transform: [
              { translateX: tx },
              { translateY: ty }
            ]
          }
          ]} 
          source={source}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'fixed',
    left: '50%',
    top: win.height / 4 
  },
  imageBox: {
    marginLeft: -256 / win.scale,
    width: 513 / win.scale, 
    height: 512 / win.scale 
  }
}

export default BoxAnimate 
