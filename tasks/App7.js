import React from "react"

class App extends React.Component {
  state = {
    city: "",
    text: "",
    isLoved: false,
    number: "0",
  }

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value,
    })
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleIsLovedChange = (e) => {
    this.setState({
      isLoved: e.target.checked,
    })
  }

  handleVisitsNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            value={this.state.city}
            onChange={this.handleCityChange}
            type="text"
          />
        </label>
        <br />
        <label>Napisz coś o tym mieście</label>
        <textarea
          value={this.state.text}
          onChange={this.handleTextChange}
        ></textarea>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            type="checkbox"
            checked={this.state.isLoved}
            onChange={this.handleIsLovedChange}
          />
        </label>
        <label>
          Ile razy byliście w tym mieście?
          <select
            value={this.state.number}
            onChange={this.handleVisitsNumberChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
        </label>
      </div>
    )
  }
}

export default App
