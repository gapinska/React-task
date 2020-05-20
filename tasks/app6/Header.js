import React from "react"

const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active)
  const number = activeItems.length
  return (
    <header>
      <h2>Wielkość zamówienia: {number}</h2>
      <h2>
        Do zapłaty: {number ? `Do zapłaty: ${number * 10} zł` : "brak zakupów"}
      </h2>
    </header>
  )
}

export default Header
