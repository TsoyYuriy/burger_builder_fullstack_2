import React from 'react'
import './order-card.css'

const OrderCard = ({data}) => {
  return (
    <div className='order-card'>

      <div className="customer">
        <h3 className='order-card__title'>{data.order['user-name']}</h3>
        <p className='order-card__text'>{data.order.email}</p>
        <p className='order-card__text'>{data.order.street}</p>
        <p className='order-card__text'>{data.order.postal}</p>
      </div>

      <div className="order">
        <h4 className='order-card__title'>Total Price: {data.totalPrice} KZT</h4>
        <p className='order-card__text'>Meat: {data.ingredients.meat}</p>
        <p className='order-card__text'>Salad: {data.ingredients.salad}</p>
        <p className='order-card__text'>Cheese: {data.ingredients.cheese}</p>
        <p className='order-card__text'>BAcon: {data.ingredients.bacon}</p>
      </div>
    </div>
  )
}

export default OrderCard