import React, { Component } from "react"

const data = [
  {
    id: 1,
    title: "Wiadomość numer 1",
    body: "Zawartość wiadomości numer 1...",
  },
  {
    id: 2,
    title: "Wiadomość numer 2",
    body: "Zawartość wiadomości numer 2...",
  },
]

setInterval(() => {
  const index = data.length + 1
  data.push({
    id: index,
    title: "Wiadomość numer " + index,
    body: "Zawartość wiadomości numer " + index + "...",
  })
}, 8000)

class App extends Component {
  state = {
    comments: [...data],
  }

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data],
      })
    }
  }

  componentDidMount() {
    this.idI = setInterval(this.getData, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.idI)
  }

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={this.comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ))
    return (
      <>
        <div>{comments.reverse()}</div>
      </>
    )
  }
}

export default App
