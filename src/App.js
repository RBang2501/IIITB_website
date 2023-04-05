import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/styles/megamenu.css';
import './assets/styles/responsive.css';

import college_logo from "./assets/iiitb_logo.png";
import Box from "@mui/material/Box";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import NavigationIcon from '@mui/icons-material/Navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Gallery } from "./components/Gallery"
import { NavigationBar } from "./components/NavigationBar";
import { EventCarousel } from "./components/EventCarousel"
import { Footer } from "./components/Footer"
import { useState, useEffect } from 'react'
import { NewsEvents } from "./components/NewsEvents";
import { SocialMediaEmbed } from "./components/SocialMediaEmbed";
import { Whyiiitb } from "./components/Whyiiitb";
import { AlumniReview } from "./components/AlumniReview"
import { Location } from './components/Location';

import CircularProgress from "@mui/material/CircularProgress";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ background: "black" }}>
          <div>
            <img
              className="loader_logo"
              style={{
                margin: "0",
                position: "absolute",
                top: "42%",
                left: "50%",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "160px",
              }}
              src={college_logo}
            />
          </div>

          <Box
            sx={{ display: "flex" }}
            style={{
              margin: "0",
              position: "absolute",
              top: "55%",
              left: "50%",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress />
          </Box>
        </div>
      )
        : (
          <>
            <NavigationBar />
            <div className='stick-access'>
              <Fab className='mb-1' color="primary" aria-label="access" style={{backgroundColor:'white', color:'rgb(6, 82, 154)'}}>
                <AccessibilityIcon />
              </Fab>
              <Fab className='mobile-invisible' color="primary" aria-label="location" style={{backgroundColor:'white', color:'rgb(6, 82, 154)'}}>
                <LocationOnIcon />
              </Fab>
            </div>
            <EventCarousel />
            <NewsEvents />
            <Whyiiitb />
            <SocialMediaEmbed />
            <Gallery />
            <AlumniReview />
            <Location />
            <Footer />
          </>
        )}
    </div>
  );
};



