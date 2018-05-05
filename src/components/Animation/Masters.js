import React, { PureComponent } from 'react'
import { TouchableOpacity, TouchableHighlight, Dimensions, Image, Button, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import Master from './Master'
import data from './data.json'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '20px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: 'rgba(100, 100, 100, 0.93)'
  },
  bmCrossButton: {
    position: 'absolute',
    left: '10px',
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: 'rgba(100, 100, 100, 0.93)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Screen extends PureComponent {
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
    return (
      <Router>
        <div>
          <Menu 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            styles={styles} right
          >
            {data.map(({ name, id, title }) => (
              <div key={id}>
                <NavLink 
                  onClick={() => this.closeMenu()}
                  to={`/master/${name}`} 
                  style={{ color: '#ccc', textDecoration: 'none' }} 
                  activeStyle={{ color: '#BF813E', textDecoration: 'none' }}
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

export default Screen 
