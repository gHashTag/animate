import React from 'react'
import { Dimensions, Image, View, Text } from 'react-native'
import { One } from './image'
import Plx from 'react-plx'
import Door from '../Door'

const win = Dimensions.get('window')

const masterParallaxData = [
  {
    start: 'self',
    duration: 300,
    end: 300,
    properties: [
      {
        startValue: -100,
        endValue: 10,
        unit: '%',
        property: "translateX"
      },
    ]
  },
  {
    start: 400,
    start: 450,
    duration: 300,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"

      }
    ]
  }
]

const nameParallaxData = [
  {
    start: 'self',
    end: 300,
    duration: 300,
    properties: [
      {
        startValue: 0,
        endValue: -400,
        property: "translateX"
      },
    ]
  },
  {
    start: 400,
    start: 450,
    duration: 300,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"

      }
    ]
  }
]

const classParallaxData = [
  {
    start: 0,
    end: 400,
    duration: 300,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      },
    ]
  },
  {
    start: 400,
    end: 700,
    duration: 300,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
    ]
  }
]

const lineParallaxData = [
  {
    start: 0,
    end: 400,
    duration: 300,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      },
    ]
  },
  {
    start: 400,
    end: 700,
    duration: 300,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
    ]
  }
]
console.log('win.width', win.width)

const Masters = () => (
  <View style={{ height: 4000 }}>
      <Plx parallaxData={masterParallaxData}
        animateWhenNotInViewport={true}
        style={{
          position: 'fixed',
          bottom: '0vh'
        }}
      >
        <Image source={One} style={{ width: 600, height: 600 }} />
      </Plx>

      <Plx parallaxData={nameParallaxData}
        animateWhenNotInViewport={true}
        style={{
          position: 'fixed',
          bottom: '65vh',
          right: -300
        }}
      >
        <Text 
          style={{
            fontSize: 30
          }}
        >
          Дмитрий Федеров
        </Text>
      </Plx>

      <Plx parallaxData={classParallaxData}
        animateWhenNotInViewport={true}
        style={{
          position: 'fixed',
          bottom: '60vh',
          right: 100
        }}
      >
        <Text 
          style={{
            fontSize: 20
          }}
        >
          System 432
        </Text>
      </Plx>

      <Plx parallaxData={classParallaxData}
        animateWhenNotInViewport={true}
        style={{
          position: 'fixed',
        }}
      >
        <View
          style={{
            borderBottomColor: 'gold',
            width: '50%',
            borderBottomWidth: 9,
          }}
        />
        <Text 
          style={{
            fontSize: 20
          }}
        >
          System 432
        </Text>
      </Plx>

  </View>
)

export default Masters 
