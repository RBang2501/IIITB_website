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
        <>
            <div className='mx-auto rounded shadow-lg border mt-3 bg-dark' style={{ width: '96%' }} >
                <Carousel touch='true' pause='false' fade className='event-carousel mx-0 px-0 rounded'>
                    <Carousel.Item interval={5000} className='event-carousel-item'>
                        <img
                            className="d-block w-100 event-carousel-img"
                            src="https://iiitb.ac.in/includefiles/banners/Website_banner21.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='event-carousel-caption'>
                            <h3 className='fw-bold mb-lg-4'>M.Tech (Computer Science Engineering)</h3>
                            <h5 className='mb-lg-4'>
                            The M.Tech program at IIIT Bangalore is a two-year postgraduate course that provides advanced knowledge and skills in the field of computer science engineering.
                            </h5>
                            <button className='know-more-button mt-lg-2 mt-0 btn btn-light'>Know More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} className='event-carousel-item'>
                        <img
                            className="d-block w-100 event-carousel-img"
                            src="https://iiitb.ac.in/includefiles/banners/Website_banner31.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='event-carousel-caption'>
                            <h3 className='fw-bold mb-lg-4'>M.Tech (Electronics and Communication Engineering)</h3>
                            <h5 className='mb-lg-4'>
                                The M.Tech program at IIIT Bangalore is a two-year postgraduate course that provides advanced knowledge and skills in the field of Electronics and communication engineering.
                            </h5>
                            <button className='know-more-button mt-lg-2 mt-0 btn btn-light'>Know More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} className='event-carousel-item'>
                        <img
                            className="d-block w-100 event-carousel-img"
                            src="https://iiitb.ac.in/includefiles/banners/Website_banner8.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='event-carousel-caption'>
                            <h3 className='fw-bold mb-lg-4'>MSc in Digital Society</h3>
                            <h5 className='mb-lg-4'>
                            The MSc in Digital Society program at IIITB is an interdisciplinary course that explores the social, cultural, economic, and political implications of digital technologies on society. The course aims to equip students with the skills and knowledge to understand the complexities of the digital world and to navigate the emerging digital landscape.
                            </h5>
                            <button className='know-more-button mt-lg-2 mt-0 btn btn-light'>Know More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} className='event-carousel-item'>
                        <img
                            className="d-block w-100 event-carousel-img"
                            src="https://iiitb.ac.in/includefiles/banners/jubileee.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='event-carousel-caption'>
                            <h3 className='fw-bold mb-lg-4'>Silver Jubilee Year</h3>
                            <h5 className='mb-lg-4'>
                            In 1998, IIITB was officially registered with the Karnataka Registrar of Society and thus was born India’s premier institution which was envisioned to play a stellar role in IT education in India. It is with a great sense of pride that we enter into this landmark 25th year, for IIITB is well ahead of its times in realizing the objectives set by our founders.
                            </h5>
                            <button className='know-more-button mt-lg-2 mt-0 btn btn-light'>Know More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item interval={5000} className='event-carousel-item' style={{ height: 'min-content' }}>
                        <img
                            className="d-block w-100 event-carousel-img"
                            src="https://iiitb.ac.in/includefiles/banners/website_banner7.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption className='event-carousel-caption'>
                            <h3 className='fw-bold mb-lg-4'>Being in Oblivion</h3>
                            <h5 className='mb-lg-4'>
                                Is being in oblivion the hallmark of today’s youth? The poor attendance in many events particularly in the academic and quasi-academic realm in...
                            </h5>
                            <button className='know-more-button mt-lg-2 mt-0 btn btn-light'>Know More</button>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    <Carousel.Item interval={5000} className='event-carousel-item' style={{ height: 'min-content' }}>
                        <img
                            className="d-block w-100 event-carousel-img"
                            src="https://iiitb.ac.in/includefiles/banners/pic.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className='event-carousel-caption'>
                            <h3 className='fw-bold mb-lg-4'>Pic Speaks</h3>
                            <h5 className='mb-lg-4'>
                            IIITB Media is a YouTube channel that focuses on producing content related to technology, entrepreneurship, and innovation. The channel's tagline "Pic Speaks" refers to the use of visual storytelling in their videos to communicate complex ideas and concepts.
                            </h5>
                            <button className='know-more-button mt-lg-2 mt-0 btn btn-light'>Know More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} className='event-carousel-item' style={{ height: 'min-content' }}>
                        <img
                            className="d-block w-100 event-carousel-img"
                            src="https://iiitb.ac.in/includefiles/banners/Website_banner.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className='event-carousel-caption'>
                            <h3 className='fw-bold mb-lg-4'>NAAC Accreditation</h3>
                            <h5 className='mb-lg-4'>
                            The National Assessment and Accreditation Council (NAAC) awarded IIITB with an A++ grade in its 2021 accreditation cycle. This accreditation recognizes the institute's commitment to excellence in education, research, and overall institutional development.
                            </h5>
                            <button className='know-more-button mt-lg-2 mt-0 btn btn-light'>Know More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} className='event-carousel-item' style={{ height: 'min-content' }}>
                        <img
                            className="d-block w-100 event-carousel-img"
                            src="https://iiitb.ac.in/includefiles/banners/iiitb-bangalore3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className='event-carousel-caption'>
                            <h3 className='fw-bold mb-lg-4'>Campus Virtual Tour</h3>
                            <h5 className='mb-lg-4'>
                                The IIIT Bangalore virtual tour feature allows prospective students and visitors to explore the campus and facilities of the institute from the comfort of their homes. The tour includes 360-degree panoramic views of classrooms, labs, auditoriums, hostels, and other areas of the campus.
                            </h5>
                            <button className='know-more-button mt-lg-2 mt-0 btn btn-light'>Virtual Tour</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>


        </>
    );
}