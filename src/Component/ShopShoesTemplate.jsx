import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class ShopShoesTemplate extends Component {
  render() {
    return (
      <>
        <header className='bg-dark' style={{
          minHeight:'5vh',
          textAlign:'center',
          verticalAlign:'middle',
          fontSize: '2rem',
          color:'rgb(96 255 56 / 80%)'
        }}>Shoes Store</header>
        <div className="content" style={{
          minHeight:'90vh',
          
        }}>

        <Outlet/>
        </div>
        <footer className='bg-dark' style={{
          minHeight:'5vh',
          textAlign:'center',
          verticalAlign:'middle',
          fontSize: '2rem',
          color:'rgb(96 255 56 / 80%)'
        }}>Footer</footer>
      </>
    )
  }
}
