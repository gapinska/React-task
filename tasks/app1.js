const PositiveMessage = () => <p>You are allowed to watch the movie.</p>
const NegativeMessage = () => <p>You are not allowed to watch the movie</p>

class CheckBoxAgeConfirmation extends React.Component {
    state= {
        isConfirmed: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed
        })
    }

    displayMessage= () => this.state.isConfirmed ? <PositiveMessage/> : <NegativeMessage/>
    

    render() {
        return (
            <>
            <h1>Buy a ticket!</h1>
            <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
            <label htmlFor="age">I am at least 16 years old</label>
            {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<CheckBoxAgeConfirmation/>, document.getElementById('root'))