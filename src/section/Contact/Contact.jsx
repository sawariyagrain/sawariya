import Footer from "../Footer/Footer";
import react from "react";
import Navbar from "../Navbar/Navbar";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaSquarePhone  } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Main from "../../assets/Contact.png";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }),[]
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5yoqcei", "template_2mwz2pp", form.current, {
        publicKey: "Vds8urzOTLTo6MJ74",
      })
      .then(
        () => {
          alert("Thanks for reaching out! 🙌");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="contact__image" data-aos="fade-up">
        <img src={Main} alt="Contact_Image" />
      </div>
      <div className="Contact" data-aos="fade-up">
        <div className="contleft" data-aos="fade-up">
          <div>
            <h2 className="off" >Office</h2>

            <span className="spaan">
              <FaSquarePhone  className="btnn" />
              Phone
            </span>

            <p className="cont_num">
              <a href="tel:+91 9783838284">9783838284</a>
              <br />
              <a href="mailto: kmtsachin04@hmail.com ">kmtsachin04@gmail.com</a>
            </p>

            <span className="spaan">
              <FaHome className="btnn" />
              Address
            </span>
            <p className="cont_num">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Non, eos!
            </p>
          </div>
        </div>

        <div className="contright" data-aos="fade-up">
          <h2 className="quest">Any Questions? Send us a message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="7"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="contfoot">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
