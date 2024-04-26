import React from 'react'

export const ContactData = () => {
  return (
    <div>
      <h4>Enter your Contact Data</h4>

      <form>
        <input type="text" name='user-name'/>
        <input type="email" name='email'/>
        <input type="text" name='street'/>
        <input type="text" name='postal'/>

        <button>Order</button>
      </form>
    </div>
  )
}
