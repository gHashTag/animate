import React, { Component } from 'react'
import { Button, Dimensions, Image, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import { Parallax  } from 'react-spring'
import Animated from 'animated/lib/targets/react-dom'
import Easing from 'animated/lib/Easing'
import Master from './Master'
import data from './data.json'
import './styles.css'

//const win = Dimensions.get('window')


export default class Masters extends Component {
  state = { current: 0 }

  scroll = to => this.refs.parallax.scrollTo(to)

  scrollNext = ({ master, data }) => {
    if(data.length === master.id+1) {
      this.scroll(0)
      this.setState({ current: 0 })
    } else {
      this.scroll(master.id+1)
      this.setState({ current: master.id+1 })
    }
  }

  scrollBack = ({ master, data }) => {
      this.scroll(this.state.current-1)
      this.setState({ current: master.id-1 })
  }

  renderMasters = () => {
    return data.map(master => <Master 
      onPressNext={() => this.scrollNext({ master, data })}
      onPressBack={() => this.scrollBack({ master, data })}
      master={master} 
      key={master.id}/>)
  }

  render() {
    return (
      <Parallax 
        className="container"
        ref="parallax"
        pages={data.length} 
        horizontal 
        scrolling={false}
      >
        {this.renderMasters()}
      </Parallax>
    )
  }
}
