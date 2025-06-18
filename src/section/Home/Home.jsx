import Main from "../../assets/Main.jpg";
import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Chairman from "../../assets/Chairman.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement";
import OurProducts from "./OurProducts/OurProducts";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }), []
  return (
    <header>
      <ScrollToHashElement />
      <Navbar></Navbar>
      <div className="header__image" data-aos="fade-up">
        <img src={Main} alt="Main_Image" />
      </div>
      <div class="chairman-desk">
        <div class="chairman-content">
          <div class="chairman-image" data-aos="fade-up">
            <img src={Chairman} alt="Chairman Image" />
            <p>
              <span>श्री भागूराम बोचलिया</span> <br /> चैयरमेन <br />सांवरिया ग्रेन एंड सीड्स प्राइवेट लिमिटेड
            </p>
          </div>
          <div class="chairman-text" data-aos="fade-up">
            <h2>Chairman’s Desk</h2>
            <p data-aos="fade-up">"एक साधारण जीवन में छुपा असाधारण योगदान"</p>
            {/* <br/> */}
            <p data-aos="fade-up">
              श्री भागूराम बोचलिया का जीवन निःस्वार्थ सेवा, पारिवारिक मूल्यों और कृषि के प्रति गहरे समर्पण की प्रेरणादायक कहानी है। आपने अपना सम्पूर्ण जीवन अपने पूजनीय बड़े भाई श्री पुष्कर सिंह बोचलिया को समर्पित कर दिया—जो आपके लिए केवल एक भाई नहीं, बल्कि मार्गदर्शक, प्रेरणा और विश्वास का स्तंभ थे।
              राजस्थान के छोटे से गाँव कंवरपुरा में वर्ष 1957 में जन्मे श्री भागूराम बोचलिया को बचपन से ही खेती से गहरा लगाव था। अपने बड़े भाई के साथ खेतों में काम करते हुए ही आपने जीवन की सच्ची साधना देखी। बाहरी दुनिया की चकाचौंध को त्यागकर, परिवार और खेती को ही अपना जीवन बना लिया। यही सरलता, निष्ठा और समर्पण आपके व्यक्तित्व की असली पहचान बनी।

              <br />
              <br />
              19 सितंबर 2024 को जब आपके पूज्य भाई का देहांत हुआ, तब यह केवल एक पारिवारिक क्षति नहीं थी—बल्कि एक युग का अंत था। लेकिन उस दुःख को संबल में बदलते हुए श्री भागूराम बोचलिया ने सांवरिया ग्रेन एंड सीड्स प्राइवेट लिमिटेड की नींव वर्ष 2025 में रखी—एक ऐसी कम्पनी जो उनके भाई के सपनों, आशीर्वाद और कृषि के प्रति दोनों भाइयों की निष्ठा का जीवंत प्रतीक है।
              आज, श्री भागूराम बोचलिया एक दूरदर्शी चेयरमैन के रूप में इस कम्पनी का संचालन कर रहे हैं। आपका उद्देश्य स्पष्ट है—किसानों के हितों की रक्षा, कृषि विकास को प्रोत्साहन और पारिवारिक मूल्यों की रक्षा। आपके मार्गदर्शन में हर कर्मचारी, हर किसान और हर सहयोगी गौरव महसूस करता है।
              आपकी सादगी में शक्ति है, और आपके नेतृत्व में विश्वास।
              सांवरिया ग्रेन एंड सीड्स केवल एक कंपनी नहीं, बल्कि एक भावना है—जो समर्पण, सेवा और संस्कारों से जन्मी है। यह उस प्रेम की विरासत है, जो दो भाइयों के बीच था—एक ऐसा प्रेम, जो अब हजारों किसानों के जीवन में आशा की किरण बनकर चमक रहा है
            </p>

            <button className="btn btn-primary" data-aos="fade-up">
              <a href="/leadership#chairman">Know More</a>
            </button>
          </div>

        </div>
      </div>
<OurProducts></OurProducts>

      <Footer></Footer>
    </header>
  );
};

export default Home;
