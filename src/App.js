import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { Navbar } from "./components/Navbar";
import { Megamenu } from "./components/Megamenu";
import { EventCarousel } from "./components/EventCarousel"
import { NewsEvents } from "./components/NewsEvents"
import { SocialMediaEmbed } from './components/SocialMediaEmbed';
import { Footer } from "./components/Footer"
import { Whyiiitb } from "./components/Whyiiitb"
// import {Menubar} from "./components/Menubar"

import Cookies from 'universal-cookie';
const cookies = new Cookies();


function App() {

  return (
    <>
      <Navbar />
      <Megamenu />
      <EventCarousel />
      <NewsEvents />
      <SocialMediaEmbed />
      <Whyiiitb/>
      
      <Footer/>
    </>
  );
























}

export default App;



