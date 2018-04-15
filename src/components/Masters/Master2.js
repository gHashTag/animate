import React, { PureComponent } from 'react' import Parallax from 'react-springy-parallax'
import { Dimensions, Image, View, ProgressBar, Text } from 'react-native'

const win = Dimensions.get('window')

export default class Master extends PureComponent {
  render() {
    const { title, offset, onClick, subTitle, info, img, end } = this.props.master
    const letter = info.charAt(0)
    const discription = info.substring(1)

    return (
      <View>
      <Parallax.Layer offset={offset} speed={0.3}>
        <Image source={img} style={{ position: 'absolute', left: '0%', bottom: 0, width: 600, height: 600 }} />
      </Parallax.Layer>

      <Parallax.Layer offset={offset} speed={0.3}>
        <Text onClick={onClick} style={{ position: 'absolute', right: 20, fontSize: 40, color: 'gold' }}> Next </Text>
      </Parallax.Layer>

      <Parallax.Layer offset={offset} speed={0.4}>
        <View style={{ position: 'absolute', top: '31vh', right: '10%', width: 500 }}>
          <ProgressBar color='#D1AE6C' progress={0.1} style={{ height: 8  }} trackColor='#D1AE6C' />
        </View>

        <View style={{ position: 'absolute', top: '25vh', right: '10%' }}>
          <Text style={{ fontSize: 40, textAlign: 'right' }} >
            {title} 
          </Text>
        </View>

        <View style={{ position: 'absolute', top: '32%', right: '10%' }} >
          <Text style={{ fontSize: 22, textAlign: 'right' }}>
            {subTitle} 
          </Text>
        </View>

        <View style={{ position: 'absolute', width: '30%', top: '38%', right: '10%' }} >
          <Text style={{ fontSize: 25, textAlign: 'right' }}>
            {letter}
          </Text>
          <Text style={{ fontSize: 15, textAlign: 'right' }}>
            {discription}
          </Text>
        </View>

      </Parallax.Layer>
    </View>
    )
  }
}
