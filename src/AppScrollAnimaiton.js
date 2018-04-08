import React, { Component } from 'react'
import { View, Text } from 'react-native'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', marginTop: 200, marginBottom: 900 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ScrollAnimation animateIn="fadeOut" duration="4" offset="500">
            <Text 
              style={{ fontSize: 30 }}
            >Hello world</Text>
          </ScrollAnimation>
        </View>
      </View>
    )
  }
}

export default App
