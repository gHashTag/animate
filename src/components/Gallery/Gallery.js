import React from 'react'
import Parallax from 'react-springy-parallax'
import ParallaxAlbum from './ParallaxAlbum'
import ParallaxPortrait from './ParallaxPortrait'
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen } from './image'

export default class Gallery extends React.Component {
  render() {
    return (
      <Parallax 
        ref="parallax" pages={10}>
        <ParallaxAlbum path={One} heightImage={381} widthImage={500} leftImage={'0%'} alt="CityRetreat" offset={1.1} speed={0.5} />
        <ParallaxPortrait path={Three} heightImage={500} widthImage={404} leftImage={'-10%'} alt="CityRetreat" offset={1.9} speed={0.1} />
        <ParallaxAlbum path={Two} heightImage={381} widthImage={500} leftImage={'10%'} alt="CityRetreat" offset={1.7} speed={0.9} />
        <ParallaxAlbum path={Five} heightImage={381} widthImage={500} leftImage={'10%'} alt="CityRetreat" offset={2.9} speed={0.1} />
        <ParallaxPortrait path={Four} heightImage={500} widthImage={404} leftImage={'10%'} alt="CityRetreat" offset={2.4} speed={0.3} />
        <ParallaxAlbum path={Six} heightImage={381} widthImage={500} leftImage={'-10%'} alt="CityRetreat" offset={3.3} speed={0.5} />
        <ParallaxAlbum path={Seven} heightImage={381} widthImage={500} leftImage={'10%'} alt="CityRetreat" offset={3.7} speed={0.1} />
        <ParallaxPortrait path={Nine} heightImage={500} widthImage={404} leftImage={'-10%'} alt="CityRetreat" offset={4.0} speed={0.7} />
        <ParallaxAlbum path={Eight} heightImage={381} widthImage={500} leftImage={'10%'} alt="CityRetreat" offset={4.6} speed={0.6} />
        <ParallaxAlbum path={Ten} heightImage={381} widthImage={500} leftImage={'-10%'} alt="CityRetreat" offset={4.9} speed={0.1} />
        <ParallaxAlbum path={Thirteen} heightImage={381} widthImage={500} leftImage={'-10%'} alt="CityRetreat" offset={5.6} speed={0.3} />
        <ParallaxAlbum path={Eleven} heightImage={381} widthImage={500} leftImage={'10%'} alt="CityRetreat" offset={5.3} speed={0.7} />
        <ParallaxAlbum path={Twelve} heightImage={381} widthImage={500} leftImage={'10%'} alt="CityRetreat" offset={6.1} speed={0.1} />
        <ParallaxAlbum path={Fourteen} heightImage={381} widthImage={500} leftImage={'-10%'} alt="CityRetreat" offset={6.6} speed={0.9} />
        <ParallaxAlbum path={Fifteen} heightImage={381} widthImage={500} leftImage={'10%'} alt="CityRetreat" offset={6.9} speed={0.3} />
        <ParallaxPortrait path={Sixteen} heightImage={500} widthImage={404} leftImage={'0%'} alt="CityRetreat" offset={7.1} speed={0.9} />
      </Parallax>
    )
  }
}
