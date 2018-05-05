import React, { PureComponent } from 'react'
import { TouchableOpacity, TouchableHighlight, Dimensions, Image, Button, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import _ from 'lodash'
import data from './data.json'

export default class Master extends PureComponent {
  onPressNext = match => {
    return () => {
      const now = _.find(data, { name: match.params.name })
      const { history } = this.props
      if (data.length !== now.id + 1) {
        const next = _.find(data, { id: now.id + 1 })
        history.push(`/master/${next.name}`)
      } else {
        history.push(`/master/${data[0].name}`)
      }
    }
  }

  onPressBack = match => {
    return () => {
      const now = _.find(data, { name: match.params.name })
      const { history } = this.props
      if (now.id !== 0) {
        const back = _.find(data, { id: now.id - 1 })
        history.push(`/master/${back.name}`)
      } else {
        const lengthdata = _.find(data, { id: data.length - 1 })
        history.push(`/master/${lengthdata.name}`)
      }
    }
  }

  render() {
    const { match } = this.props

    const store = _.find(data, { name: match.params.name })
    const { img, title, subTitle, info } = store
    return (
      <div>
        <Image source={img} style={{ position: 'absolute', left: '0%', bottom: 0, width: 600, height: 600 }} />
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
                {info.charAt(0)}
              </Text>
              {info.substring(1)}
            </Text>
          </View>
        </View>
        <View style={{ position: 'absolute', width: '7%', top: '38%', right: '5%' }} >
          <TouchableOpacity onPress={this.onPressNext(match)}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require('./ArrowNext.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '7%', top: '38%', left: '5%' }} > 
          { parseInt(match.params.id, 10) !== 0 &&
            <TouchableOpacity onPress={this.onPressBack(match)}>
              <Image
                style={{ height: 100, width: 100 }}
                source={require('./ArrowBack.png')}
              />
            </TouchableOpacity>
          }
        </View>
      </div>
    )
  }
}
