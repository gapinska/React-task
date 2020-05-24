import React from "react"

const Person = (props) => (
  <li key={props.id}>
    {props.name} <button onClick={props.delete}>Delete</button>
  </li>
)

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan" },
      { id: 2, name: "Oliwia" },
      { id: 3, name: "Julia" },
      { id: 4, name: "Maria" },
    ],
  }
  handleDelete(id) {
    const people = [...this.state.people]
    const index = people.findIndex((person) => person.id === id)
    people.splice(index, 1)
    this.setState({
      people,
    })
  }

  render() {
    return (
      <ul>
        {this.state.people.map((person) => (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            delete={this.handleDelete.bind(this, person.id)}
          />
        ))}
      </ul>
    )
  }
}

export default List
