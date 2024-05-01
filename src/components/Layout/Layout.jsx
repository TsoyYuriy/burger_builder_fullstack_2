import React from 'react'
import './layout.css'
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='Layout'>
      <Header/>

      <main className='main'>
        <Outlet/>
      </main>

    </div>
  )
}
