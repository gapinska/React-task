import React from "react"
import "./App.css"

class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  }

  handleRemoveFromCart = () => {
    if (this.state.shoppingCart !== 0) {
      this.setState({
        shoppingCart: this.state.shoppingCart - 1,
      })
    }
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    })
  }

  render() {
    const { shoppingCart, availableProducts } = this.state
    const styleShoppingCart = shoppingCart === 0 ? { opacity: 0.3 } : {}
    return (
      <>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span style={styleShoppingCart}>{shoppingCart}</span>
        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Buy</button>}
      </>
    )
  }
}

export default App
