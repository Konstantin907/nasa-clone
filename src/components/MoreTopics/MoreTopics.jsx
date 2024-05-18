import React from 'react'
import "./topics.css"
import { FaSquareArrowUpRight } from "react-icons/fa6";

const MoreTopics = () => {
  return (
    <div className='moreTopicsContainer'>

    
        <h1 className='topicsHeading'>More Topics from NASA</h1>
    
    <div className="categoryPictures">
        <div>
            <img 
            src="/missions.jpg" 
            alt="" 
            className="categoryTopicsImage" />

        <div className="textSide">
            <h3 className="categoryName">
                Missions 
            </h3>
            <span className='spanTopics'><FaSquareArrowUpRight className='arrowTopics'/></span>
        </div>
        </div>
        

        {/* 2 */}
    <div>
         <img 
            src="/humansInSpace.jpg" 
            alt="" 
            className="categoryTopicsImage" />

        <div className="textSide">
            <h3 className="categoryName">
                Humans In Space
            </h3>
            <span className='spanTopics'><FaSquareArrowUpRight className='arrowTopics'/></span>
        </div>

    </div>

        {/* 3 */}
        <div>
         <img 
            src="/climateChange.jpg" 
            alt="" 
            className="categoryTopicsImage" />

        <div className="textSide">
            <h3 className="categoryName">
                Climate Change
            </h3>
            <span className='spanTopics'><FaSquareArrowUpRight className='arrowTopics'/></span>
        </div>

    </div>
    {/* 4 */}

    <div>
         <img 
            src="/systemSolar.jpg" 
            alt="" 
            className="categoryTopicsImage" />

        <div className="textSide">
            <h3 className="categoryName">
                Our Solar System
            </h3>
            <span className='spanTopics'><FaSquareArrowUpRight className='arrowTopics'/></span>
        </div>

    </div>
    {/* 5 */}

    <div>
         <img 
            src="/universe.jpg" 
            alt="" 
            className="categoryTopicsImage" />

        <div className="textSide">
            <h3 className="categoryName">
                Universe
            </h3>
            <span className='spanTopics'><FaSquareArrowUpRight className='arrowTopics'/></span>
        </div>

    </div>

    {/* 6 */}

    <div>
         <img 
            src="/scienceNews.jpg" 
            alt="" 
            className="categoryTopicsImage" />

        <div className="textSide">
            <h3 className="categoryName">
                Science News
            </h3>
            <span className='spanTopics'><FaSquareArrowUpRight className='arrowTopics'/></span>
        </div>

    </div>
    {/* 7 */}

    <div>
         <img 
            src="/aeronautics.jpg" 
            alt="" 
            className="categoryTopicsImage" />

        <div className="textSide">
            <h3 className="categoryName">
                Aeronautics
            </h3>
            <span className='spanTopics'><FaSquareArrowUpRight className='arrowTopics'/></span>
        </div>

    </div>

    {/* 8 */}

    <div>
         <img 
            src="/technology.jpg" 
            alt="" 
            className="categoryTopicsImage" />

        <div className="textSide">
            <h3 className="categoryName">
                Technology
            </h3>
            <span className='spanTopics'><FaSquareArrowUpRight className='arrowTopics'/></span>
        </div>

    </div>

    </div>
    </div>
       
      
    
  )
}

export default MoreTopics
