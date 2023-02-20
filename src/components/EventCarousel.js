import * as React from 'react';
// import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';

export const EventCarousel = () => {
    return (
        <div className='mx-auto rounded shadow-lg border mt-3 bg-dark' style={{width:'96%'}} >
            <Carousel pause='false' fade className='event-carousel mx-0 px-0 rounded'>
                <Carousel.Item interval={5000} className='event-carousel-item' style={{height:'70vh'}}>
                    <img
                        className="d-block w-100 event-carousel-img"
                        src="https://iiitb.ac.in/includefiles/banners/jubileee.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='event-carousel-caption'>
                        <h3 className='fw-bold mb-4'>Being in Oblivion</h3>
                        <h5 className='mb-4' style={{height:'70px', overflow:'hidden'}}>
                            Is being in oblivion the hallmark of today’s youth? The poor attendance in many events particularly in the academic and quasi-academic realm in...
                        </h5>
                        <button className=' mt-2 btn btn-light'>Know More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='event-carousel-item' style={{height:'70vh'}}>
                    <img
                        className="d-block w-100 event-carousel-img"
                        src="https://iiitb.ac.in/includefiles/banners/website_banner7.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='event-carousel-caption'>
                        <h3 className='fw-bold mb-4'>Being in Oblivion</h3>
                        <h5 className='mb-4' style={{height:'70px', overflow:'hidden'}}>
                            Is being in oblivion the hallmark of today’s youth? The poor attendance in many events particularly in the academic and quasi-academic realm in...
                        </h5>
                        <button className=' mt-2 btn btn-light'>Know More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='event-carousel-item' style={{height:'70vh'}}>
                    <img
                        className="d-block w-100 event-carousel-img"
                        src="https://iiitb.ac.in/includefiles/banners/pic.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='event-carousel-caption'>
                        <h3 className='fw-bold mb-4'>Being in Oblivion</h3>
                        <h5 className='mb-4' style={{height:'70px', overflow:'hidden'}}>
                            Is being in oblivion the hallmark of today’s youth? The poor attendance in many events particularly in the academic and quasi-academic realm in...
                        </h5>
                        <button className=' mt-2 btn btn-light'>Know More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='event-carousel-item' style={{height:'70vh'}}>
                    <img
                        className="d-block w-100 event-carousel-img"
                        src="https://iiitb.ac.in/includefiles/banners/Website_banner.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='event-carousel-caption'>
                        <h3 className='fw-bold mb-4'>Being in Oblivion</h3>
                        <h5 className='mb-4' style={{height:'70px', overflow:'hidden'}}>
                            Is being in oblivion the hallmark of today’s youth? The poor attendance in many events particularly in the academic and quasi-academic realm in...
                        </h5>
                        <button className=' mt-2 btn btn-light'>Know More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='event-carousel-item' style={{height:'70vh'}}>
                    <img
                        className="d-block w-100 event-carousel-img"
                        src="https://iiitb.ac.in/includefiles/banners/iiitb-bangalore3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='event-carousel-caption'>
                        <h3 className='fw-bold mb-4'>Being in Oblivion</h3>
                        <h5 className='mb-4' style={{height:'70px', overflow:'hidden'}}>
                            Is being in oblivion the hallmark of today’s youth? The poor attendance in many events particularly in the academic and quasi-academic realm in...
                        </h5>
                        <button className=' mt-2 btn btn-light'>Know More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}