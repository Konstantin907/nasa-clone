import React from 'react'
import "./featured.css" 
import { FaSquareArrowUpRight } from "react-icons/fa6";

const Featured = () => {

    const articles = [
        {
          id: 1,
          image: '/lifeinspace.jpg',
          title: 'Life in Space from our collegues experience',
          readTime: 4,
        },
        {
          id: 2,
          image: '/marsFeatured.jpg',
          title: 'Our first results after landing on Mars, what is next?',
          readTime: 5,
        },
        {
          id: 3,
          image: '/underwater.jpg',
          title: 'NASA is helping on underwater expeditions and understanding all the life beyond surface',
          readTime: 2,
        },
        {
          id: 4,
          image: '/gargantua.jpg',
          title: '5 Things to Know About Gargantua',
          readTime: 10,
        }
      ];


  return (
    <div className='featuredContainer'>
        <div className="headersFeatured">
            <h1 className='featuredNews'>Featured News</h1>
                <div className="positionalLink">
                    <p className="moreNews">More NASA News </p>
                    <span className="arrow"><FaSquareArrowUpRight /></span>
                </div>         
        </div>

        <div className="newsGrid">
        {articles.map(article => (
          <div key={article.id} className="articleCard">
            <div className="articleImage" style={{ backgroundImage: `url(${article.image})` }}></div>
            <div className="articleContent">
              <span className="readTime">{article.readTime} MIN READ</span>
              <h3>{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}



export default Featured
