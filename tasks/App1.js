const PositiveMessage = () => <p>You are allowed to watch the movie.</p>
const NegativeMessage = () => <p>You are not allowed to watch the movie</p>

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDafault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      })
    }
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      this.state.isConfirmed ? <PositiveMessage /> : <NegativeMessage />
    } else {
      return null
    }
  }

  render() {
    return (
      <>
        <h1>Buy a ticket - a movie of the year!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">I am at least 16 years old</label>
          <br />
          <button>BUY A TICKET</button>
        </form>
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"))
