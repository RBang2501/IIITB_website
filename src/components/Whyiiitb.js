import { Typography } from "@mui/material";
import CountUp from 'react-countup';
import { fadeIn } from 'react-animations'

import img1 from "../assets/images/iiitb.png"
import campus from "../assets/images/campus.jpeg"

import { green, pink, blue,yellow } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import PageviewIcon from '@mui/icons-material/Pageview';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WorkIcon from '@mui/icons-material/Work';
import HailIcon from '@mui/icons-material/Hail';
import SchoolIcon from '@mui/icons-material/School';
import BiotechIcon from '@mui/icons-material/Biotech';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

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
        <div className="card text-bg-dark rounded-0" style={{height:'450px', overflow:'hidden'}} id="why-card">
            <img src={campus} className="card-img" style={{ filter: 'brightness(18%)'}} alt="..." />
            <div className="card-img-overlay pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6 unwrap py-3" id="whylist">
                            <h1 className="fw-bold mb-4">Why Join <mark style={{}}>IIIT Bangalore?</mark></h1>
                            <h5 className="p-2" style={{ fontFamily: 'kanit', fontSize: '15px' }} id="why1">
                                <img className="pe-2 me-2" style={{ width: '30px', filter:'brightness(60%)' }} src={'https://www.iiitb.ac.in/includefiles/userfiles/images/Broad-Academic-philosophy_Icon.png'} />
                                Broad academic philosophy
                            </h5>
                            <h5 className="p-2" style={{ fontFamily: 'kanit', fontSize: '15px' }} id="why2">
                                <img className="pe-2 me-2" style={{ width: '30px', filter:'brightness(60%)' }} src={'https://www.iiitb.ac.in/includefiles/userfiles/images/practice-oriented-learning.png'} />
                                Practice oriented learning
                            </h5>
                            <h5 className="p-2" style={{ fontFamily: 'kanit', fontSize: '15px' }} id="why3">
                                <img className="pe-2 me-2" style={{ width: '30px', filter:'brightness(60%)' }} src={'https://www.iiitb.ac.in/includefiles/userfiles/images/Emphasis-on-research_Icon.png'} />
                                Emphasis on research
                            </h5>
                            <h5 className="p-2" style={{ fontFamily: 'kanit', fontSize: '15px' }} id="why4">
                                <img className="pe-2 me-2" style={{ width: '30px', filter:'brightness(60%)' }} src={'https://www.iiitb.ac.in/includefiles/userfiles/images/Entrepreneurial-support_icon.png'} />
                                Enterpreneurial support
                            </h5>
                            <h5 className="p-2" style={{ fontFamily: 'kanit', fontSize: '15px' }} id="why5">
                                <img className="pe-2 me-2" style={{ width: '30px', filter:'brightness(60%)' }} src={'https://www.iiitb.ac.in/includefiles/userfiles/images/Excellent-peer-group_Icon.png'} />
                                Excellent peer group
                            </h5>
                            <h5 className="p-2" style={{ fontFamily: 'kanit', fontSize: '15px' }} id="why6">
                                <img className="pe-2 me-2" style={{ width: '30px', filter:'brightness(60%)' }} src={'https://www.iiitb.ac.in/includefiles/userfiles/images/Global-exchange-student_Icon.png'} />
                                Global exchange opportunity
                            </h5>
                        </div>
                        <div className="col-6 row">
                            <div className="col-4 d-flex px-0" style={{ height: '100px', width: '180px' }}>
                                <MenuBookIcon className="my-auto" sx={{ fontSize: 60, color: yellow[100] }} />
                                <div className="ps-2 my-auto" style={{ fontFamily: 'kanit', fontSize: '20px', fontWeight: '700' }}>
                                    <CountUp enableScrollSpy end={554} duration={2}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{ fontSize: '12px' }}>iMTech</h6>
                                </div>
                            </div>

                            <div className="col-4 d-flex px-0" style={{ height: '100px', width: '180px' }}>
                                <LaptopChromebookIcon className="my-auto" sx={{ fontSize: 60, color: yellow[100] }} />
                                <div className="ps-2 my-auto" style={{ fontFamily: 'kanit', fontSize: '20px', fontWeight: '700' }}>
                                    <CountUp enableScrollSpy end={358} duration={2}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{ fontSize: '12px' }}>MTech</h6>
                                </div>
                            </div>

                            <div className="col-4 d-flex px-0" style={{ height: '100px', width: '180px' }}>
                                <RocketLaunchIcon className="my-auto" sx={{ fontSize: 60, color: yellow[100] }} />
                                <div className="ps-2 my-auto" style={{ fontFamily: 'kanit', fontSize: '20px', fontWeight: '700' }}>
                                    <CountUp enableScrollSpy end={50} duration={2}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{ fontSize: '12px' }}>Startups</h6>
                                </div>
                            </div>

                            <div className="col-4 d-flex px-0" style={{ height: '100px', width: '180px' }}>
                                <HailIcon className="my-auto" sx={{ fontSize: 60, color: yellow[100] }} />
                                <div className="ps-2 my-auto" style={{ fontFamily: 'kanit', fontSize: '20px', fontWeight: '700' }}>
                                    <CountUp enableScrollSpy end={61} duration={2}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{ fontSize: '12px' }}>Faculty</h6>
                                </div>
                            </div>

                            <div className="col-4 d-flex px-0" style={{ height: '100px', width: '180px' }}>
                                <BiotechIcon className="my-auto" sx={{ fontSize: 60, color: yellow[100] }} />
                                <div className="ps-2 my-auto" style={{ fontFamily: 'kanit', fontSize: '20px', fontWeight: '700' }}>
                                    <CountUp enableScrollSpy end={178} duration={2}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{ fontSize: '12px' }}>Research Scholars</h6>
                                </div>
                            </div>

                            <div className="col-4 d-flex px-0" style={{ height: '100px', width: '180px' }}>
                                <SchoolIcon className="my-auto" sx={{ fontSize: 60, color: yellow[100] }} />
                                <div className="ps-2 my-auto" style={{ fontFamily: 'kanit', fontSize: '20px', fontWeight: '700' }}>
                                    <CountUp enableScrollSpy end={3500} duration={2}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{ fontSize: '12px' }}>Alumni</h6>
                                </div>
                            </div>

                            <div className="col-4 d-flex px-0" style={{ height: '100px', width: '180px' }}>
                                <AutoStoriesIcon className="my-auto" sx={{ fontSize: 60, color: yellow[100] }} />
                                <div className="ps-2 my-auto" style={{ fontFamily: 'kanit', fontSize: '20px', fontWeight: '700' }}>
                                    <CountUp enableScrollSpy end={1200} duration={2}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{ fontSize: '12px' }}>Publications</h6>
                                </div>
                            </div>

                            <div className="col-4 d-flex px-0" style={{ height: '100px', width: '180px' }}>
                                <AccountBalanceIcon className="my-auto" sx={{ fontSize: 60, color: yellow[100] }} />
                                <div className="ps-2 my-auto" style={{ fontFamily: 'kanit', fontSize: '20px', fontWeight: '700' }}>
                                    <CountUp enableScrollSpy end={617362.8} duration={2}></CountUp>
                                    <h6 className="pt-0 mt-0" style={{ fontSize: '12px' }}>sq ft of Space</h6>
                                </div>
                            </div>
                            {/* <CountUp end={100} duration={2}></CountUp> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}