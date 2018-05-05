import React, { PureComponent } from 'react'
import BoxAnimate from './BoxAnimate'
import We from '../we'

class ScrollAnimate extends PureComponent {
  state = {
    scroll: window.scrollY,
    delay200: 2,
    delay250: 2.5,
    delay300: 3,
    delay350: 3.5,
    delay400: 4,
    delay450: 4.5
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY })
  }

  render() {
    const { scroll, delay200, delay250, delay300, delay350, delay400, delay450 } = this.state
    const { container } = styles

    return (
      <div style={container}>
        <BoxAnimate tx={0} ty={-scroll} source={require('./image/Penthhouse.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay200} source={require('./image/Roof.png')}/>
        <BoxAnimate tx={-scroll} ty={0} source={require('./image/LeftSide.png')}/>
        <BoxAnimate tx={scroll} ty={0} source={require('./image/RightSide.png')}/>
        <BoxAnimate tx={-scroll / delay200} ty={0} source={require('./image/Column1.png')}/>
        <BoxAnimate tx={scroll / delay200} ty={0} source={require('./image/Column6.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay250} source={require('./image/WindowUp1.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay300} source={require('./image/WindowUp2.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay350} source={require('./image/WindowUp3.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay400} source={require('./image/WindowUp4.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay450} source={require('./image/WindowUp5.png')}/>
        <BoxAnimate tx={-scroll / delay250} ty={0} source={require('./image/Window1.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay350} source={require('./image/Window2.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay400} source={require('./image/Window3.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay450} source={require('./image/Window4.png')}/>
        <BoxAnimate tx={scroll / delay250} ty={0} source={require('./image/Door.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay450} source={require('./image/Column2.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay350} source={require('./image/Column3.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay300} source={require('./image/Column4.png')}/>
        <BoxAnimate tx={0} ty={-scroll / delay250} source={require('./image/Column5.png')}/>
        <BoxAnimate tx={0} ty={scroll / delay350} source={require('./image/Stairs.png')}/>
        <BoxAnimate tx={0} ty={scroll / delay350} source={require('./image/Foundation.png')}/>
        <BoxAnimate tx={0} ty={scroll / delay200 } source={require('./image/Logo.png')}/>
        <BoxAnimate tx={0} ty={scroll} source={require('./image/MansionWellness.png')}/>
        <We />
      </div>
    )
  }
}

const styles = {
  container: {
    height: 2300
  }
}

export default ScrollAnimate 
