import React, { Component } from "react"
import "./App.css"
const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
    },
    {
      id: 2,
      age: 28,
      name: "Marta",
    },
    {
      id: 3,
      age: 25,
      name: "Stasia",
    },
  ],
}

const User = ({ content }) => (
  <li>
    name: {content.name}, age: {content.age}
  </li>
)
class App extends Component {
  render() {
    const users = data.users
    const Users = users.map((user) => <User key={user.id} content={user} />)
    return <ul>{Users}</ul>
  }
}

export default App
