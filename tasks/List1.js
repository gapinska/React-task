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

  handleDelete(name) {
    let people = this.state.people.slice()
    people = people.filter((person) => person.name !== name)
    this.setState({
      people,
    })
  }

  render() {
    const people = this.state.people.map((person) => (
      <Person
        key={person.id}
        id={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.name)}
      />
    ))
    return <ul>{people}</ul>
  }
}

export default List
