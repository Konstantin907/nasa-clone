import React, { useState } from 'react'
import "./header.css"
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import ExploreModal from '../Modal/ExploreModal';
import NewsModal from '../Modal/NewsModal/NewsModal';
import HamburgerMenu from '../HamburgerMenu/Hamburger';


const Header = () => {
    const [modal, setModal] = useState(false);
    const [newsModal, setNewsModal] = useState(false);
   

  return (
    <div className='header-container'>
        {/* Hamburger menu */}
        <div className="hamburgerMenu" >
                <HamburgerMenu />
             </div>
        <div className="left-part">
                <h4 className={`explore-heading ${modal ? 'explore-active' : ''}`} onClick={()=>setModal(!modal)}>
                    Explore {
                        modal ? <FaArrowUpLong style={{cursor:"pointer"}}/> : <FaArrowDown style={{cursor:"pointer"}}/>
                    } 
                </h4>   

                {/* general modal */}
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
                <li 
                    onClick={()=>setNewsModal(!newsModal)}
                    className={`${newsModal ? 'explore-active' : ''}`}>
                        News & Events
                    {
                        newsModal ? <FaArrowUp />:<FaArrowDown />
                    }
                     
                </li>
                {/* News Modal */}
                {
                    newsModal && <NewsModal />
                }
                <li>Multimedia <FaArrowDown /></li>
                <li>NASA +</li>
            </ul>
           
                

        </div>
         
    </div>
  )
}

export default Header