import React from 'react'
import "./newsModal.css"
import { FaArrowRight } from "react-icons/fa6";


const NewsModal = () => {
  return (
    <div className='newsModal'>
        <div className="positional">
            <div className="headingContainer">
            <h2 className="newsHeading">
                News & Events <FaArrowRight style={{backgroundColor: "orange", borderRadius: "50%", padding: "1px"}}/>
            </h2>
        </div>
  
        <div className="newsContent">
            <ul className='newsLinks'>
                <li className="links">
                    All NASA News
                </li>
                <li className="links">
                    Video Series on NASA+
                </li>
                <li className="links">
                    Podcasts
                </li>
                <li className="links">
                    Blogs
                </li>
                <li className="links">
                    Newsletters
                </li>
                <li className="links">
                    Social Media
                </li>
                <li className="links">
                    Media Resources
                </li>
                <li className="links">
                    Upcoming Launches & <br />
                    Landings
                </li>
                <li className="links">
                    Virtual Events
                </li>     
            </ul>
        </div>
        </div>
        
            
    </div>
  )
}

export default NewsModal