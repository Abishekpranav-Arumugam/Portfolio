import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill in all fields.");
      return;
    }
  
    const emailParams = {
      to_name: "Ashmita",
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email, // User's email
    };
  
    try {
      const response = await emailjs.send(
        "service_4vhq917",    // Your EmailJS Service ID
        "template_nxb197c",   // Your EmailJS Template ID
        emailParams,
        "GoWGIqhNMwn8PcC_8"   // Your EmailJS Public Key
      );
  
      console.log("SUCCESS!", response);
      alert(`Thanks ${formData.name}, your message has been sent successfully!`);
  
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the email. Please try again later.");
    }
  };
  
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">Full Name</label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">Email address</label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">Message</label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a href="mailto:abishekpranav2004@gmail.com" className="personal-details">
                      <div className="detailsIcon"><FiAtSign /></div>
                      <p style={{ color: "#fbd9ad" }}>abishekpranav2004@gmail.com</p>
                    </a>
                    <a href="tel:+880 1603-550521" className="personal-details">
                      <div className="detailsIcon"><FiPhone /></div>
                      <p style={{ color: "#fbd9ad" }}>+91 8807765547</p>
                    </a>
                    <a href="https://maps.app.goo.gl/iUHJvPAhJXwJayo68" className="personal-details">
                      <div className="personal-details">
                        <div className="detailsIcon"><HiOutlineLocationMarker /></div>
                        <p style={{ color: "#fbd9ad" }}>
                          D/O 4/64 Maniyanoor(PO), Paramathi Vellur(TK), Namakkal(DT), Pin Code : 637-201.
                        </p>
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
