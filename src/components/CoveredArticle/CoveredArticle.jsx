import React from 'react'
import "./covered.css"
import { FaSquareArrowUpRight } from "react-icons/fa6";

const CoveredArticle = () => {
  return ( 
    <div className='coveredArticleContainer'>
      <div className="coveredArticleBackground">
        <img
            className='background-Img' 
            src="/galaxy.jpg" 
            alt="" />
      </div>

      <div className="internText">
        <h1 className="articleHeading">
            Our mysterious neighbor - <br /> The Andromeda Galaxy
        </h1>
        <p className="articleInfo">
        Images from the NASACam visible-light camera 
        aboard the Alix spacecraft supports the theory
        that the our neighbouring galaxy is approaching us more and more
        and our exsisting on this planet could be in danger.
        </p>
        <div className="button">
            <button className="learnMoreArticle">
            Learn More 
        </button>
        <span><FaSquareArrowUpRight className='arrow-sign' style={{color: '#f64137', fontSize: '21px'}}/></span>
         </div>
        
      </div>
    </div>
  )
}

export default CoveredArticle
