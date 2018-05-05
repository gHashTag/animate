import React, { Component } from 'react'
import { Image, Dimensions, PixelRatio } from 'react-native'

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
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(-200) / (win.scale * 1.2),
    width: PixelRatio.getPixelSizeForLayoutSize(400) / (win.scale * 1.2), 
    height: PixelRatio.getPixelSizeForLayoutSize(400) / (win.scale * 1.2) 
  }
}

export default BoxAnimate 
