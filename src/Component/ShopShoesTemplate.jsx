import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

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
          display: 'flex',
          alignItems: 'center'
          
        }}>
       
          <div className="wrap row" style={{
            alignItems:'center',
            width:'100%',
            fontSize:'2rem',
            fontWeight:'bold',
           

          }}>
            <div className="col-2">   
            <button className="navigate " style= {{
             width:'320px',
             border:'2px solid aqua',
             textAlign:'left',
             backgroundColor:'#fff',
             marginBottom:'2rem'
            //  marginLeft:'7px'
          }}>
          <NavLink to='' style={{
            width:'95%',
            color:'black',
            textDecoration:'none',
            // marginLeft:'2rem',
           
          
          }}>Home</NavLink>
          
          </button>
          {/* <button className="navigate " style= {{
             width:'320px',
             border:'2px solid aqua',
             textAlign:'left',
             backgroundColor:'#fff',

          }}>
          <NavLink to='cart' style={{
            width:'95%',
            color:'black',
            textDecoration:'none',
           
            // marginLeft:'2rem',
           
          
          }}>Shop</NavLink>
          
          </button> */}
            
            </div>
        
          <div className="col-10">

           <Outlet/>
          </div>
      

          </div>
        </div>
        <footer className='bg-dark mt-5' style={{
          minHeight:'5vh',
          textAlign:'center',
          verticalAlign:'middle',
          fontSize: '2rem',
          color:'rgb(96 255 56 / 80%)'
        }}>Shoes Store</footer>
      </>
    )
  }
}
