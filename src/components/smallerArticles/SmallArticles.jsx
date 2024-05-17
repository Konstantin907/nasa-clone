import React from 'react'
import './articles.css'

const SmallArticles = () => {
  return (
    <div className='smallArticlesContainer'>
     
        <div className="image">
        <img 
            className='smallArticleImg' 
            src="/blueplanet.jpg" 
            alt="" />
      </div>

      
      <div className="articleInfo">
            <p className="read">6 MIN READ</p>
            <h4 className="smallArticleHeading">
                The Beautiful Blue Planet
            </h4>
            <span className="category">
                ARTICLE
            </span>
      </div>

      {/*  */}

      <div className="image">
        <img 
            className='smallArticleImg' 
            src="/ai.jpg" 
            alt="" />
      </div>
      <div className="articleInfo">
            <p className="read">4 MIN READ</p>
            <h4 className="smallArticleHeading">
                Our new AI goals in 2022
            </h4>
            <span className="category">
                ARTICLE
            </span>
      </div>

      <div className="image">
        <img 
            className='smallArticleImg' 
            src="/nightsky.jpg" 
            alt="" />
      </div>
      <div className="articleInfo">
            <p className="read">5 MIN READ</p>
            <h4 className="smallArticleHeading">
                What's ahead for NASA
            </h4>
            <span className="category">
                ARTICLE
            </span>
      </div>


      <div className="image">
        <img 
            className='smallArticleImg' 
            src="/teamwork.jpg" 
            alt="" />
      </div>
      <div className="articleInfo">
            <p className="read">8 MIN READ</p>
            <h4 className="smallArticleHeading">
                Team work and understanding science in 21st century?
            </h4>
            <span className="category">
                ARTICLE
            </span>
      </div>
      

    </div>
  )
}

export default SmallArticles
