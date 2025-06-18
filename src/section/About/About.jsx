import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./about.css";
import About_Img from "../../assets/About.png";
import Logo from "../../assets/Logo.png";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }), []
  return (
    <div>
      <ScrollToHashElement />
      <Navbar></Navbar>

      <div>
        <div className="about_head" data-aos="fade-up">
          <div className="about__image">
            <img src={About_Img} alt="About_Image" />
          </div>
          <div data-aos="fade-up">
            <h1 data-aos="fade-up">About Us</h1>
            <p data-aos="fade-up">
              At Sawariya Seed and Grains Private Limited, we are more than just
              an agro-based enterprise—we are the embodiment of a heartfelt dream,
              born from the soil and nurtured with values of dedication,
              simplicity, and service. Founded in loving memory of our guiding
              light, Late Shri Pushkar Singh Bochaliya, the company stands as a
              tribute to the shared vision of two brothers whose hearts beat for
              the farmer and the field.
              <br />
              <br data-aos="fade-up" />
              Every seed we process, every grain we package, and every product we
              deliver carries with it a legacy of trust, integrity, and
              compassion. Our journey began with a single thought—to uplift the
              lives of farmers and build a bridge between their hard work and the
              markets that need them.
              <br />
              <br data-aos="fade-up" />
              Grounded in agricultural expertise and driven by a deep emotional
              connection to the land, we specialize in the processing, packaging,
              and distribution of high-quality seeds, grains, and value-added
              agro-products. But beyond commerce, our mission is personal—to honor
              the spirit of our roots by empowering rural communities and
              strengthening food systems with transparency and innovation.
              <br />
              <br data-aos="fade-up" />
              Our approach is guided by farmer-first values and a long-term
              commitment to sustainability. We believe that true progress lies in
              preserving nature while promoting prosperity. Under the visionary
              leadership of Shri Bhagooram Bochaliya, our organization has grown
              into a symbol of trust and dedication in the agricultural world.
              <br />
              <br data-aos="fade-up" />
              Sawariya Seed and Grains is not just a company—it is a promise. A
              promise to serve with heart, to grow with purpose, and to forever
              remember where we came from.
            </p>
          </div>
        </div>

        <div className="missvisbgi missviss-bg">
          <div className="missvis" data-aos="fade-up">
            <div>
              <h1 data-aos="fade-up">Mission</h1>
              <p data-aos="fade-up">
                To provide farmers with access to high-quality seeds and
                agro-products. To build transparent supply chains from farm to
                market. To create sustainable livelihoods in rural communities.
                To innovate while respecting nature’s balance.
              </p>
            </div>
            {/* <div>  <a href="/" className='nav__logo'  >
                    <img src={Logo} alt="Logo" />
                </a></div> */}
            <div>
              <h1 data-aos="fade-up">Vision</h1>
              <p data-aos="fade-up">
                To become a trusted name in the agricultural world by connecting
                the roots of tradition with the wings of innovation—uplifting
                farmers, enriching soil, and feeding generations with purity and
                purpose.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="about_head" data-aos="fade-up">
            <h1>Our Core Values</h1>
          </div>
          <div class="values-section" data-aos="fade-up">
            <div class="value-box">
              <h3>Integrity</h3>
              <p>Every grain we deliver is backed by honesty and fairness.</p>
            </div>
            <div class="value-box">
              <h3>Empathy</h3>
              <p>We listen, understand, and grow with the farming community.</p>
            </div>
            <div class="value-box">
              <h3>Quality</h3>
              <p>
                From seed selection to final packaging, quality is
                non-negotiable.
              </p>
            </div>
            <div class="value-box">
              <h3>Sustainability</h3>
              <p>Farming with care for both land and future.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="about_head" data-aos="fade-up">
            <h1>Our Strengths</h1>
          </div>
          <div class="values-section" data-aos="fade-up">
            <div class="value-box">
              <h3>Farmer-Centric Approach</h3>
              <p>Deep relationships with grassroots communities.</p>
            </div>
            <div class="value-box" >
              <h3>Modern Infrastructure</h3>
              <p>
                Advanced processing and packaging units ensuring purity and
                efficiency.
              </p>
            </div>
            <div class="value-box">
              <h3>Experienced Leadership</h3>
              <p>

                Decades of expertise under the guidance of Shri Bhagooram
                Bochaliya.
              </p>
            </div>
            <div class="value-box">
              <h3>Innovative Practices</h3>
              <p>
                Adoption of sustainable and smart agricultural technologies.
              </p>
            </div>
            <div class="value-box">
              <h3>Ethical Business Model</h3>
              <p>Transparent pricing and fair trade practices.</p>
            </div>
          </div>
        </div>
        <section class="highlight-section">
          <div class="highlight-box" data-aos="fade-right">
            <h2>Our Impact</h2>
            <p>
              Empowered over <strong>5,000+ farmers</strong> across multiple
              states.
              <br />
              Delivered over <strong>1,000+ tons</strong> of certified seeds and
              grains annually.
              <br />
              Created employment opportunities in rural areas.
              <br />
              Promoted organic and regenerative farming techniques.
            </p>
          </div>

          <div class="highlight-box" data-aos="fade-right">
            <h2>Why Choose Us?</h2>
            <p>
              Trusted by farmers, respected by partners.
              <br />
              Consistent product quality and timely delivery.
              <br />
              Personalized service with a human touch.
              <br />A legacy-driven company with a heart for the soil.
            </p>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default About;
