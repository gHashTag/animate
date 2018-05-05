import React, { Component } from 'react'
import { Image, View, Text } from 'react-native' // eslint-disable-line
import FetchAPI from './components/FetchAPI'

class App extends Component {
  render() {
    return (
      <View>
        <FetchAPI />
      </View>
    )
  }
}

export default App 
