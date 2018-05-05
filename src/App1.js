import React, { Component } from 'react'
import { Route, Link } from './Router'

const Home = () => <h2>Home</h2>

class Epic extends Component {
  render() {
    console.log('match', this.props)
    return (
      <h2>Epic</h2>
    )
  }
} 

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/epic">Эпопея</Link>
          </li>
          <li>
            <Link to="/about">О приложении</Link>
          </li>
        </ul>
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/epic" component={Epic} />
        <Route path="/about" render={() => <p>Сделано мной</p>} />
      </div>
    )
  }
} 

export default App
