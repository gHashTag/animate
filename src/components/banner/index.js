import React, { Component } from 'react'
import { TouchableHighlight, Linking, PixelRatio, View, Image, Text, Dimensions } from 'react-native' // eslint-disable-line
import BannerAnim from 'rc-banner-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import './banner.css'
import 'rc-banner-anim/assets/index.css'
import A from './events/Poster1.png'
import B from './events/Poster2.png'
import C from './events/Poster3.png'


const win = Dimensions.get('window')
const { Element, Arrow, Thumb } = BannerAnim
const BgElement = Element.BgElement

const styles = {
  frame: {
    position: 'fixed', 
    top: win.height * win.scale / PixelRatio.getPixelSizeForLayoutSize(2) - 50, 
    left: win.width / 2 - PixelRatio.getPixelSizeForLayoutSize(150) / win.scale,
    width: PixelRatio.getPixelSizeForLayoutSize(300) / win.scale, 
    height: PixelRatio.getPixelSizeForLayoutSize(233) / win.scale
  },
  name: {
    fontSize: 50 / win.scale,
    width: '90%',
    marginLeft: '5%',
    color: '#fff',
  }
}

const url1 = 'https://www.facebook.com/events/2084309161848785/'
const url2 = 'https://www.facebook.com/events/173998166567654/'

class Banner extends Component {
  constructor() {
    super(...arguments);
    this.imgArray = [
      A,
      B,
      C
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  handlePress(url) {
    Linking.canOpenURL(url).then(supported => {
      return Linking.openURL(url)
    })
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({
        intShow: int,
      });
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }
  
  onMouseEnter() {
    this.setState({
      thumbEnter: true,
    });
  }

  onMouseLeave() {
    this.setState({
      thumbEnter: false,
    });
  }

  render() {
    const { frame } = styles
    const intArray = this.getNextPrevNumber()
    const thumbChildren = this.imgArray.map((img, i) =>
          <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
        )
    return (
      <BannerAnim 
        onChange={this.onChange} 
        onMouseEnter={this.onMouseEnter} 
        onMouseLeave={this.onMouseLeave} 
        prefixCls="custom-arrow-thumb"
      >

      <Element key="aaa"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url(${this.imgArray[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <TouchableHighlight
          onPress={() => this.handlePress(url1)}
          activeOpacity={0.2}
        >
          <Image  source={require('./events/Frame1.png')} style={frame} />
        </TouchableHighlight>
      </Element>

      <Element key="bbb"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url(${this.imgArray[1]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <TouchableHighlight
          onPress={() => this.handlePress(url2)}
          activeOpacity={0.2}
        >
          <Image  source={require('./events/Frame2.png')} style={frame} />
        </TouchableHighlight>
      </Element>

      <Element key="ccc"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url(${this.imgArray[1]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <TouchableHighlight
          onPress={() => this.handlePress(url2)}
          activeOpacity={0.2}
        >
          <Image  source={require('./events/Frame3.png')} style={frame} />
        </TouchableHighlight>
      </Element>

      <Arrow arrowType="prev" key="prev" prefixCls="user-arrow" component={TweenOne}
        onMouseEnter={this.prevEnter}
        onMouseLeave={this.prevLeave}
        animation={{ left: this.state.prevEnter ? 0 : -120 }}
      >
        <div className="arrow"></div>
        <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}
          appear={false} className="img-wrapper" 
        >
          <li
            style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})` }}
            key={intArray[0]}
          />
        </TweenOneGroup>
      </Arrow>
      <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}
        onMouseEnter={this.nextEnter}
        onMouseLeave={this.nextLeave}
        animation={{ right: this.state.nextEnter ? 0 : -120 }}
      >
        <div className="arrow"></div>
        <TweenOneGroup 
          enter={{ opacity: 0, type: 'from' }} 
          leave={{ opacity: 0 }} 
          appear={false} 
          className="img-wrapper" 
        >
          <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />
        </TweenOneGroup>
      </Arrow>
      <Thumb prefixCls="user-thumb" key="thumb" component={TweenOne}
        animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
      >
        {thumbChildren}
      </Thumb>
    </BannerAnim>
    );
  }
}

export default Banner 
