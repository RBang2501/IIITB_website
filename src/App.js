// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '../src/assets/styles/loader.css'
import college_logo from "./assets/college_logo.jpg";

import { NavigationBar } from "./components/NavigationBar";
import { Megamenu } from "./components/Megamenu";
import { EventCarousel} from "./components/EventCarousel"
import { Footer } from "./components/Footer"
import {useState, useEffect} from 'react'
import { NewsEvents } from "./components/NewsEvents";
import { SocialMediaEmbed } from "./components/SocialMediaEmbed";
import { Whyiiitb } from "./components/Whyiiitb";

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
        <div>
          <div>
            <img className="loader_logo" src={college_logo} />
          </div>

          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        </div>
      ) : (
        <>
          <NavigationBar />
          {/* <Megamenu /> */}
          <EventCarousel />
          <NewsEvents />
          <SocialMediaEmbed />
          <Whyiiitb />
          <Footer />
        </>
      )}
    </div>
  );
};



