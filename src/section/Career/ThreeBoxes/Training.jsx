import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ScrollToHashElement from "../../ScrollToHashElement/ScrollToHashElement";
import Main from "../../../assets/TND.png";
import { IoIosArrowBack } from "react-icons/io";
import './lifeatsawariya.css'
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Training = () => {
    useEffect(()=>{
    AOS.init({duration:2000})
  }),[]
    return (
        <div id="training">
            <ScrollToHashElement />
            <Navbar></Navbar>
            <div>
                <div className="career__image" data-aos="fade-up">
                    <img src={Main} alt="Training_Image" />
                </div>
                <div>
                    <div className="about_head" data-aos="fade-up">
                        <h1>Training & Development</h1>
                        <p>
                            Sawariya Grain and Seeds Private Limited is committed to nurturing
                            talent and building the future of agriculture through hands-on
                            learning and practical exposure.
                            <br />
                            <br />
                            We offer a wide range of training and internship opportunities for
                            graduates from agriculture and allied sectors, providing real-time
                            industry experience within a professional seed and grain company.
                            Our programs are designed to equip individuals with both technical
                            knowledge and business acumen.
                            <br />
                            <br />
                            Our training programs include: Internships across departments to
                            experience real work environments and industry practices.
                            <br />
                            <br />
                            Sales & Marketing Training focused on agri-input markets and
                            customer engagement strategies.
                            <br />
                            <br />
                            Crop Protection Training to understand pest management, safe
                            pesticide use, and sustainable farming methods.
                            <br />
                            <br />
                            Seed Production Training that covers breeding, processing, and
                            quality control in seed development.
                            <br />
                            <br />
                            Unit Visits for firsthand observation of processing plants,
                            storage facilities, and logistics operations.
                            <br />
                            <br />
                            Training on Agri-Entrepreneurship to guide individuals on building
                            a successful business in the seed and grain industry.
                            <br />
                            <br />
                            Distributor Training Programs for those interested in partnering
                            with Sawariya Group as official distributors.
                            <br />
                            <br />
                            Farmer Training Programs to support growers in choosing the right
                            crop varieties, fertilizers, manures, and following effective
                            cultivation practices.
                            <br />
                            <br />
                            Our training ecosystem is designed to support students, future
                            agri-entrepreneurs, distributors, and farmers—empowering them with
                            practical knowledge and opportunities to succeed in the dynamic
                            world of agriculture.
                            <br />
                            <br />
                            Join us in our mission to transform agriculture with innovation,
                            integrity, and impact.
                            <br />
                            <br />
                            If you are interested in joining any of these roles, please visit
                            the 'Careers' section and apply through the 'Current Openings'
                            page or submit the application form provided.
                        </p>
                    </div>
                </div>
            </div>
            <div className="btn btn-primary">
                <Link to="/career" className="back-button">
                    <IoIosArrowBack />
                    Careers
                </Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Training;
