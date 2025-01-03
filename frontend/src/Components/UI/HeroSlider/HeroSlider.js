

import React from 'react'

import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import './hero-slider.css'

const HeroSlider = () => {

    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 4000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    }
    return (
        <>
            <Slider {...settings} className='hero__slider'>
                <div className='slider__item slider__item-01 mt0'>
                    <Container>
                        <div className='slider__content'>
                            <h4 className='text__light mb-3' style={{ fontWeight: "bold" }}>Make Your Next Move Today</h4>
                            <h1 className='text__light mb-4'>Don't Dream, Just Do It</h1>
                            <button className='btn reserve__btn mt-4'>
                                <Link to='https://wa.me/254738949924'>Contact-Us</Link>
                            </button>
                        </div>
                    </Container>
                </div>
                <div className='slider__item slider__item-02 mt0'>
                    <Container>
                        <div className='slider__content'>
                            <h4 className='text__light mb-3' style={{ fontWeight: "bold", color: "#fff" }}>Don't Hesitate</h4>
                            <h1 className='text__light mb-4' style={{ color: "#fff" }}>Talk to our CEO(WAYNE)</h1>
                            <button className='btn reserve__btn mt-4'>
                                <Link to='https://wa.me/254799703637'>Contact Wayne</Link>
                            </button>
                        </div>
                    </Container>
                </div>
                <div className='slider__item slider__item-03 mt0'>
                    <Container>
                        <div className='slider__content'>
                            <h4 className='text__light mb-3' style={{ fontWeight: "bold" }}>Innovations</h4>
                            <h1 className='text__light mb-4' style={{ color: "#fff" }}>Let,s Make It Happen</h1>
                            <button className='btn reserve__btn mt-4'>
                                <Link to='mailto:waynemotorske@gmail.com'>Mail-us Now</Link>
                            </button>
                        </div>
                    </Container>
                </div>
            </Slider>
            <div className="social-media-bar">
                <div className="follow-us">
                    <span>Follow us</span>
                    <div className="icons">
                    <i class="ri-facebook-circle-fill" style={{fontSize:'30px',cursor:'pointer'}}></i>
                    <i class="ri-twitter-x-line" style={{fontSize:'30px',cursor:'pointer'}}></i>
                    <i class="ri-instagram-line" style={{fontSize:'30px',cursor:'pointer'}}></i>
                    </div>
                </div>
                <button className="view-new-btn">
                View All Gallery
            </button>
            </div>
        </>
    )
}

export default HeroSlider