import react from "react";
import Logo from "../../assets/Logo.png";
import data from "./data";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare  } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import data1 from "./data1";

const Footer = () => {
  return (
    <footer>
      <div className="heander__main">
        <div className="heander_left">
          <div>
            <a href="/" className="footer__logo">
              <img src={Logo} alt="Logo" />
            </a>
            <p className="address">
              Lorem ipsum dolor sit <br />
              amet consectetur, adipisicin
            </p>
          </div>
          <div>
            <div className="links_company-main">
              <h2 className="links_company">Company</h2>
               <div className="short-link">
             <ul  className="main_links">
              {data.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
            <ul className="main_links">
              {data1.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
           </div>
            </div>
          
          </div>
        </div>
        {/* <div className="footer__add_img">
          <a href="/" className="footer1__logo">
            <img src={Logo} alt="Logo" />
          </a>
        </div> */}

        <div className="social_links">
          <div className="useful__links">
            <h2 className="links_company">Useful Links</h2>

            <ul className="main_links">
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
              <li><a href="/privacy--policy">Privacy Policy</a></li>
              <li><a href="/disclaimer">Disclaimer</a></li>
            </ul>
          </div>
          <div className="social_media">
            <h2 className="links_company">Connect with us</h2>
            <ul className="social_media-icon">
              <li><FaFacebook className="footbtn fb"/></li>
              <li><a href="https://www.instagram.com/sachin.kumawat4?igsh=MTZmdHJqM3M2cXpvZA==" target="_black"><FaInstagramSquare  className="footbtn ig"/></a></li>
              <li><FaYoutube className="footbtn yt "/></li>
              <li><FaSquareXTwitter className="footbtn tt"/></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
