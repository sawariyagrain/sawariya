import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./opportunities.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ScrollToHashElement from "../../ScrollToHashElement/ScrollToHashElement";

const Opportunities = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    resumeLink: "",
    background: [],
    applicationFor: [],
    department: [],
    preferredLocation: "",
    comments: "",
  });

  const [error, setError] = useState("");

  const options = {
    background: [
      "Student",
      "Farmer",
      "Researcher",
      "Experienced Professional",
      "Agri-Entrepreneur",
    ],
    applicationFor: [
      "Full-Time Job",
      "Distributor Opportunity",
      "Internship",
      "Training Program",
      "Farmer Support Program",
    ],
    departments: [
      "Offline - Field Sales",
      "Marketing",
      "Corporate Communication",
      "Farm Solutions",
      "Field Operations",
      "Unit / Plant Operations",
      "Logistics & Supply Chain",
      "Research & Development",
      "Admin / Back Office",
    ],
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    const current = formData[name];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFormData({ ...formData, [name]: updated });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isJobOrIntern =
      formData.applicationFor.includes("Full-Time Job") ||
      formData.applicationFor.includes("Internship");

    if (isJobOrIntern && !formData.resumeLink) {
      setError("Resume link is required for job or internship applications.");
      return;
    }

    setError("");

    emailjs
      .send(
        "service_e7dw233",
        "template_ymgredo",
        formData,
        "Vds8urzOTLTo6MJ74"
      )
      .then(() => {
        alert(
          "Thank you for exploring opportunities with us! 🙌. We’ll reach out to you if a suitable position matching your profile becomes available. 😊"
        );
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          resumeLink: "",
          background: [],
          applicationFor: [],
          department: [],
          preferredLocation: "",
          comments: "",
        });
      })
      .catch(() => {
        alert("Failed to submit. Try again later.");
      });
  };

  return (
    <div id="current">
        <div>
            <ScrollToHashElement/>
      <Navbar></Navbar>
      <div className="opportunities-form-container">
        <h2>Apply for Opportunities at Sawariya Grain and Seeds Pvt. Ltd.</h2>
        <p>
          Join our journey to transform agriculture. Fill the form below to
          apply for training, internships, distributor partnerships, or
          full-time roles.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />

          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
          />

          <label>Email ID (Gmail preferred)</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>Resume Link (PDF/DOC)</label>
          <input
            type="url"
            name="resumeLink"
            placeholder="https://drive.google.com/..."
            value={formData.resumeLink}
            onChange={handleChange}
          />

          <label>Your Background</label>
          <div className="checkbox-group">
            {options.background.map((bg) => (
              <label key={bg}>
                <input
                  type="checkbox"
                  name="background"
                  value={bg}
                  checked={formData.background.includes(bg)}
                  onChange={handleCheckboxChange}
                />
                {bg}
              </label>
            ))}
          </div>

          <label>What are you applying for?</label>
          <div className="checkbox-group">
            {options.applicationFor.map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  name="applicationFor"
                  value={item}
                  checked={formData.applicationFor.includes(item)}
                  onChange={handleCheckboxChange}
                />
                {item}
              </label>
            ))}
          </div>

          {formData.applicationFor.includes("Full-Time Job") && (
            <>
              <label>Select Preferred Department</label>
              <div className="checkbox-group">
                {options.departments.map((dep) => (
                  <label key={dep}>
                    <input
                      type="checkbox"
                      name="department"
                      value={dep}
                      checked={formData.department.includes(dep)}
                      onChange={handleCheckboxChange}
                    />
                    {dep}
                  </label>
                ))}
              </div>
            </>
          )}

          <label>Preferred Location (if any)</label>
          <input
            type="text"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
          />

          <label>Additional Comments (optional)</label>
          <textarea
            name="comments"
            rows="4"
            value={formData.comments}
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default Opportunities;
