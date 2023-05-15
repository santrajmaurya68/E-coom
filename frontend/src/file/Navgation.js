import React from 'react'
import {Link } from "react-router-dom"

export default function Navgation() {
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/catagory'>catagory</Link></li>
            <li><Link to='/addProducts'>Add Products</Link></li>
            <li><Link to = '/addCatagory'>Add Category</Link></li>
            <li><Link to='/updateProducts'>update Products</Link></li>
            <li><Link to='/updateCatagory'>update Catagory</Link></li>
            <li><Link to='/catgoes'> Product</Link></li>
        </ul>
    </div>
  )
}
