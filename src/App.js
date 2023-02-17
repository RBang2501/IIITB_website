import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { Navbar } from "./components/Navbar";
import { Megamenu } from "./components/Megamenu";
import { EventCarousel} from "./components/EventCarousel"
// import {Menubar} from "./components/Menubar"

function App() {
  return (
    <>
      <Navbar/>
      <Megamenu/>
      <EventCarousel/>
      {/* <Menubar/> */}
    </>
   );
























}

export default App;



