import React from "react"

const Cash = (props) => {
  const { cash, ratio, title, price } = props
  const value = ((cash / ratio) * price).toFixed(2)
  return (
    <div>
      {title} {cash ? value : ""}
    </div>
  )
}

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity",
  }

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "zł",
        ratio: 1,
        title: "Wartość w złotych:",
      },
      {
        id: 1,
        name: "dollar",
        ratio: 3.6,
        title: "Wartość w dolarach:",
      },
      {
        id: 2,
        name: "euro",
        ratio: 4.1,
        title: "Wartość w euro:",
      },
      {
        id: 3,
        name: "pound",
        ratio: 4.5,
        title: "Wartość w funtach:",
      },
    ],
    prices: {
      electricity: 0.51,
      gas: 4.76,
      oranges: 3.79,
    },
  }

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    })
  }

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    })
  }

  insertSuffix = (product) => {
    if (product === "electricity") return <em>kWh</em>
    else if (product === "gas") return <em>l</em>
    else if (product === "oranges") return <em>kg</em>
    else return null
  }

  selectPrice = (product) => {
    const price = this.props.prices[product]
    return price
  }

  render() {
    const { amount, product } = this.state
    const price = this.selectPrice(product)
    const calculators = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={price}
      />
    ))
    return (
      <div className="app">
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
          {this.insertSuffix(product)}
        </label>
        {calculators}
      </div>
    )
  }
}

export default ExchangeCounter
