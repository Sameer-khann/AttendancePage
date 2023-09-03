import React, { useState } from 'react'
import { Link } from "react-router-dom";
import note from '../img/bookspng (1).png'
import att from '../img/celender1.webp'
import shop from '../img/shop4.png'
import adImg from '../img/notePic5New.png'
import tagImg from '../img/tag.png'
import bulb from '../img/blub (2).png'
import dia from '../img/dai (2).png'
import gear from '../img/gear (2).png'
// import query from '../img/gear (2).png'

import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';





// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Footer from './Footer';



export default function LandingPage() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            // Use toast.error to show an error message
            toast.error("Please fill in all the fields", { position: "top-center" });
            return;
        }

        // EmailJS parameters
        const templateParams = {
            from_name: name,
            email_id: email,
            message: message,
        };

        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
        const serviceID = 'service_2uzc75j';
        const templateID = 'template_4r24u3k';
        const userID = 'XjcSC4PzoNt-2Mpka';


        // Send the email
        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('Email sent successfully!', response);
                // Use toast to show a success message
                toast.success("Send Successfully!", { position: "top-center" });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                // Use toast.error to show an error message
                toast.error("Error sending email", { position: "top-center" });
            });

        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
    };






    return (
        <>

            <div className="NotesSection">
                <div className="noteimg">
                    <img src={note} alt="" />
                </div>
                <div className="textNotes">
                    <h1>We have been improving for so many years</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam repudiandae ex aut, expedita quia voluptates assumenda doloribus odio praesentium eaque quod ab minus,</p>

                    <div className="buttNote">
                        <Link to="/notes" style={{ textDecoration: "none", }}>
                            <button>NOTES</button>
                        </Link>
                    </div>
                </div>

            </div>


            <div className="AttenSection">
                <div className="textAttendece">
                    <h1>We have been <span>improving</span> for so many years</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam repudiandae ex aut, expedita quia voluptates assumenda doloribus odio praesentium eaque quod ab minus,</p>

                    <div className="buttAttdace">
                    <Link to="/AttendancePage" style={{ textDecoration: "none", }}>
                        <button>TRACK YOUR ATTENDANCE</button>
                        </Link>
                    </div>
                </div>
                <div className="attenimg">
                    <img src={att} alt="" />
                </div>

            </div>

            <div className="noteADD">
                <div className="tag">
                    <img src={tagImg} alt="" />
                </div>
                <div className="items">
                    <div className="adimg">
                        <img src={adImg} alt="" />
                        <div className="adtext">
                            <h1>BEST NOTES</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing obcaecati illo.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ShopSection">
                <div className="Shopimg">
                    <img src={shop} alt="" />
                </div>
                <div className="textShop">
                    <h1>We have been <span>improving</span> for so many years</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam repudiandae ex aut, expedita quia voluptates assumenda doloribus odio praesentium eaque quod ab minus,</p>

                    <div className="buttShop">
                    <Link to="/Shop" style={{ textDecoration: "none", }}>
                        <button>SHOP NOW</button>
                        </Link>
                    </div>
                </div>


            </div>


            {/* start img section */}
            <div className="headIMGSlider">
                <h1>TEAM MENBER</h1>
            </div>

            {/* img slider */}
            <div className="imgSlider">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={false}
                    centeredSlides={true}
                    initialSlide={1}
                    loop={false}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: -100,
                        depth: 500,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={
                        {
                            el: ".swiper-pagination",
                        }
                    }

                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{ width: '400px', height: '450px' }}>
                        <div className="team-box team-box1">
                            <div className="team-name">
                                <center>
                                    <div className="team-content">
                                        <h2>SHASHANK PANDAY</h2>
                                        <p>Web Developer</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '400px', height: '450px' }}>
                        <div className="team-box team-box2">
                            <div className="team-name">
                                <center>
                                    <div className="team-content">
                                        <h2>MOHD AZAM</h2>
                                        <p>Web Developer</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '400px', height: '450px' }}>
                        <div className="team-box team-box3">
                            <div className="team-name">
                                <center>
                                    <div className="team-content">
                                        <h2>SAMEER KHAN</h2>
                                        <p>Web Developer</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* about */}

            <div className="aboutHead">
                <h1>About Us</h1>
            </div>
            <div className="about">
                <div className="bgabout">
                    <div className="cardAboutA">
                        <div className="logo">
                            <img src={bulb} alt="" />
                        </div>
                        <div className="textaboutA">
                            <h1>Features</h1>
                            <p>A strategy describes how the ends (goals) will be achieved by the means (resources).</p>
                        </div>
                        <div className="buttonabout">
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="cardAboutB">
                        <div className="logoB">
                            <img src={dia} alt="" />
                        </div>
                        <div className="textaboutB">
                            <h1>Features</h1>
                            <p>A strategy describes how the ends (goals) will be achieved by the means (resources).</p>
                        </div>
                        <div className="buttonaboutB">
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="cardAboutC">
                        <div className="logoC">
                            <img src={gear} alt="" />
                        </div>
                        <div className="textaboutC">
                            <h1>Features</h1>
                            <p>A strategy describes how the ends (goals) will be achieved by the means (resources).</p>
                        </div>
                        <div className="buttonaboutC">
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* end about */}
            <div className="CuerySEC">
            <div className="subjectSecProL">
                        <h3>Query/Suggestions</h3>
                        <div className="SubName">
                            <form onSubmit={handleSubmit}>
                                <span>Enter your name:</span>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Name'
                                />

                                <span>Enter your E-mail:</span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='E-mail'
                                />

                                <span>Write Your suggestion/query here:</span>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    cols="20" rows="4"
                                    placeholder='Description'
                                />

                                <button type="submit" className='contactbtn'>Submit</button>
                            </form>
                        </div>
                    </div>
                    </div>


        <Footer/>

        </>
    )
}
