import React, { PureComponent } from 'react'
import Plx from 'react-plx'
import { Dimensions, Image, View, ProgressBar, Text } from 'react-native'

const win = Dimensions.get('window')

export default class Master extends PureComponent {
  render() {
    const { start, title, subTitle, info, img, end } = this.props.master
    const letter = info.charAt(0)
    const discription = info.substring(1)

    console.log('start', start+300)

    const masterParallaxData = [ {
        start: start, end: 300, endOffset: end, duration: 300, properties: [ { startValue: -100, endValue: 10, unit: '%', property: "translateX" }, ] }, {
        start: start+400, start: start+450, endOffset: end, duration: 300, properties: [ { startValue: 1, endValue: 0, property: "opacity" } ] } ]

    const nameParallaxData = [ {
        start: start, end: start+300, endOffset: end, duration: 300, properties: [ { startValue: 0, endValue: -500, property: "translateX" }, ] }, {
        start: start+400, end: start+750, endOffset: 0, duration: 300, properties: [ { startValue: 1, endValue: 0, property: "opacity" } ] } ]

    const classParallaxData = [ {
        start: start, end: start+400, endOffset: end, duration: 300, properties: [ { startValue: 0, endValue: 1, property: "opacity" }, ] }, {
        start: start+400, end: start+700, duration: 300, properties: [ { startValue: 1, endValue: 0, property: "opacity" }, ] } ]

    const lineParallaxData = [ {
        start: start, end: start+300, endOffset: end, duration: 300, properties: [ { startValue: -300, endValue: 0, unit: '%', property: "translateX" }, ] }, {
        start: start+500, end: start+600, endOffset: end, duration: 300, properties: [ { startValue: 0, endValue: 200, unit: '%', property: "translateX" }, ] }, {
        start: start, end: start+400, endOffset: end, duration: 300, properties: [ { startValue: 0, endValue: 1, property: "opacity" }, ] } ]

    return (
      <View>
        <Plx parallaxData={lineParallaxData}
          animateWhenNotInViewport={true}
          style={{ position: 'fixed', top: '31vh', right: 100 }} >
          <View style={{ width: 500 }}>
            <ProgressBar color='#D1AE6C' progress={0.1} style={{ height: 8  }} trackColor='#D1AE6C' />
          </View>
        </Plx>

        <Plx parallaxData={masterParallaxData}
          animateWhenNotInViewport={true}
          style={{
            position: 'fixed',
            bottom: '0vh'
          }}
        >
          <Image source={img} style={{ width: 600, height: 600 }} />
        </Plx>

        <Plx parallaxData={nameParallaxData} animateWhenNotInViewport={true}
          style={{ position: 'fixed', top: '25vh', right: -400 }} >
          <Text style={{ fontSize: 45 }} >
            {title} 
          </Text>
        </Plx>

        <Plx parallaxData={classParallaxData}
          animateWhenNotInViewport={true}
          style={{ position: 'fixed', top: '32vh', right: 100 }} >
          <Text style={{ fontSize: 22, textAlign: 'right' }}>
            {subTitle} 
          </Text>
        </Plx>

        <Plx parallaxData={classParallaxData}
          animateWhenNotInViewport={true}
          style={{ position: 'fixed', width: '30%', top: '38vh', right: 100 }} >
          <Text style={{ fontSize: 25, textAlign: 'right' }}>
            {letter}
          </Text>
          <Text style={{ fontSize: 15, textAlign: 'right' }}>
            {discription}
          </Text>
        </Plx>
      </View>
    )
  }
}
