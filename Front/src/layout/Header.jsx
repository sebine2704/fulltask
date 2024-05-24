import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";


const Header = () => {
  return (
    <header>
        <h1>Foundation</h1>
        <ul>
            <li><NavLink to={"/home"} className={(nav)=>nav.isActive? "active" : ""} >Home</NavLink></li>
            <li><NavLink to={"/form"} className={(nav)=>nav.isActive? "active": ""}>Form</NavLink></li>
            <li>Catalogs</li>
            <li>Contact</li>
            <li>Xanim</li>
        </ul>
        <div className='icon'>
        <FaSearch />
        <FaRegHeart />
        <FaShoppingBasket />
        </div>

    </header>
  )
}

export default Header
