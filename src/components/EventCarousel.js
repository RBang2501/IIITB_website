import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';

export const EventCarousel = () => {
    return (
        <div className='container px-0' >
            <Carousel pause='false' fade className='event-carousel mx-0 px-0'>
                <Carousel.Item interval={5000} className='event-carousel-item' style={{height:'70vh'}}>
                    <img
                        className="d-block w-100 event-carousel-img"
                        src={img3}
                        alt="First slide"
                    />
                    <Carousel.Caption className='event-carousel-caption'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='event-carousel-item' style={{height:'70vh'}}>
                    <img
                        className="d-block w-100 event-carousel-img"
                        src={img1}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='event-carousel-caption'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className='event-carousel-item' style={{height:'70vh'}}>
                    <img
                        className="d-block w-100 event-carousel-img"
                        src={img2}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='event-carousel-caption'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}