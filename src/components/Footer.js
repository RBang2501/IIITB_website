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
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const Footer = () => {

  const [open, setOpen] = React.useState(false);
   const handleClick = () => {
     setOpen(true);
   };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleToggle = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  return (
    <footer
      className="text-lg-start text-muted mobile-footer"
      style={{ background: "rgb(10, 25, 41)" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        <div className="me-5 d-none d-lg-block">
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
        <div className="container  text-md-start pt-3">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1 border-end border-secondary border-1">
              <div className="ps-4">
                <img
                  src={white_logo}
                  className="pt-0 mt-0 "
                  style={{ width: "120px" }}
                />
              </div>
              <div className="ps-4">
                <h6
                  className="mb-4"
                  style={{ fontSize: "15px", fontFamily: "ibmPlexMono" }}
                >
                  <i className="fas fa-gem"></i>International Institute of
                  Information Techonology, Bangalore
                </h6>
              </div>

              <p style={{fontSize:'12px'}}>
                <LocalPhoneIcon /> +91-804-1407777
              </p>
              <p style={{fontSize:'12px'}} className="d-flex">
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
                <a href="#!" style={{fontSize:'14px'}} className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Careers
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Tenders
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Donate/Contribute
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  My-IIITB
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Site-Map
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="text-reset text-decoration-none">
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
                <a href="#!" style={{fontSize:'14px'}} className="d-flex text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Right to Information
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="d-flex text-reset text-decoration-none">
                  <ChevronRightIcon />
                  NIRF
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="d-flex text-reset text-decoration-none">
                  <ChevronRightIcon />
                  IQAC
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="d-flex text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Privacy Policy
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="d-flex text-reset text-decoration-none">
                  <ChevronRightIcon />
                  Feedback @IIITB
                </a>
              </div>
              <div className="mb-2">
                <a href="#!" style={{fontSize:'14px'}} className="d-flex text-reset text-decoration-none">
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
                    className="footer-sub form-outline form-white mb-4 d-flex"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Subscribe with Email"
                      variant="filled"
                      color="primary"
                      size="small"
                      style={{
                        backgroundColor: "white",
                        fontSize: "xx-small",
                      }}
                    />
                    {/* <div> */}
                      <Button
                        onClick={handleToggle}
                        variant="contained"
                        size="large"
                      >
                        Join
                      </Button>
                      <Backdrop
                        sx={{
                          color: "#fff",
                          zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={open}
                        // onClick={handleClose}
                      >
                        <CircularProgress color="inherit" />
                      </Backdrop>

                      <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        // onClose={handleClose}
                      >
                        <Alert
                          // onClose={handleClose}
                          severity="success"
                          sx={{ width: "100%" }}
                        >
                          Registered Successfully!
                        </Alert>
                      </Snackbar>
                    {/* </div> */}
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

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15559.89573890495!2d77.663216!3d12.84496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135aeb7f340f%3A0x3ad86af40d2ac611!2sInternational%20Institute%20of%20Information%20Technology%2C%20Bangalore!5e0!3m2!1sen!2sus!4v1680683122520!5m2!1sen!2sus" width="100%" height="200" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

      <div className=" p-3" style={{ background: "black" }}>
        © 2023 IIIT Bangalore. All Rights Reserved
      </div>
    </footer>
  );
}