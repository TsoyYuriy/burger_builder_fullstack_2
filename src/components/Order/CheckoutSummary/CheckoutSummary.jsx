import React from 'react'
import './checkout-summary.css'
import Burger from '../../Burger/Burger'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const CheckoutSummary = ({ onSuccess, onPrevClick}) => {

  const {totalPrice} = useSelector(state => state.ingredients)

  return (
    <div className='CheckoutSummary'>
      <h1>We hope it tastes well</h1>

      <div style={{width: '80%', margin: 'auto'}}>
        <Burger/>
        <h3>Price: {totalPrice}</h3>
      </div>

      <button className='Danger' onClick={onPrevClick}>CANCEL</button>
      <button className='Success' onClick={onSuccess}>SUCCESS</button>
      
      <Outlet/>

    </div>
  )
}
