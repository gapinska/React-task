import React from "react"

class App extends React.Component {
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
