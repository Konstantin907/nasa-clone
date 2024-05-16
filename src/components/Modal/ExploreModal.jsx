import React from 'react'
import "./modal.css" 

const ExploreModal = () => {
  return (
    <div className='explore-modal'>
        <div className="left-explore">
            <ul className="explore-list">
                <li className="explore-link">
                    Home
                </li>
                <li className="explore-link">
                    Missions
                </li>
                <li className="explore-link">
                    Humans in Space
                </li>
                <li className="explore-link">
                    Earth & Climate
                </li>
                <li className="explore-link">
                    The Solar System
                </li>
                <li className="explore-link">
                    The Universe
                </li>
                <li className="explore-link">
                    Science
                </li>
                <li className="explore-link">
                    Aeronautics
                </li>
                <li className="explore-link">
                    Technology
                </li>
                <li className="explore-link">
                    Learning Resources
                </li>

                <li className="explore-link">
                    About NASA
                </li>
            </ul>
            
        </div>
        <div className = "vertical"></div>

        {/* Right part */}
            <div className="exploreRightPart">
                <h5 className="featuredHeading">
                    FEATURED
                </h5>
                <div className="exploreCard">
                    <div className="singleCard">
                         <img 
                            src="/helpinganimal.jpg" 
                            alt="" 
                            className='exploreImg'
                        /> 
                        <span className="minuteRead">4 min read</span>
                        <h3 className="articleExploreHeading">
                            NASA is helping protecting animals around the world
                            all species of cats and birds.
                        </h3>
                        <div className="smallArticleInfo">
                            <span className="all">ARTICLE</span><span className='sm-text'>1 WEEK AGO</span>
                        </div>
                    </div>
                {/* 2nd card */}  

                <div className="singleCard">
                         <img 
                            src="/spaceearth.webp" 
                            alt="" 
                            className='exploreImg'
                        /> 
                        <span className="minuteRead">6 min read</span>
                        <h3 className="articleExploreHeading">
                            Everything you need to know about our blue planet,
                            all the facts about our planet. 
                        </h3>
                        <div className="smallArticleInfo">
                            <span className="all">ARTICLE</span><span className='sm-text'>3 WEEK AGO</span>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="singleCard">
                         <img 
                            src="/nasarockets.webp" 
                            alt="" 
                            className='exploreImg'
                        /> 
                        <span className="minuteRead">8 min read</span>
                        <h3 className="articleExploreHeading">
                            Our brief history of developing rockets for all the space research and 
                            and life in space. 
                        </h3>
                        <div className="smallArticleInfo">
                            <span className="all">ARTICLE</span><span className='sm-text'>1 WEEK AGO</span>
                        </div>
                    </div>


                </div>
                
                



            </div>
    </div>
  )
}

export default ExploreModal