import React, { PureComponent } from 'react'
import { Platform, TouchableHighlight, Linking, PixelRatio, View, Dimensions } from 'react-native' // eslint-disable-line

const win = Dimensions.get('window')
const pixel = PixelRatio.getPixelSizeForLayoutSize(1)

class Image extends PureComponent {
  render() {
    const { src, alt } = this.props
    return (
      <img 
        style={{
          height: (380 / win.scale) * pixel,
          width: (380 / win.scale) * pixel,
          marginLeft: (-190 / win.scale) * pixel
        }} 
        src={src} alt={alt} 
      />
    )
  }
}

export { Image }
