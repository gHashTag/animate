import React, { PureComponent } from 'react'
import { Animated, ImageBackground, TouchableHighlight, Linking, StyleSheet, Button, Dimensions, Image, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import Fade from './Fade'

export default class Anim extends PureComponent {
  state = {
    show: false
  }

  render() {
    const { show } = this.state
    const { container } = styles
    return (
      <View style={container}>
        <View style={{ width: 250 }} >
          <Button
            onPress={() => {
              this.setState(state => ({
                show: !state.show
              }))
            }}
            title="Press me" 
          />
        </View>
        <View>
          <Fade show={show} />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25
  }
}
