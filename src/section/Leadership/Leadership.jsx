import react from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Main from "../../assets/Leadership.png";
import "./leadership.css";
import Chairman from "../../assets/Chairman.jpg";
import MD from "../../assets/md.jpg";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement";
import Testimonials from "./testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Leadership = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }),
    [];
  return (
    <div>
      <ScrollToHashElement />
      <Navbar></Navbar>

      <div className="leadership_image" data-aos="fade-up">
        <img src={Main} alt="Leadership_Image" />
      </div>
      {/*<=========================================> */}
      <div id="chairman">
        <div>
          <div class="chairman-desk">
            <div class="chairman-content" data-aos="fade-up">
              <div class="chairam-career chairman-image" data-aos="fade-up">
                <img src={Chairman} alt="Chairman Image" />
                <p data-aos="fade-up">
                  <span>Mr. B.R. Bochlya</span> <br /> Chairman <br /> Sawariya
                  Grain and Seeds Pvt. Ltd.
                </p>
              </div>
              <div class="chairman-text" data-aos="fade-up">
                <a>
                  <h2 data-aos="fade-up">Chairman’s Desk</h2>
                </a>
                <p data-aos="fade-up">
                  "An extraordinary contribution hidden in an ordinary life"
                </p>
                <p data-aos="fade-up">
                  At Sanwariya Grain & Seeds Pvt. Ltd., we are not just building
                  a company—we are nurturing a legacy of trust, values, and
                  dedication to farming. Inspired by my late brother’s dreams,
                  this journey is a tribute to our shared vision for empowering
                  farmers. Our roots lie in simplicity, our strength in service,
                  and our future in sustainable agriculture. Every grain we
                  process carries the essence of devotion and integrity.
                  Together, we grow not just crops, but hope.
                </p>
                <p data-aos="fade-up">
                  <span>Mr. B.R. Bochlya</span> <br />
                  Chairman <br />
                  Sawariya Grain and Seeds Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------- */}
      <div class="md-desk chairman-desk">
        <div class="chairman-content" data-aos="fade-up">
          <div class="chairman-text" data-aos="fade-up">
            <h2 data-aos="fade-up">Managing Director</h2>
            <p data-aos="fade-up">
              "Where vision meets soil, roots of progress grow."
            </p>
            <p data-aos="fade-up">
              At the heart of agriculture lies a legacy we proudly uphold—one of
              trust, innovation, and resilience. With over six years of
              dedicated service, we see every seed as a promise—to our farmers,
              our consumers, and the generations to come.
              <br />
              Our mission is to create sustainable value across the entire
              agricultural ecosystem—from pioneering seed development and
              efficient grain processing to responsible, ethical marketing.
              Driven by research, strengthened by modern infrastructure, and
              inspired by a passionate team, we strive to empower farmers with
              climate-resilient seeds, progressive farming practices, and
              reliable market access.
              <br />
              Integrity is the cornerstone of everything we do at Sawariya
              Seeds. As we move forward, let us continue to sow trust, harvest
              progress, and cultivate a future rooted in
              meaningful transformation.
            </p>
            <p data-aos="fade-up">
              <span>Mr. Rajesh Choudhary</span> <br />
              Managing Director <br />
              Sawariya Grain and Seeds Pvt. Ltd.
            </p>
          </div>
          <div class="md-career chairman-image">
            <img src={MD} alt="MD Image" />
            <p>
              <span>Mr. Rajesh Choudhary</span> <br /> Managing Director <br />{" "}
              Sawariya Grain and Seeds Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div></div>
      </div>
      <Testimonials></Testimonials>

      <Footer></Footer>
    </div>
  );
};
export default Leadership;
