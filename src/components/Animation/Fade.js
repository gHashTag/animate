import React, { Component } from 'react'
import { Easing, Animated, ImageBackground, TouchableHighlight, Linking, StyleSheet, Button, Dimensions, Image, View, ProgressBar, Text } from 'react-native' // eslint-disable-line

export default class Fade extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    transX: new Animated.Value(0) 
  }

  fadeIn() {
    console.log('fadeIn')
    const { fadeAnim, transX } = this.state
    Animated.parallel([
      Animated.timing(fadeAnim, 
        {
          toValue: 1,     
          duration: 1000,
          easing: Easing.cubic
        }),
      Animated.timing(transX, 
        {
          toValue: -345,     
          duration: 2000,
          easing: Easing.cubic
        })
    ]).start()
  }

  fadeOut() {
    console.log('fadeOut')
    const { fadeAnim, transX } = this.state
    Animated.parallel([
      Animated.timing(fadeAnim, 
        {
          toValue: 0,     
          duration: 2000,
          easing: Easing.linear
        }),
      Animated.timing(transX, 
        {
          toValue: 345,     
          duration: 2000,
          easing: Easing.cubic
        })
    ]).start()
  }

  render() {
    const { fadeAnim, transX } = this.state
    this.props.show ? this.fadeIn() : this.fadeOut()
    console.log('transX', transX)
    return (
      <Animated.View                
        style={{
          opacity: fadeAnim,
          transform: [
            { translateX: transX }
          ],
          width: 250, 
          height: 50, 
          backgroundColor: 'powderblue' 
        }}
      >
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading</Text>
      </Animated.View>
    )
  }
}

