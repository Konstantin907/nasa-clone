import React from 'react'
import "./imageOfDay.css"

const ImageOfDay = () => {
  return (
    <div className='dayContainer'>
        <div className="dayImage"> 
          
            <img
                className='imageOfDay' 
                src="/randomperson.jpg" 
                alt="" /> 
        </div>
        <div className="textDay">
          <div className="smaller">
            <h4 className='today'>Today</h4>
      <h1 className="topHeadingDay">
        Image Of The Day
      </h1>
          </div>
            

      <h3 className="smallDescription">
        Space Physics and Space Weather <br />
        Scientist Dr. Mia Dermount
      </h3>

      <p className="smallAuthorText">
      “For the women in science — in any profession or job
       — opportunities are more abundant than they were previously.
        Sometimes you need to outwork everyone, even if that means,
        to put more work and risk some other funny things. Just a little motivation, 
        and then the more and more secrets start revealing and then everything
        is more to happen.” — Dr. Mia Dermount, Space Physics and 
        Space Weather Scientist, Peliophysics Science Division, NASA’s Goddard Space Flight Center
      </p>
      <button className="more">
        More Images
      </button>
        </div>
      
    </div>
  )
}

export default ImageOfDay
