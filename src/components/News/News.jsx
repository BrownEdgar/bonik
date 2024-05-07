import React from 'react'
import "./News.scss"
import { useSelector } from 'react-redux'
import Slider from "react-slick";

export default function News() {
    const news = useSelector(state => state.companyNews)
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  
  return (
    <div className='News' >
        <div className='News__Blog'>
        <h1>Company News Our Latest Artical & Tips for You</h1>
        <Slider {...settings}>
        {news.map(elem=>{
                return(
                   
                    <div className='News__Blog-Items' key={elem.id}>
                        <div className='Blogs__images'>
                            <img src={elem.img} alt="" />
                        </div>
                        <div className='Blogs__title'>
                            <span>{elem.title}</span>
                            <span>
                            <i className="bi bi-eye"></i>
                            {elem.view}</span>
                        </div>
                        <div className='Blogs__info'>
                            <p>{elem.desc}</p>
                            <span>{elem.text}</span>
                            <a href="#">Learn More
                            <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                )
            }
            )}
        </Slider>
        </div>
    </div>
  )
}
