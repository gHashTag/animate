import React, { PureComponent } from 'react'
import { View, Image, Dimensions } from 'react-native' // eslint-disable-line
import DoorImage from './image/door.png'
import AnimateDoorLeft from './AnimateDoorLeft'
import AnimateDoorRight from './AnimateDoorRight'

export default class Door extends PureComponent {
  render() {
    return (
      <div style={{ height: 1400 }}>
        <AnimateDoorLeft path={DoorImage} distance={'10%'} start={20} duration={900} />
        <AnimateDoorLeft path={DoorImage} distance={'30%'} start={20} duration={500} />
        <AnimateDoorLeft path={DoorImage} distance={'50%'} start={0} duration={300} />
        <AnimateDoorRight path={DoorImage} distance={'90%'} start={20} duration={900} />
        <AnimateDoorRight path={DoorImage} distance={'70%'} start={20} duration={500} />
        <AnimateDoorRight path={DoorImage} distance={'50%'} start={0} duration={300} />
      </div>
    )
  }
}
