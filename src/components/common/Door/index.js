import React, { PureComponent } from 'react'
import BoxAnimateLeft from './BoxAnimateLeft'
import BoxAnimateRight from './BoxAnimateRight'

class Door extends PureComponent {
  state = {
    scroll: window.scrollY
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
    const { scroll } = this.state
    const { container } = styles

    return (
      <div style={container}>
        <BoxAnimateLeft tx={-scroll / 3} distance={'90%'} ty={0} source={require('./image/Door.png')}/>
        <BoxAnimateLeft tx={-scroll / 1.5} distance={'70%'} ty={0} source={require('./image/Door.png')}/>
        <BoxAnimateLeft tx={-scroll} distance={'50%'} ty={0} source={require('./image/Door.png')}/>
        <BoxAnimateRight tx={scroll / 3} distance={'90%'} ty={0} source={require('./image/Door.png')}/>
        <BoxAnimateRight tx={scroll / 1.5} distance={'70%'} ty={0} source={require('./image/Door.png')}/>
        <BoxAnimateRight tx={scroll} distance={'50%'} ty={0} source={require('./image/Door.png')}/>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  container: {
    height: 2300
  }
}

export default Door 
