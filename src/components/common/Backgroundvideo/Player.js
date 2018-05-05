import React, { Component } from 'react'
import TestComponent from './BackgroundVideo'

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: undefined,
      isMuted: undefined,
      progress: 0,
      currentTime: 0,
      duration: 0,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidMount() {
    this.setState({
      isPlaying: !this.player.isPaused,
      isMuted: this.player.isMuted
    })
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  handleOnPlay = () => {
    this.setState({ isPlaying: true })
  }

  handleOnPause = () => {
    this.setState({ isPlaying: false })
  }

  handleTimeUpdate = (currentTime, progress, duration) => {
    this.setState({
      progress,
      currentTime,
      duration
    })
  }

  handleOnMute = () => {
    this.setState({ isMuted: true })
  }

  handleOnUnmute = () => {
    this.setState({ isMuted: false })
  }

  togglePlay = () => {
    this.player.togglePlay()
  }

  toggleMute = () => {
    this.player.toggleMute()
  }

  render() {
    return (
      <div style={{ position: 'fixed', width: ' 100%', height: '100%' }}>
        <TestComponent
          ref={ p => this.player = p }
          containerWidth={this.state.windowWidth}
          containerHeight={this.state.windowHeight}
          src={require('./spa.m4v')}
          poster={require('./transparent.png')}
          onPlay={this.handleOnPlay}
          onPause={this.handleOnPause}
          onMute={this.handleOnMute}
          onUnmute={this.handleOnUnmute}
          onTimeUpdate={this.handleTimeUpdate}
          startTime={10}
          autoPlay
          volume={0.5}
        />
      </div>
    )
  }
}
