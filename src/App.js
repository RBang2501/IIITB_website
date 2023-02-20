import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import college_logo from "./assets/iiitb_logo.png";
import Box from "@mui/material/Box";

import {Gallery} from "./components/Gallery"
import { NavigationBar } from "./components/NavigationBar";
import { Megamenu } from "./components/Megamenu";
import { EventCarousel} from "./components/EventCarousel"
import { Footer } from "./components/Footer"
import {useState, useEffect} from 'react'
import { NewsEvents } from "./components/NewsEvents";
import { SocialMediaEmbed } from "./components/SocialMediaEmbed";
import { Whyiiitb } from "./components/Whyiiitb";
import {AlumniReview} from "./components/AlumniReview"

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
          {/* <Megamenu /> */}
          <EventCarousel />
          <NewsEvents />
          <Whyiiitb />
          <SocialMediaEmbed />
          <Gallery/> 
          <AlumniReview/>
          <Footer />
        </>
      )}
    </div>
  );
};



