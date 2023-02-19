import React from 'react'
import  "../assets/styles/footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailIcon from "@mui/icons-material/Email";
import {Button,TextField} from "@mui/material";
import college_logo from "../assets/IIITB-invert-logo.png";
import { bottom } from '@popperjs/core';

import white_logo from "../assets/IIITB-invert-logo.png"


export const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">

      <section className="text-light">
        <div className="container text-center text-md-start pt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 border-end border-secondary border-1">
              <img src={white_logo} className='w-50'/>
              {/* <h6 className="text-uppercase fw-bold mb-3">
                <i className="fas fa-gem "></i>International Institute of
                Information Techonology, Bangalore
              </h6> */}
              <h6 className=" fw-bold mb-1">Address:</h6>
              <p>
                26/C, Opposite of Infosys gate 1 Electronics City Phase 1, Hosur
                Road Bengaluru - 560100
              </p>
              <p>
                <LocalPhoneIcon /> +91-804-1407777
              </p>
              <p>
                <EmailIcon /> peeroff[AT]iiitb.ac.in
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-2">Quick Links</h6>

              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Careers
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Tenders
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Donate/Contribute
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  My-IIITB
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Site-Map
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  ICC
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-2">Quick Links</h6>

              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Careers
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Tenders
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Donate/Contribute
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  My-IIITB
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Site-Map
                </a>
              </div>
              <div>
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  ICC
                </a>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mb-4">
              <div className="justify-content-center" style={{ widht: "50%" }}>
                <h6 className="text-uppercase fw-bold mb-3 border-bottom border-secondary border-1">
                  <i className="fas fa-gem "></i>Newsletter SignUp
                </h6>

                <div className="col-md-5 col-12 ">
                  <div className="form-outline form-white mb-4 d-flex" style={{width:'20vw', fontSize:'xx-small'}}>
                    <TextField
                      id="outlined-basic"
                      label="Subscribe with Email"
                      variant="filled"
                      color='primary'
                      size="small"
                      style={{ width: "12vw", backgroundColor:'white', fontSize:'xx-small'}}
                    />
                    <Button variant="contained" size="medium">Join</Button>
                  </div>
                </div>
                <h6 className="text-uppercase fw-bold mb-3 border-bottom border-secondary border-1">
                  <i className="fas fa-gem "></i>Alumni SignUp
                </h6>

                <Button variant="contained">SignUp</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center p-4 border-bottom bg-primary text-white">
        {/* <div className="me-5 d-none d-lg-block">
          <span></span>
        </div> */}
          <a href="" className="me-4 text-reset">
            <FacebookIcon />
          </a>

          <a href="" className="me-4 text-reset">
            <TwitterIcon />
          </a>
          <a href="" className="me-4 text-reset">
            <YouTubeIcon />
          </a>
          <a href="" className="me-4 text-reset">
            <InstagramIcon />
          </a>
          <a href="" className="me-4 text-reset">
            <LinkedInIcon />
          </a>
      </section>

      <div
        className="text-center p-4 bg-dark"
      >
        © 2023 IIIT Bangalore. All Rights Reserved
        {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          For queries contact webmaster @iiitb.ac.in
        </a> */}
      </div>
    </footer>
  );
}


