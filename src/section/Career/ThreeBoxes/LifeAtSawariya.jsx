import React from "react";
import ScrollToHashElement from "../../ScrollToHashElement/ScrollToHashElement";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Main from "../../../assets/LAS.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import './lifeatsawariya.css'
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const LifeAtSawariya = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }),[]
  return (
    <div id="life-at-sawariya" >

   
    <div >
      <ScrollToHashElement />
      <Navbar></Navbar>
      <div >
        <div className="career__image" data-aos="fade-up">
          <img src={Main} alt=" Life at Sawariya Group " />
        </div>
        <div>
         <div className="about_head"data-aos="fade-up" >
             <h1 > Life at Sawariya Group</h1>
          <p>
            Sawariya Group is not only a work place but also a defined platform
            for an individual's personal growth along with mentorship for career
            development.
            <br />
            <br />
            In Sawariya Group achievement“, personally or professionally. We
            foster an atmosphere that encourages self exploration, self guided
            skills development, and achievement.”
            <br />
            <br />
            To enable this, we provide life changing facilities with the utmost
            world class technologically advanced equipment to ensure that the
            employees work passionately towards their goals.
            <br />
            <br />
            Sawariya Group strives to solve impossible actual societal
            challenges so if you enjoy challenge and solving problems then this
            is the right place for you.
          </p>
         </div>
        </div>
      </div>
<div className="btn btn-primary">
  <Link to="/career" className="back-button"> <IoIosArrowBack/>Careers</Link>
</div>

      <Footer></Footer>
    </div>
     </div>
  );
};

export default LifeAtSawariya;
