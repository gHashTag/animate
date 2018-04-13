import React, { PureComponent } from 'react'
import { View, Image, Dimensions } from 'react-native'

const win = Dimensions.get('window')

export default class BoxAnimateLeft extends PureComponent {
  render() {
    const { tx, ty, source, distance } = this.props
    return (
      <View style={{
        position: 'fixed',
        zIndex: 1,
        right: distance 
      }}
      >
        <Image 
          style={{
            paddingLeft: -win.width / 2, 
            height: win.height,
            width: win.height / 2.75,
            transform: [
              { translateX: tx },
              { translateY: ty }
            ]
          }} 
          source={source}
        />
      </View>
    )
  }
}
