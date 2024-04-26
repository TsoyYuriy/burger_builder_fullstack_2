import React from 'react'
import './checkout-summary.css'
import Burger from '../../Burger/Burger'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export const CheckoutSummary = ({ingredients, onSuccess, price}) => {

  return (
    <div className='CheckoutSummary'>
      <h1>We hope it tastes well</h1>

      <div style={{width: '80%', margin: 'auto'}}>
        <Burger ingredients={ingredients}/>
        <h3>Price: {price}</h3>
      </div>

      <button className='Danger'>CANCEL</button>
      <button className='Success' onClick={onSuccess}>SUCCESS</button>
      
      <Outlet/>

    </div>
  )
}
