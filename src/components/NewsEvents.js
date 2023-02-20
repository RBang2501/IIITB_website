import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import img1 from "../assets/images/1.jpeg"
import img2 from "../assets/images/2.jpeg"
import img3 from "../assets/images/3.jpeg"
import img4 from "../assets/images/4.jpeg"
import img5 from "../assets/images/5.jpeg"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export const NewsEvents = () => {
    return (
      <div
        className="bg-white shadow pt-3 my-3 mt-5 rounded mx-auto"
        style={{ width: "96%" }}
      >
        <h3 className="text-center fw-bold">News & Events</h3>
        <h6 className="text-center text-secondary">
          All that's new and happening at IIITB
        </h6>
        <hr
          className="mx-5"
          style={{
            color: "grey",
            fontWeight: "700",
            height: "10px",
            fontSize: "20px",
          }}
        />
        <Carousel
        className='pb-4'
          centerMode={true}
          responsive={responsive}
          autoPlay="true"
          infinite="true"
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
          <div className="mx-3 shadow">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://iiitb.ac.in/includefiles/newsevents/small/MTech_students_won_VLSI_design_contest_at_VLSI_Design_Conference_2023_Hyderabad.jpeg"
              />
              <CardContent
                style={{
                  marginBottom: "2px !important",
                  //   paddingTop: "0px !important",
                }}
              >
               <Typography gutterBottom variant="h6" component="div" className="fw-bold" style={{lineHeight:'24px', fontSize:'17px', height:'70px', overflow:'hidden', fontFamily:'kanit'}}>
                  VLSI DESIGN CONTEST
                </Typography>
                {/* <hr className='pb-0 pt-0'/> */}
                <Typography variant="body2 " color="text.secondary" style={{fontSize:'14px'}}>
                  Our 1st year M.Tech ECE students Vinay Rayapati, Gopala
                  Krishna Reddy Sanampudi, Ravi Kiran Reddy..
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className="mx-3 shadow">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://iiitb.ac.in/includefiles/newsevents/small/Award.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" className="fw-bold" style={{lineHeight:'24px', fontSize:'17px', height:'70px', overflow:'hidden', fontFamily:'kanit'}}>
                  BTS Silver Jubilee Icon Award
                </Typography>
                {/* <hr className='pb-0 pt-0'/> */}
                <Typography variant="body2 " color="text.secondary" style={{fontSize:'14px'}}>
                  Our 1st year M.Tech ECE students Vinay Rayapati, Gopala
                  Krishna Reddy Sanampudi, Ravi Kiran Reddy..
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className="mx-3 shadow">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://iiitb.ac.in/includefiles/newsevents/CPE.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" className="fw-bold" style={{lineHeight:'24px', fontSize:'17px', height:'70px', overflow:'hidden', fontFamily:'kanit'}}>
                  Graduation ceremony of CPE
                </Typography>
                {/* <hr className='pb-0 pt-0'/> */}
                <Typography variant="body2 " color="text.secondary" style={{fontSize:'14px'}}>
                  Our 1st year M.Tech ECE students Vinay Rayapati, Gopala
                  Krishna Reddy Sanampudi, Ravi Kiran Reddy..
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className="mx-3 shadow">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://iiitb.ac.in/includefiles/newsevents/CGI_resized.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" className="fw-bold" style={{lineHeight:'24px', fontSize:'17px', height:'70px', overflow:'hidden', fontFamily:'kanit'}}>
                  CGI Scholarship for Top 20 girl students
                </Typography>
                {/* <hr className='pb-0 pt-0'/> */}
                <Typography variant="body2 " color="text.secondary" style={{fontSize:'14px'}}>
                  Our 1st year M.Tech ECE students Vinay Rayapati, Gopala
                  Krishna Reddy Sanampudi, Ravi Kiran Reddy..
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className="mx-3 shadow">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://iiitb.ac.in/includefiles/newsevents/small/Prof__Ashish_(1).jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" className="fw-bold" style={{lineHeight:'24px', fontSize:'17px', height:'70px', overflow:'hidden', fontFamily:'kanit'}}>
                  Secure Multi-party Computation Against Passive Adv
                </Typography>
                {/* <hr className='pb-0 pt-0'/> */}
                <Typography variant="body2 " color="text.secondary" style={{fontSize:'14px'}}>
                  Our 1st year M.Tech ECE students Vinay Rayapati, Gopala
                  Krishna Reddy Sanampudi, Ravi Kiran Reddy..
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </Carousel>
      </div>
    );
}
