import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer";

const PrivacyPolicy = () => {
  return (
    <div id="privacy--policy">
      <Navbar></Navbar>
      <div>
        <div className="terms-container">
          <h1>Privacy Policy</h1>
          <p className="effective-date">
            <strong>Effective Date:</strong> [Insert Date]
          </p>

          <p>
            Sawariya Grain and Seeds Private Limited ("Company", "we", "our", or
            "us") is committed to protecting the privacy and security of your
            personal and business information. This Privacy Policy is prepared
            in accordance with the Information Technology Act, 2000 and its
            applicable rules, and it explains how we collect, use, disclose, and
            safeguard your data when you visit or interact with our website:
            [Insert Website URL].
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            <li>We may collect the following types of information:</li>
            <li>
              Personal Information: Name, email address, phone number, company
              name, and any other details you provide via contact forms or
              inquiries.
            </li>
            <li>
              Usage Data: Information on how you access and use the website,
              such as your IP address, browser type, pages visited, and time
              spent on the site.
            </li>
            <li>
              Cookies and Tracking Technologies: To enhance your browsing
              experience, we may use cookies and similar tools.
            </li>
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            <li>We use the collected information to:</li>
            <li>Respond to your inquiries or requests.</li>
            <li>Improve our website and services.</li>
            <li>
              Send you updates, offers, or other communications (only if you
              have opted in).
            </li>
            <li>Ensure website security and prevent fraud.</li>
          </p>

          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information. We may
            share your data with trusted third-party service providers to help
            us operate our website and conduct business, under strict
            confidentiality agreements. We may also disclose information if
            required by law or to protect our legal rights.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data against unauthorized access, alteration, or loss.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            <li>You have the right to:</li>
            <li>Access, update, or delete your personal information.</li>
            <li>
              Withdraw consent at any time (for example, to stop receiving
              marketing emails).
            </li>
            <li>Contact us for any concerns related to your privacy.</li>
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of those sites.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
          </p>
          <h2>8. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:
</p>
          <p>
            <strong>Sawariya Grain and Seeds Private Limited</strong>
            <br />
            📍 [Insert Company Address]
            <br />
            📧 Email: [Insert Email Address]
            <br />
            📞 Phone: [Insert Phone Number]
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
