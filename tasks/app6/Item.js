import React from "react"

const Item = (props) => (
  <li
    className={props.active ? "enable" : "disabled"}
    onClick={() => props.changeStatus(props.id)}
  >
    {props.name}
  </li>
)

export default Item
