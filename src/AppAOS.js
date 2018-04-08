import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AOS from 'aos'
import './dist/aos.css'

AOS.init()
class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', marginTop: 800, marginBottom: 900 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text 
            data-aos="fade-left" 
            data-aos-duration="500"
            style={{ fontSize: 30 }}
          >Hello world</Text>
        </View>
      </View>
    )
  }
}

export default App
