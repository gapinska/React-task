import React from "react"
import "./App.css"

const Item = (props) => <li>{`owoc: ${props.content}`}</li>

class App extends React.Component {
  state = {
    items: ["jabłko", "gruszka", "śliwka"],
  }
  render() {
    const Items = this.state.items.map((item, id) => (<Item key={item} content={item} />
    ))
    return <ul>{Items}</ul>
  }
}

export default App
