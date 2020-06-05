// Fetch w praktyce – cz. 1: wyświetlanie 5 losowych użytkowników po kliknięciu

import React, { Component } from "react"
import "./App.css"
import UsersList from "./UsersList"
import ButtonFetchUsers from "./ButtonFetchUsers"

const API = "https://randomuser.me/api/?results=5"

class App extends Component {
  state = {
    users: null,
  }

  handleDateFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response
        }
        throw Error(response.status)
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data.results,
        })
      })
      .catch((error) => console.log(error))
  }

  render() {
    const users = this.state.users
    return (
      <div>
        <ButtonFetchUsers click={this.handleDateFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    )
  }
}

export default App
