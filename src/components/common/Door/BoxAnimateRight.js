import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'

const win = Dimensions.get('window')

export default class BoxAnimateRight extends Component {
  render() {
    const { tx, ty, source, distance } = this.props
    return (
      <View style={{
        flex: 1,
        position: 'fixed',
        left: distance 
      }}
      >
        <Image 
          style={{
            paddingLeft: -win.width/2, 
            height: win.height,
            width: win.height/2.68,
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
