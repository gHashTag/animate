import React, { PureComponent } from 'react'
import { TouchableOpacity, TouchableHighlight, Dimensions, Image, Button, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import Master from './Master'
import data from './data.json'
import Dot from './dotdotdot.svg'

const platform = (x) => {
  try {
    const w = window.innerWidth
    if (w <= 320) {
      return x + 3 //'iphone5'
    } else if (w <= 375 && w > 321) {
      return x * 3.7 // 'iphone6'
    } else if (w <= 414 && w > 375) {
      return x * 3.9 // 'iphone6+'
    } else if (w > 414) {
      return x * 3.9 // 'web'
    }
  } catch (e) {
    throw e
  }
}

const menuY = (x) => {
  try {
    const w = window.innerWidth
    if (w <= 320) {
      return x + 2 //'iphone5'
    } else if (w <= 375 && w > 321) {
      return x + 3 // 'iphone6'
    } else if (w <= 414 && w > 375) {
      return x + 3 //'iphone6+'
    } else if (w > 414) {
      return x + 20// 'web'
    }
  } catch (e) {
    throw e
  }
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '43px',
    height: '53px',
    right: platform(5) + 9,
    top: menuY(1) 
  },
  bmCrossButton: {
    position: 'absolute',
    left: '10px',
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#fff'
  },
  bmMenu: {
    background: 'rgba(100, 100, 100, 0.83)',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '500',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#fff',
    marginTop: 80,
    marginLeft: 70
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  navLink: { 
    color: '#fff', 
    fontSize: '1.00em', 
    fontFamily: 'AppleSDGothicNeo-Light', 
    paddingLeft: 10
  },
  activeStyle: {
    color: '#D6B784', 
    textDecoration: 'none'
  }
}

class Masters extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })  
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const { navLink, activeStyle } = styles
    return (
      <Router>
        <div>
          <Menu 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            styles={styles} 
            right
            customBurgerIcon={!this.state.menuOpen ? <Image source={Dot} /> : false} 
          >
            {data.map(({ name, id, title }) => (
              <div key={id}>
                <NavLink 
                  onClick={() => this.closeMenu()}
                  to={`/master/${name}`} 
                  style={navLink} 
                  activeStyle={activeStyle}
                >
                  {title}
                </NavLink>
              </div>
            ))}
          </Menu>
          <Route path="/master/:name" exact component={Master} />
        </div>
      </Router>
    )
  }
}

export default Masters 
