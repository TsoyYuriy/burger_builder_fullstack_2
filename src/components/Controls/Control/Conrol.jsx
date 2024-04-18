import React from 'react'
import './constrol.css'

export const Conrol = ({type, added, removed}) => {
  return (
    <div className='BuildControl'>
      <div className='Label'>{type}</div>
      <button className='Less' onClick={removed}>less</button>
      <button className='More'onClick={added} >more</button>
    </div>
  )
}
