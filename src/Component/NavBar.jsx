import React from 'react'
import {Nav, Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import logo from '../images/myntra.png'
import len from '../images/lens.png'
import account from '../images/login.png'
import out from '../images/logout.png'

function NavBar() {

    const cartProducts = useSelector(state => state.cart)
  return (
      <>
       <div className='flex text-sm font-bold text-gray-700 items-center p-4 shadow-lg'>
        <img src={logo}  />
        <h1 className='ml-4 text-sm'>MEN </h1>
        <h1 className='ml-8 text-sm'>WOMEN </h1>
        <h1 className='ml-8 text-sm'>KIDS </h1>
        <h1 className='ml-8 text-sm'>HOME & LIVING</h1>
        <h1 className='ml-8 text-sm'>BEAUTY </h1>
        <h1 className='ml-12 text-sm'>STUDIO</h1>
        
          <div className='border border-gray-100 flex items-center bg-gray-100 w-96 h-10 ml-14'>
               <img src={len}  className='w-5 h-5 ml-3'/>
               <input className='bg-gray-100 text-gray-900 font-normal outline-none
                  text-sm rounded-sm block w-full p-2.5 ml-3' 
                  placeholder='search for products' required />
            </div> 
           
            <div className='ml-10 text-sm'> 
                <img src= {account} className='w-5 h-5 ml-2' />
                <h1 className='text-sm'>Login</h1>
                 </div>

                 <div className='ml-10'> 
                <img src= {out} className='w-4 h-4 ml-2' />
                <h1 className='text-sm'>Logout</h1>
                 </div>
       </div>
         
          {/* <Link to="/cart">My Bag {cartProducts.length}</Link> */}
          
        
    </>
  )
}

export default NavBar
