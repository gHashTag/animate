import React, { PureComponent } from 'react' 
import { TouchableHighlight, Dimensions, Image, Button, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import Parallax from 'react-springy-parallax'
import AOS from 'aos'
import '../aos.css'

//const win = Dimensions.get('window')

AOS.init()
export default class Master extends PureComponent {
  render() {
    const { id, title, onPress, subTitle, info, img } = this.props.master
    const letter = info.charAt(0)
    const discription = info.substring(1)
    return (
      <React.Fragment>
        <Parallax.Layer offset={id} speed={0.9}>
          <Image 
            source={img} style={{ position: 'absolute', left: '0%', bottom: 0, width: 600, height: 600 }} />
        </Parallax.Layer>


      <Parallax.Layer offset={id} speed={0.9}>
        <View style={{ position: 'absolute', top: '31vh', right: '15%', width: '40%' }}>
          <ProgressBar color='#D1AE6C' progress={0.1} style={{ height: 4 }} trackColor='#D1AE6C' />
        </View>

        <View style={{ position: 'absolute', top: '25vh', right: '15%' }}>
          <Text style={{ fontSize: 40, textAlign: 'right' }} >
            {title} 
          </Text>
        </View>

        <View style={{ position: 'absolute', top: '32%', right: '15%' }} >
          <Text style={{ fontSize: 22, textAlign: 'right' }}>
            {subTitle} 
          </Text>
        </View>

        <View style={{ position: 'absolute', width: '40%', top: '38%', right: '15%' }} >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 35 }}>
                {letter}
              </Text>
              {discription}
            </Text>
          </View>
        </View>
      </Parallax.Layer>

      <Parallax.Layer offset={id} speed={0.9}>
        <View style={{ position: 'absolute', width: '7%', top: '38%', right: '5%' }} >
          <Button
            onPress={onPress}
            ref={this.props.refs}
            title="Next"
            color="#D1AE6C"
          />
        </View>
      </Parallax.Layer>

      </React.Fragment>
    )
  }
}
