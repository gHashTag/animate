import React, { PureComponent } from 'react' 
import { TextInput, TouchableOpacity, TouchableHighlight, Dimensions, Image, Button, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import Responsive from 'react-responsive'
import _ from 'lodash'
import data from './data.json'
import './styles.css'
import { Header } from '../common'
import ArrowNext from '../ArrowNext.png'
import ArrowBack from '../ArrowBack.png'

const win = Dimensions.get('window')

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={415} maxWidth={991} />
const Mobile6 = props => <Responsive {...props} minWidth={321} maxWidth={414} />
const Mobile5 = props => <Responsive {...props} maxWidth={320} />

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
      <React.Fragment>
        <Desktop>
          <Image source={img} style={{ position: 'absolute', left: '0%', bottom: 0, width: 600, height: 600 }} />
          <View style={{ position: 'absolute', top: '31.1vh', right: '15%', width: '40%' }}>
            <View className='stripe pink' />
          </View>
          <View style={{ position: 'absolute', top: '25vh', right: '15%' }}>
            <Text style={{ fontFamily: 'Museo500', fontSize: 40, textAlign: 'right' }} >
              {title} 
            </Text>
          </View>

          <View style={{ position: 'absolute', top: '32%', right: '15%' }} >
            <Text style={{ fontFamily: 'CirceExtraLight', fontSize: 22, textAlign: 'right' }}>
              {subTitle} 
            </Text>
          </View>
          <View style={{ position: 'absolute', width: '40%', top: '38%', right: '15%' }} >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ color: '#707070', fontFamily: 'CirceLight', fontSize: 17, lineHeight: 20 }}>
                <Text style={{ color: '#000', fontFamily: 'Museo500', fontSize: 40, lineHeight: 1, bottom: 0 }}>
                  {info.charAt(0)}
                </Text>
                {info.substring(1)}
              </Text>
            </View>
          </View>
          <View style={{ position: 'absolute', width: '7%', top: '43%', right: '5%' }} >
            <TouchableOpacity onPress={this.onPressNext(match)}>
              <Image
                style={{ height: 100, width: 100 }}
                source={ArrowNext}
              />
            </TouchableOpacity>
          </View>
          <View style={{ position: 'absolute', width: '7%', top: '43%', left: '5%' }} > 
            { parseInt(match.params.id, 10) !== 0 &&
              <TouchableOpacity onPress={this.onPressBack(match)}>
                <Image
                  style={{ height: 100, width: 100 }}
                  source={ArrowBack}
                />
              </TouchableOpacity>
            }
          </View>
        </Desktop>

        <Tablet>
          <Header />
          <Image source={img} style={{ position: 'absolute', left: '0%', bottom: 0, width: 600, height: 600 }} />
          <View style={{ position: 'absolute', top: '30.7vh', right: '15%', width: '40%' }}>
            <View className='stripe pink' />
          </View>
          <View style={{ position: 'absolute', top: '25vh', right: '15%' }}>
            <Text style={{ fontFamily: 'Museo500', fontSize: 40, textAlign: 'right' }} >
              {title} 
            </Text>
          </View>

          <View style={{ position: 'absolute', top: '32%', right: '15%' }} >
            <Text style={{ fontFamily: 'CirceExtraLight', fontSize: 22, textAlign: 'right' }}>
              {subTitle} 
            </Text>
          </View>
          <View style={{ position: 'absolute', width: '40%', top: '38%', right: '15%' }} >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ color: '#707070', fontFamily: 'CirceLight', fontSize: 17, lineHeight: 20 }}>
                <Text style={{ color: '#000', fontFamily: 'Museo500', fontSize: 40, lineHeight: 1, bottom: 0 }}>
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
                source={ArrowNext}
              />
            </TouchableOpacity>
          </View>
          <View style={{ position: 'absolute', width: '7%', top: '38%', left: '5%' }} > 
            { parseInt(match.params.id, 10) !== 0 &&
              <TouchableOpacity onPress={this.onPressBack(match)}>
                <Image
                  style={{ height: 100, width: 100 }}
                  source={ArrowBack}
                />
              </TouchableOpacity>
            }
          </View>
        </Tablet>

        <Mobile6>
          <Header title='Мастера' />
          <View style={{ paddingTop: 0 }}>
            <View style={{ position: 'absolute', top: '16.5vh', right: '10%', width: '70%' }}>
              <View className='stripe pink' />
            </View>

            <View style={{ position: 'absolute', top: '13vh', right: '10%' }}>
              <Text style={{ fontFamily: 'Museo500', fontSize: 23, textAlign: 'right' }} >
                {title} 
              </Text>
            </View>

            <View style={{ position: 'absolute', top: '17.1vh', right: '10%', width: win.width - 100 }} >
              <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ flex: 1, fontFamily: 'CirceExtraLight', fontSize: 16, textAlign: 'right' }}>
                {subTitle} 
              </Text>
            </View>
          </View>

          <Image source={img} style={{ position: 'absolute', left: '20%', bottom: 0, width: 250, height: 250 }} /> 

          <View style={{ position: 'absolute', width: '80%', top: '28vh', left: '10%' }} >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'CirceLight', fontSize: 15, lineHeight: 20 }}>
                <Text style={{ fontFamily: 'Museo500', fontSize: 35, lineHeight: 1, bottom: 0 }}>
                  {info.charAt(0)}
                </Text>{info.substr(1, 400)}</Text>
            </View>
          </View>

          <View style={{ position: 'absolute', bottom: '5%', left: '10%' }} > 
            <TouchableOpacity onPress={this.onPressBack(match)}>
              <Image style={{ height: 60, width: 63 }} source={ArrowBack} />
            </TouchableOpacity>
          </View>

          <View style={{ position: 'absolute', bottom: '5%', right: '10%' }} >
            <TouchableOpacity onPress={this.onPressNext(match)}>
              <Image style={{ height: 60, width: 63 }} source={ArrowNext} />
            </TouchableOpacity>
          </View>
        </Mobile6>

        <Mobile5>
          <Header title='Мастера' />
          <View style={{ position: 'absolute', top: '16.3vh', right: '10%', width: '70%' }}>
            <View className='stripe pink' />
          </View>

          <View style={{ position: 'absolute', top: '13vh', right: '10%' }}>
            <Text style={{ fontFamily: 'Museo500', fontSize: 18, textAlign: 'right' }} >
              {title} 
            </Text>
          </View>

          <View style={{ position: 'absolute', top: '17vh', right: '10%', width: win.width - 100 }} >
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ flex: 1, fontFamily: 'CirceExtraLight', fontSize: 13, textAlign: 'right' }}>
              {subTitle} 
            </Text>
          </View>

          <Image source={img} style={{ position: 'absolute', left: '11%', bottom: 0, width: 250, height: 250 }} />

          <View style={{ position: 'absolute', width: '80%', top: '23vh', left: '9.5%' }} >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'CirceLight', fontSize: 10, lineHeight: 12 }}>
                <Text style={{ fontFamily: 'Museo500', fontSize: 30, lineHeight: 1, bottom: 0 }}>
                  {info.charAt(0)}
                </Text>
                {info.substr(1, 400)}
              </Text>
            </View>
          </View>

          <View style={{ position: 'absolute', width: '80%', top: '100vh', left: '9.5%' }} >
            <Text style={{ fontFamily: 'CirceLight', fontSize: 10, lineHeight: 12, marginBottom: 100 }}>{info.substring(400)}</Text>
          </View>

          <View style={{ position: 'absolute', bottom: '5%', left: '9%' }} > 
            <TouchableOpacity onPress={this.onPressBack(match)}>
              <Image
                style={{ height: 60, width: 63 }}
                source={ArrowBack}
              />
            </TouchableOpacity>
          </View>

          <View style={{ position: 'absolute', bottom: '5%', right: '9%' }} >
            <TouchableOpacity onPress={this.onPressNext(match)}>
              <Image
                style={{ height: 60, width: 63 }}
                source={ArrowNext}
              />
            </TouchableOpacity>
          </View>
        </Mobile5>
      </React.Fragment>
    )
  }
}

