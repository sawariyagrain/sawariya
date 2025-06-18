import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Video from '../../assets/Video.mp4'
import Main from '../../assets/Careers.png'
import './career.css'
import ThreeBoxes from "./ThreeBoxes/ThreeBoxes";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Career = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }),[]
  return (
   <div id="/career#career">
    <ScrollToHashElement/>
     <div >
      <Navbar></Navbar>

      <div className="about_head" data-aos="fade-up" >
        <div className="career__image">
          <img src={Main} alt="career__image" />
        </div>
        <h1 data-aos="fade-up">Crafting a Future with Values, Vision, and You.</h1>
        <p data-aos="fade-up">
          Employees at Sawariya Grain and Seeds Pvt. Ltd. are unique, and the
          company cares for You and Your families. As a relationship-based
          organization, Sawariya Group considers every employee as a unique
          individual with distinctive abilities. This is precisely why the Human
          Relations Department devotes most of its time cultivating these
          relationships.
          <br />
          <br />
          The objective of the company is to give every employee an equally
          tailor-made opportunity to master new skills, and contribute toward
          self-actualization. As for Sawariya Group, success is a result of the
          value-driven dedication of its employees. This is why the company
          considers it its responsibility to develop and mentor these employees
          to prepare them as future leaders.
          <br />
          <br />
          Sawariya Group stands by its claim that success is brought about by
          the employees’ integrity towards work, which is why the organization
          fully supports its people.
        </p>
      </div>
      <div className="about_head" data-aos="fade-up">
         <h1 data-aos="fade-up">Crafting a Future with Values, Vision, and You.</h1>
         <div className="header__image career_video ">
          <video
  className="career_video"
  
  
  loop
  playsInline
  controls
  controlsList="nodownload nofullscreen noremoteplayback"
  disablePictureInPicture
>
  <source src={Video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
      </div>

     <div className="three_box" data-aos="fade-up"> <ThreeBoxes></ThreeBoxes></div>

      <Footer></Footer>
    </div>
   </div>
  );
};

export default Career;
