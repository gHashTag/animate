import React, { PureComponent } from 'react'
import Parallax from 'react-springy-parallax'
import { Text, Platform, TouchableHighlight, Linking, PixelRatio, View, Dimensions } from 'react-native' // eslint-disable-line
import Responsive from 'react-responsive'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={415} maxWidth={991} />
const Mobile = props => <Responsive {...props} maxWidth={414} />

const win = Dimensions.get('window')

export default class ParallaxAlbum extends PureComponent {
  render() {
    const { 
      path, 
      alt, 
      heightImage, 
      widthImage, 
      leftImage, 
      offset,
      speed
    } = this.props

    return (
      <View>
        <Desktop>
          <Parallax.Layer 
            offset={offset} 
            speed={speed}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src={path} 
              style={{ 
                height: heightImage,
                width: widthImage,
                marginLeft: leftImage
              }}
              alt={alt} 
            />
          </Parallax.Layer>
        </Desktop>
        <Tablet>
          <Parallax.Layer 
            offset={offset} 
            speed={speed}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src={path} 
              style={{ 
                height: heightImage,
                width: widthImage,
                marginLeft: leftImage
              }}
              alt={alt} 
            />
          </Parallax.Layer>
        </Tablet>
        <Mobile>
          <img 
            style={{
              height: win.width * 0.751,
              width: win.width 
            }} 
            src={path} alt={alt} 
          />
        </Mobile>
      </View> 	
    )
  }
}
