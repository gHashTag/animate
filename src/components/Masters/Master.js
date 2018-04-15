import React, { Component } from 'react' 
import { TouchableOpacity, TouchableHighlight, Dimensions, Image, Button, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import { Parallax  } from 'react-spring'
import './styles.css'

export default class Master extends Component {
  render() {
    const gradient = 'pink'
    const { id, title, subTitle, info, img } = this.props.master
    return (
      <React.Fragment>

        <Parallax.Layer offset={id} speed={0.2} >
          <Image 
            source={img} style={{ position: 'absolute', left: '0%', bottom: 0, width: 600, height: 600 }} />
        </Parallax.Layer>

        <Parallax.Layer offset={id} speed={0.9} >
          <div style={{ position: 'absolute', top: '30.7vh', right: '15%', width: '40%' }}>
            <div className={`stripe ${gradient}`} />
          </div>
        </Parallax.Layer>

        <Parallax.Layer offset={id} speed={0.5} >
          <View style={{ position: 'absolute', top: '25vh', right: '15%' }}>
            <Text style={{ fontSize: 40, textAlign: 'right' }} >
              {title} 
            </Text>
          </View>
        </Parallax.Layer>

        <Parallax.Layer offset={id} speed={0.7} >
          <View style={{ position: 'absolute', top: '32%', right: '15%' }} >
            <Text style={{ fontSize: 22, textAlign: 'right' }}>
              {subTitle} 
            </Text>
          </View>
        </Parallax.Layer>

      <Parallax.Layer offset={id} speed={0}>
        <View style={{ position: 'absolute', width: '40%', top: '38%', right: '15%' }} >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 35 }}>
                {info.charAt(0)}
              </Text>
              {info.substring(1)}
            </Text>
          </View>
        </View>
      </Parallax.Layer>


      <Parallax.Layer offset={id} speed={0.1}>
        <View style={{ position: 'absolute', width: '7%', top: '38%', left: '5%' }} > 
          { this.props.master.id !== 0 &&
            <TouchableOpacity onPress={this.props.onPressBack}>
              <Image
                style={{ height: 100, width: 100 }}
                source={require('./ArrowBack.png')}
              />
            </TouchableOpacity>
          }
        </View>

        <View style={{ position: 'absolute', width: '7%', top: '38%', right: '5%' }} >
          <TouchableOpacity onPress={this.props.onPressNext}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require('./ArrowNext.png')}
            />
          </TouchableOpacity>
        </View>
      </Parallax.Layer>

      </React.Fragment>
    )
  }
}
