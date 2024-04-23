import React from 'react'

export const OrderSummary = ({ingred, price}) => {

  const ingredients = Object.keys(ingred).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>
        <span>: {ingred[igKey]}</span>
      </li>
    )
  })

  return (
    <div>
      <h3>Your Order</h3>
      <ul>
        {ingredients}
      </ul>
      <p>Total price: {price}</p>
      <p>Continue to checkout?</p>
      
      <button>Cancel</button>
      <button>Continue</button>
    </div>
  )
}
