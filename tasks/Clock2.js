import React from "react"

const SwitchButton = (props) => (
  <button onClick={props.switchButton}>
    {props.active ? "wyłącz" : "włącz"}
  </button>
)

class App extends React.Component {
  state = {
    active: true,
  }

  switchButton = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  render() {
    return (
      <>
        <SwitchButton
          active={this.state.active}
          switchButton={this.switchButton}
        />
        <br />
        {this.state.active && <Clock />}
      </>
    )
  }
}

class Clock extends React.Component {
  state = {
    time: this.getTime(),
  }

  getTime() {
    const currentTime = new Date()
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    }
  }

  setTime() {
    const time = this.getTime()
    this.setState({
      time,
    })
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { hours, minutes, seconds } = this.state.time
    return (
      <>
        {hours} : {minutes} : {seconds}
      </>
    )
  }
}

export default App
