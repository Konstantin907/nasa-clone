import React from 'react'
import "./header.css"
import { FaAngleDown } from "react-icons/fa";


const Header = () => {
  return (
    <div className='header-container'>
        <div className="left-part">
                <h4 className="explore-heading">Explore <FaAngleDown style={{cursor:"pointer"}}/></h4>   
            <input 
                type="text" 
                placeholder='Search...'
                className='input-search'
            />
        </div>
        <div className="middle-part">
            <img src="/nasa-logo.jpg" alt="logo" className="logo-nasa" />
        </div>

        <div className="right-part">
            <ul className="full-list">
                <li>News & Events <FaAngleDown /></li>
                <li>Multimedia <FaAngleDown /></li>
                <li>NASA +</li>
            </ul>
        </div>
    </div>
  )
}

export default Header