import React from "react"

const Cash = (props) => {
  const { cash, ratio, title } = props
  const value = (cash / ratio).toFixed(2)
  return (
    <div>
      {title} {cash ? value : ""}
    </div>
  )
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
        <Cash cash={amount} ratio={ratioDollar} title="Wartość w dolarach: " />
        <Cash cash={amount} ratio={ratioEuro} title="Wartość w euro: " />
      </div>
    )
  }
}

export default ExchangeCounter
