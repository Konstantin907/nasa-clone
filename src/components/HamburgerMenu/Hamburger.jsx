import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { FaAngleRight } from "react-icons/fa";
import './hamburger.css';  

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false); 

    //disable scrolling when hamburger is open:
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='hamburgerContainer'>
            <button className="hamburgerButton" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />} 
            </button>
            {
                isOpen && (
                    <div className='hamburger-menu'> 
                <ul>
                    <div className="singleLink">
                        <li><a href="#home">Home <span><FaAngleRight /></span></a></li>
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">Missions <span><FaAngleRight /></span></a></li>
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">Humans in Space <span><FaAngleRight /></span></a></li>                    
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">Earth & Climate <span><FaAngleRight /></span></a></li>  
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">Solar System <span><FaAngleRight /></span></a></li>  
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">The Universe <span><FaAngleRight /></span></a></li>  
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">Science <span><FaAngleRight /></span></a></li>  
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">Aeronautics <span><FaAngleRight /></span></a></li>  
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">Technology <span><FaAngleRight /></span></a></li>  
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">Learning Resources <span><FaAngleRight /></span></a></li>  
                    </div>
                    <div className="singleLink">
                        <li><a href="#home">About NASA <span><FaAngleRight /></span></a></li>  
                    </div>
                    
                </ul>
            </div>
                )
            }
            
            
        </div>
    );
};

export default HamburgerMenu;
