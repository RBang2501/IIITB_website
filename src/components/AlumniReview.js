import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'react-bootstrap/Image'

import img1 from "../assets/images/1.jpeg"
import img2 from "../assets/images/2.jpeg"
import img3 from "../assets/images/3.jpeg"
import img4 from "../assets/images/4.jpeg"

import rahul from "../assets/images/Team/Rahul.jpg"
import arya from "../assets/images/Team/AryaSqr.jpg"
import rakshit from "../assets/images/Team/rakshit.jpeg"
import anurag from "../assets/images/Team/Anurag.jpeg"

import { Avatar } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';


export const AlumniReview = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <div className='mb-4 mx-auto pt-3' style={{ width: '96%' }}>
                <h3 className="text-center fw-bold">Alumni-@IIITB</h3>
                <h6 className="text-center text-secondary">All that's new and happening at IIITB</h6>
                <Carousel
                    className='pb-5'
                    partialVisbile={true}
                    // centerMode={true}
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    // autoPlaySpeed={1000}
                    // keyBoardControl={true}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className='review-card shadow-lg mx-3 p-4 text-center rounded border border-3' >
                        <FormatQuote style={{ color: 'rgb(6, 82, 154)', position: 'absolute', transform: 'translate(-180px,-30px) scale(-1,1)', fontSize: '50px' }} />
                        <p className="py-4 px-3" style={{ height: '120px', overflow: 'hidden' }}>I have been working in the field of Marketing since I graduated from IndSearch Business School from year 2007. At the time I was hired, the companies were mostly looking for graduates who have real practical knowledge with marketing skills.</p>
                        <Avatar className='border border-3 mx-auto' src={rahul} sx={{ width: 150, height: 150 }} />
                        <h5 className='text-white fw-bold mt-3 mb-1'>Rahul Jain</h5>
                        <h6 style={{ color: 'rgb(196 226 255)' }}>Tower Research Intern</h6>
                    </div>
                    <div className='review-card shadow-lg mx-3 p-4 text-center rounded border border-3' >
                        <FormatQuote style={{ color: 'rgb(6, 82, 154)', position: 'absolute', transform: 'translate(-180px,-30px) scale(-1,1)', fontSize: '50px' }} />
                        <p className="py-4 px-3" style={{ height: '120px', overflow: 'hidden' }}>I have been working in the field of Marketing since I graduated from IndSearch Business School from year 2007. At the time I was hired, the companies were mostly looking for graduates who have real practical knowledge with marketing skills.</p>
                        <Avatar className='border border-3 mx-auto' src={rakshit} sx={{ width: 150, height: 150 }} />
                        <h5 className='text-white fw-bold mt-3 mb-1'>Rakshit Bang</h5>
                        <h6 style={{ color: 'rgb(196 226 255)' }}>Microsoft Senior Lead</h6>
                    </div>
                    <div className='review-card shadow-lg mx-3 p-4 text-center rounded border border-3' >
                        <FormatQuote style={{ color: 'rgb(6, 82, 154)', position: 'absolute', transform: 'translate(-180px,-30px) scale(-1,1)', fontSize: '50px' }} />
                        <p className="py-4 px-3" style={{ height: '120px', overflow: 'hidden' }}>I have been working in the field of Marketing since I graduated from IndSearch Business School from year 2007. At the time I was hired, the companies were mostly looking for graduates who have real practical knowledge with marketing skills.</p>
                        <Avatar className='border border-3 mx-auto' src={anurag} sx={{ width: 150, height: 150 }} />
                        <h5 className='text-white fw-bold mt-3 mb-1'>Anurag Singh Naruka</h5>
                        <h6 style={{ color: 'rgb(196 226 255)' }}>Google Lead Engineer</h6>
                    </div>
                    <div className='review-card shadow-lg mx-3 p-4 text-center rounded border border-3' >
                        <FormatQuote style={{ color: 'rgb(6, 82, 154)', position: 'absolute', transform: 'translate(-180px,-30px) scale(-1,1)', fontSize: '50px' }} />
                        <p className="py-4 px-3" style={{ height: '120px', overflow: 'hidden' }}>I have been working in the field of Marketing since I graduated from IndSearch Business School from year 2007. At the time I was hired, the companies were mostly looking for graduates who have real practical knowledge with marketing skills.</p>
                        <Avatar className='border border-3 mx-auto' src={arya} sx={{ width: 150, height: 150 }} />
                        <h5 className='text-white fw-bold mt-3 mb-1'>Aditya</h5>
                        <h6 style={{ color: 'rgb(196 226 255)' }}>Amazon HR Department</h6>
                    </div>

                </Carousel>
            </div>
        </>
    );
}
