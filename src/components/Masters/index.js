import React, { PureComponent } from 'react'
import { Button, Dimensions, Image, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import Parallax from 'react-springy-parallax'
import Master from './Master'
import data from './data.json'

//const win = Dimensions.get('window')


export default class Masters extends PureComponent {
  state = {
    current: 0 
  }

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
    console.log('current', this.state)
    return (
      <Parallax 
        ref="parallax"
        pages={17} horizontal scrolling={false}>
        {this.renderMasters()}
      </Parallax>
    )
  }
}
        //<Page offset={1} title={data[1].title} subTitle={data[1].subTitle} onClick={() => this.scroll(2)} />
        //<Page offset={2} title="Morbi quis" onClick={() => this.scroll(0)} />
