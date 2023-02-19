import { Typography } from "@mui/material";
import CountUp from 'react-countup';
import { fadeIn } from 'react-animations'

import img1 from "../assets/images/iiitb.png"

import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import PageviewIcon from '@mui/icons-material/Pageview';

import books from "../assets/images/books.png";
import college from "../assets/images/college.png";


import "../assets/styles/whyiiitb.css"
import { fontSize } from "@mui/system";

function reveal() {
    var reveals = document.querySelectorAll(".unwrap");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("act");
        } else {
            reveals[i].classList.remove("act");
        }
    }
}

window.addEventListener("scroll", reveal);

export const Whyiiitb = () => {
    return (
        <div className="card text-bg-dark" id="why-card">
            <img src={img1} className="card-img" style={{ filter: 'brightness(18%)' }} alt="..." />
            <div className="card-img-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-6 unwrap" id="whylist">
                            {/* <Typography variant="h3">Why Join IIITB?</Typography> */}
                            <h1>Why Join IIIT Bangalore?</h1>
                            <h5 id="why1">Broad academic philosophy</h5>
                            <h5 id="why2">Practice oriented learning</h5>
                            <h5 id="why3">Emphasis on research</h5>
                            <h5 id="why4">Enterpreneurial support</h5>
                            <h5 id="why5">Excellent peer group</h5>
                            <h5 id="why6">Global exchange opportunity</h5>
                        </div>
                        <div className="col-6">
                            <div className="d-flex border" style={{ height: '100px', width: '200px' }}>
                                <Avatar variant="rounded" sx={{ bgcolor: pink[500], width:'100px', height:'auto' }}>
                                    <PageviewIcon sx={{fontSize:50}} />
                                </Avatar>
                                <div className="ps-2" style={{fontFamily:'kanit', fontSize:'40px'}}>
                                    <CountUp end={100} duration={5}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{fontSize:'20px'}}>iMTech</h6>
                                </div>
                            </div>
                            {/* <CountUp end={100} duration={5}></CountUp> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}