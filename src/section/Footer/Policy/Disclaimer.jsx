import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer";

const Disclaimer = () => {
  return (
    <div id="disclaimer">
      <Navbar></Navbar>

      <div>
        <div>
          <div className="terms-container">
            <h1>Disclaimer</h1>

            <p>
              The information provided by Sawariya Grain and Seeds Private
              Limited (“Company,” “we,” “us,” or “our”) on our official website
              and across all associated digital and physical communication
              platforms is intended solely for general informational purposes.
              While we endeavor to present accurate and up-to-date information,
              all content is shared in good faith. However, we make no
              representation or warranty of any kind—express or
              implied—regarding the accuracy, adequacy, reliability, validity,
              availability, or completeness of any information on our platforms.
            </p>

            <h2>No Professional Advice</h2>
            <p>
              All content provided through our website, brochures, digital
              materials, and communications does not constitute professional
              advice of any nature, including but not limited to agricultural,
              technical, legal, financial, or business consultancy. Any reliance
              you place on such information is strictly at your own risk. We
              strongly advise users to consult with qualified professionals or
              experts in the relevant field before making any decisions or
              taking action based on the information provided by us.
            </p>

            <h2>Product Information and Specifications</h2>
            <p>
              While we make every effort to ensure that the descriptions,
              specifications, and prices of our seeds, grains, agricultural
              products, and related services are accurate and current, such
              information may be subject to change without prior notice. We do
              not warrant that product details are free from typographical
              errors, inaccuracies, or omissions. Availability of products may
              vary by region, season, and supply status, and we reserve the
              right to modify or discontinue any product or service at our
              discretion.
            </p>

            <h2>Third-Party Links and Content</h2>
            <p>
              Our website and communication platforms may include links to
              external websites, content, or resources operated by third
              parties. These links are provided solely for your convenience. We
              do not control, monitor, or guarantee the accuracy, relevance, or
              completeness of content on third-party websites. The inclusion of
              any third-party link does not imply our endorsement or
              affiliation. We are not responsible for any loss or damage that
              may arise from your use of third-party content.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Sawariya Grain
              and Seeds Private Limited shall not be held liable for any direct,
              indirect, incidental, consequential, special, exemplary, or
              punitive damages of any kind, including but not limited to loss of
              profits, data, or goodwill, arising out of or in connection with
              the use of—or inability to use—our website, content, or products,
              even if we have been advised of the possibility of such damages.
            </p>

            <h2>Amendments to This Disclaimer</h2>
            <p>
              We reserve the right to update, revise, or amend this disclaimer
              at any time and without prior notification. Your continued use of
              our website or services following the posting of any changes shall
              constitute your acknowledgment and acceptance of those
              modifications.
            </p>
            <h2>12. Contact Us</h2>
            <p>If you have any questions, concerns, or feedback regarding this disclaimer or any aspect of our content, please feel free to contact us using the information below:</p>
            <p>
              <strong>
              Sawariya Grain and Seeds Private Limited
              </strong> 
              <br />
              📍 [Insert Company Address]
              <br />
              📧 Email: [Insert Email Address]
              <br />
              📞 Phone: [Insert Phone Number]
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Disclaimer;
