import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';
import './termsAndConditions.css'

const TandC = () => {
  return (

<div id='terms-conditions'>
    <Navbar></Navbar>
        <div>
             <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p className="effective-date">
        <strong>Effective Date:</strong> [Insert Date]
      </p>

      <p>
        Welcome to Sawariya Grain and Seeds Private Limited (“we,” “us,” or
        “our”). By accessing our website, purchasing our products, or engaging
        with our services, you agree to be bound by the following Terms and
        Conditions. Please read them carefully before using any of our platforms
        or doing business with us.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By visiting our website, placing an order, or interacting with our
        business in any form, you accept and agree to these Terms and
        Conditions. If you do not agree with any part of these terms, please
        refrain from using our services or website.
      </p>

      <h2>2. Products and Services</h2>
      <p>
        <li>Modify or discontinue any product or service without notice.</li>
        <li>Limit quantities or refuse service to anyone, at our discretion.</li>
        <li>Make changes to packaging, specifications, or pricing at any time.</li>
      </p>

      <h2>3. Orders and Payment</h2>
      <p>
        <li>Orders are subject to acceptance and confirmation.</li>
        <li>Prices are inclusive of applicable taxes and charges.</li>
        <li>Late payments may incur penalties or cancellation.</li>
      </p>

      <h2>4. Shipping and Delivery</h2>
      <p>
        We aim to deliver goods on time, but are not responsible for delays due
        to third-party carriers, incorrect shipping information, or external
        disruptions.
      </p>

      <h2>5. Returns and Refunds</h2>
      <p>
        <li>Report damaged/defective goods within 2 days.</li>
        <li>Items must be unused and returned in original packaging.</li>
        <li>Refunds processed within 15 working days if approved.</li>
      </p>

      <h2>6. User Responsibilities</h2>
      <p>
        <li>Provide accurate information when using our services.</li>
        <li>No unlawful or unauthorized system access attempts.</li>
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All content, logos, product names, and designs are owned by Sawariya
        Grain and Seeds Private Limited. Reproduction or misuse without written
        permission is prohibited.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        We are not liable for any indirect, incidental, or consequential damages
        arising from your use of our services or website. Our total liability is
        limited to the amount paid for the product/service.
      </p>

      <h2>9. Force Majeure</h2>
      <p>
        We are not responsible for delays or failures due to events beyond our
        control including natural disasters, strikes, or regulatory changes.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We may revise these Terms at any time. Updates become effective
        immediately upon being posted to our website.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Rajasthan, India. Any disputes
        shall be subject to the jurisdiction of the courts in Jaipur only.
      </p>

      <h2>12. Contact Us</h2>
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
  )
}

export default TandC;