import React from 'react'
import './order-summary.css'

export const OrderSummary = ({ingred, price, onCloseModal, onContinue}) => {

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
      
      <div className='buttons'>
        <button onClick={onCloseModal}>Cancel</button>
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  )
}
