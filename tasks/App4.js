import React from "react"

const data = {
  users: [
    {
      id: 1,
      age: 32,
      name: "Arek",
    },
    {
      id: 2,
      age: 28,
      name: "Ada",
    },
    {
      id: 3,
      age: 29,
      name: "Ala",
    },
  ],
}
const Item = ({ content }) => (
  <li>{`age: ${content.age}, age: ${content.name}`}</li>
)

class App extends React.Component {
  render() {
    const users = data.users
    const Items = users.map((user, id) => <Item key={user.id} content={user} />)
    return <ul>{Items}</ul>
  }
}

export default App
