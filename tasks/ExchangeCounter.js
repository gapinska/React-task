import React from "react"

const Dollars = (props) => (
  <div>
    Wartośc w dolarach:
    {props.cash ? (props.cash / props.ratio).toFixed(2) : ""}
  </div>
)

const Euros = (props) => {
  const value = props.cash / props.ratio
  return <div>Wartość w Euro: {props.cash ? { value }.toFixed(2) : ""}</div>
}

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 4.2,
  }

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    })
  }

  render() {
    const { amount, ratioDollar, ratioEuro } = this.state
    return (
      <div>
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
        </label>
        <Dollars cash={amount} ratio={ratioDollar} />
        <Euros cash={amount} ratio={ratioEuro} />
      </div>
    )
  }
}

export default ExchangeCounter
