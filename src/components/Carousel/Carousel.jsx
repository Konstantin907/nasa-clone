import React, { useRef } from 'react'
import "./carousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    const sliderRef = useRef(null)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      //small imgs for slider:
      const goToSlide = (index) =>{
        if(sliderRef.current) {
            sliderRef.current.slickGoTo(index);
            currentSlide.style.transition = 'opacity 0.5s ease-in-out';
        }
      }

  return (
    <Slider {...settings} ref={sliderRef} className='slider'>
        <div className='image-container'>
        <img 
            src="/space.webp" 
            alt="first" 
            className='single-slider-img'    
        />
        <h1 className="first-slider-heading">
            Our Space, Our Home
        </h1>
        <p className="desc-img">
            The Apollo mission for another Moon landing is underway, team of experts are bringing <br />
            another big step for mankind.
        </p>

        <button className="learn-more">
            Learn More
        </button>

        <div className="small-images">
                <img 
                    src="/arewealone.jpg" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(1)}
                />

                 <img 
                src="/space.webp" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(0)}
                 />

                <img 
                    src="/spacestation.webp" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(2)}
                />
                <img 
                    src="/mars.jpg" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(3)}
                />
        </div>
            
        

        </div>
            {/* 2 */}
        <div className='image-container'>
        <img 
            src="/arewealone.jpg" 
            alt="first" 
            className='single-slider-img'    
        />
        <h1 className="first-slider-heading">
            The Search For Life
        </h1>
        <p className="desc-img">
            This new series will get you throught our newest facts about the <br />
            biggest question in history: "Are we alone in space?"
        </p>

        <button className="learn-more">
            Visit 
        </button>

        <div className="small-images">
                <img 
                    src="/arewealone.jpg" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(1)}
                />

                 <img 
                src="/space.webp" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(0)}
                 />

                <img 
                    src="/spacestation.webp" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(2)}
                />
                <img 
                    src="/mars.jpg" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(3)}
                />
        </div>

        </div>

            {/* 3 */}
        <div className='image-container'>
        <img 
            src="/spacestation.webp" 
            alt="first" 
            className='single-slider-img'    
        />
        <h1 className="first-slider-heading">
            NASA's Space Station News
        </h1>
        <p className="desc-img">
            NASA astronauts and crew members are spending 2 more months in our home <br />
            in space in hop of descovering more.
        </p>

        <button className="learn-more">
            Learn More
        </button>

        <div className="small-images">
                <img 
                    src="/arewealone.jpg" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(1)}
                />

                 <img 
                src="/space.webp" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(0)}
                 />

                <img 
                    src="/spacestation.webp" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(2)}
                />
                <img 
                    src="/mars.jpg" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(3)}
                />
        </div>
        </div>
            {/* 4 */}
        <div className='image-container'>
        <img 
            src="/mars.jpg" 
            alt="first" 
            className='single-slider-img'    
        />

        <h1 className="first-slider-heading">
            We have arrived on the Red Planet!
        </h1>
        <p className="desc-img">
            We have archieved it! Our amazing teams of experts shocked the world again <br />
            and our astronauts are making the first mark in our Solar System.
        </p>

        <button className="learn-more">
            To Red Planet
        </button>

        <div className="small-images">
                <img 
                    src="/arewealone.jpg" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(1)}
                />

                 <img 
                src="/space.webp" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(0)}
                 />

                <img 
                    src="/spacestation.webp" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(2)}
                />
                <img 
                    src="/mars.jpg" 
                    alt="" 
                    className='small-img'
                    onClick={()=>goToSlide(3)}
                />
        </div>

        </div>

    
  </Slider>
  )
}

export default Carousel