import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/7102I1D+77L._SX3000_.jpg'
import img2 from '../../../assets/71KqvXdAQkL._SX3000_.jpg'
import img3 from '../../../assets/612-T5YABuL._SX3000_.jpg'
import style from '.././home.module.css'


export default function Section1() {
  var settings = {
    fade: true,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };  
  return <>
    <div className={`row mb-4 flex-md-row flex-column-reverse`}>
      <div className={`${style.section1} col-lg-2 col-md-3 pt-4 `}>
        <ul>
        <li>
            <Link to={'/products/menProducts'}>Men's Fashion <i className="fas fa-angle-right ms-auto"></i></Link>
          </li>
          <li>
            <Link to={'/products/womenProducts'}>Women's Fashion <i className="fas fa-angle-right ms-auto"></i></Link>
          </li>
          <li>
            <Link to={'/products/electronics'}>Electronics</Link>
          </li>
          <li>
            <Link>Home & Lifestyle</Link>
          </li>
          <li>
            <Link>Baby's & Toys</Link>
          </li>
          <li>
            <Link>Health & Beauty</Link>
          </li>
          <li>
            <Link>Sports & Outdoor</Link>
          </li>

        </ul>
      </div>
      <div className="col-md-9 pt-4 offset-lg-1">
        <Slider {...settings}>
          <div className='position-relative'>
            <img src={img1} className='w-100' />
          </div>
          <div className='position-relative'>
            <img src={img2} className='w-100' />
          </div>
          <div className='position-relative'>
            <img src={img3} className='w-100' />
          </div>
        </Slider>
      </div>
    </div>
  </>
}
