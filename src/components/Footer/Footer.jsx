import React from 'react'
import "./footer.css"
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerContainer'>
        <img 
            src="/nasa-logo.jpg" 
            alt="" 
            className="footerLogo" 
        />
<div className="footerElements">
    <div className="footerAbout">
        <h1 className="footerAboutHeader">
            The National Aeronautics and <br />
            Space Administration
        </h1>
        <p className="footerDescription">
            NASA explores the unknown in air and space,
            innovates for the benefit of humanity, 
            and inspires the world through discovery.
        </p>
        <a  href="" 
            className="footerLink">
                About NASA's Mission
            </a> <br />
    <div className="positionalFooter">
        <button className="footerButton">
            Join us 
            <FaArrowRight className='footerArrow'/>
        </button>
    </div>
        
    </div>

    {/*  */}
    <div className="firstLinks">
        <ul className="listFooter">
            <li className='internalFooterLink'>
                Home
            </li>
            <li className='internalFooterLink'>
                News & Events
            </li>
            <li className='internalFooterLink'>
                Multimedia
            </li>
            <li className='internalFooterLink'>
                NASA+
            </li>
            <li className='internalFooterLink'>
                Missions
            </li>
        </ul>
    </div>
    {/*  */}

    <div className="firstLinks">
        <ul className="listFooter">
            <li className='internalFooterLink'>
                Humans in Space
            </li>
            <li className='internalFooterLink'>
                Earth & Climate
            </li>
            <li className='internalFooterLink'>
               The Solar System
            </li>
            <li className='internalFooterLink'>
                The Universe
            </li>
            <li className='internalFooterLink'>
                Science
            </li>
        </ul>
    </div>

    {/*  */}
    <div className="firstLinks">
        <ul className="listFooter">
            <li className='internalFooterLink'>
                Aeronautics
            </li>
            <li className='internalFooterLink'>
                Technology
            </li>
            <li className='internalFooterLink'>
               Learning Resources
            </li>
            <li className='internalFooterLink'>
                About NASA
            </li>
            <li className='internalFooterLink'>
                Other Languages
            </li>
        </ul>
    </div>

</div>
    
</div>
  )
}

export default Footer
