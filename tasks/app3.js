import React from "react"
import "./App.css"

class App extends React.Component {
  state = {
    items: ["jabłko", "gruszka", "śliwka"],
  }
  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item}>{`owoc: ${item}`}</li>
        ))}
      </ul>
    )
  }
}

export default App
