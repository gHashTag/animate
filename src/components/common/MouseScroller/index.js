import React, { PureComponent } from 'react'
import './index.css'
import '../../aos.css'

class MouseScroller extends PureComponent {
  state = {
    ty: window.scrollY,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({ ty: window.scrollY })
  }

  render() {
    const { ty } = this.state
    return(
      <div 
        className="scroll-downs"
        style={{ marginBottom: ty * 5 }}
      >
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    )
  }
}

export default MouseScroller
