import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailIcon from "@mui/icons-material/Email";
import {Button,TextField} from "@mui/material";
import college_logo from "../assets/IIITB-crop.png";
import { bottom } from '@popperjs/core';
import MyLocationIcon from "@mui/icons-material/MyLocation";

import white_logo from "../assets/IIITB-crop.png"


export const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-muted"
      style={{ background: "rgb(10, 25, 41)" }}
    >
      <section class="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="me-5">
          <a href="" className="me-4 text-reset">
            <LinkedInIcon />
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
            <FacebookIcon />
          </a>
        </div>
      </section>
      <section className="text-light">
        <div className="container text-center text-md-start pt-3">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1 border-end border-secondary border-1">
              <div className="">
                <img
                  src={white_logo}
                  className="pt-0 mt-0 "
                  style={{ width: "120px" }}
                />
              </div>
              <div className="">
                <h6
                  className="mb-4"
                  style={{ fontSize: "20px", fontFamily: "kanit" }}
                >
                  <i className="fas fa-gem kanit"></i>International Institute of
                  Information Techonology, Bangalore
                </h6>
              </div>

              {/* <h6 className=" fw-bold mb-1">Address:</h6> */}
              <p>
                <LocalPhoneIcon /> +91-804-1407777
              </p>
              <p className="d-flex">
                <MyLocationIcon />
                <span className="px-2">
                  {" "}
                  26/C, Opposite of Infosys gate 1 Electronics City Phase 1,
                  Hosur Road Bengaluru - 560100
                </span>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className=" fw-bold mb-2 border-bottom border-secondary border-1 py-2">
                Quick Links
              </h6>

              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Careers
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Tenders
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Donate/Contribute
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  My-IIITB
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Site-Map
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  ICC
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-2 border-bottom border-secondary border-1 py-2">
                About
              </h6>

              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Right to Information
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  NIRF
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  IQAC
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Privacy Policy
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Feedback @IIITB
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Contact Us
                </a>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mb-4">
              <div className="justify-content-center" style={{ widht: "50%" }}>
                <h6 className="fw-bold mb-3 border-bottom border-secondary border-1 py-2">
                  <i className="fas fa-gem "></i>Newsletter SignUp
                </h6>

                <div className="col-md-5 col-12 ">
                  <div
                    className="form-outline form-white mb-4 d-flex"
                    style={{ width: "20vw", fontSize: "xx-small" }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Subscribe with Email"
                      variant="filled"
                      color="primary"
                      size="small"
                      style={{
                        width: "12vw",
                        backgroundColor: "white",
                        fontSize: "xx-small",
                      }}
                    />
                    <Button variant="contained" size="medium">
                      Join
                    </Button>
                  </div>
                </div>
                <h6 className=" fw-bold mb-3 border-bottom border-secondary border-1 py-2">
                  <i className="fas fa-gem "></i>Alumni SignUp
                </h6>

                <Button variant="contained">SignUp</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ background: "black" }}>
        © 2023 IIIT Bangalore. All Rights Reserved
      </div>
    </footer>
  );
}


