import React, { useState } from 'react'
import "./header.css"
import { FaAngleDown } from "react-icons/fa";
import ExploreModal from '../Modal/ExploreModal';


const Header = () => {
    const [modal, setModal] = useState(false);


  return (
    <div className='header-container'>
        <div className="left-part">
                <h4 className="explore-heading" onClick={()=>setModal(!modal)}>
                    Explore <FaAngleDown style={{cursor:"pointer"}}/>
                </h4>   

                {/* modal */}
                {modal && <ExploreModal />}
           
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