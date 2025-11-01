import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team_code: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        category: checked ? value : "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = "service_67w000p";
    const templateId = "template_mblc4ep";
    const publicKey = "EpDJkn6PmeF5jpZzg";

    // Sesuaikan variabel dengan template EmailJS kamu!
    const templateParams = {
      name: formData.name,
      email: formData.email,
      team_code: formData.team_code,
      category: formData.category,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          team_code: "",
          category: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setStatus("failed");
      });
  };

  return (
    <main>
      <div className="title">
        <h1>Get In Touch!</h1>
        <div className="text-sub">
          <p>
            Got any Questions about the team? We're here to help. Chat to our
            friendly team 24/7.
          </p>
        </div>
      </div>

      <div className="page-container">
        {/* Side Info */}
        <div className="side-content">
          <div className="Via-chat">
            <b>Speak to our friendly team via chat.</b>
            <div className="via-svg-a">
              {/* WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0..." />
              </svg>
              <a
                href="https://wa.me/6287874724805"
                target="_blank"
                rel="noreferrer"
              >
                Message us on WhatsApp
              </a>

              {/* Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703..." />
              </svg>
              <a
                href="https://www.instagram.com/go2steam/"
                target="_blank"
                rel="noreferrer"
              >
                Message us on Instagram
              </a>
            </div>
          </div>

          <div className="call-us">
            <b>Call Us</b>
            <p>Call our friendly team Mon–Fri from 8am to 2pm WIB</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678..." />
            </svg>
            <a href="tel:+6287874724805">+62 878-7472-4805</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="left-side">
          <h1>Chat With Us</h1>
          <form onSubmit={handleSubmit} className="contact-content-inputs">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Company Name / Team Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <span>Team Code</span>
            <input
              type="text"
              name="team_code"
              maxLength="6"
              placeholder="#21575"
              value={formData.team_code}
              onChange={handleChange}
            />

            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="example@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <span>Message</span>
            <textarea
              name="message"
              placeholder="Leave a message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="checkbox-content">
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="Robotics Team"
                  checked={formData.category === "Robotics Team"}
                  onChange={handleChange}
                />{" "}
                Robotics Team
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="Company"
                  checked={formData.category === "Company"}
                  onChange={handleChange}
                />{" "}
                Company
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="School"
                  checked={formData.category === "School"}
                  onChange={handleChange}
                />{" "}
                School
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="Other"
                  checked={formData.category === "Other"}
                  onChange={handleChange}
                />{" "}
                Other
              </label>
            </div>

            <div className="send-button">
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status === "success" && (
              <p className="success-text">✅ Message sent successfully!</p>
            )}
            {status === "failed" && (
              <p className="error-text">
                ❌ Failed to send message. Check your EmailJS setup.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* MAPS */}
      <div className="visit-us">
        <h2>Find Us</h2>
        <iframe
          title="Go2Steam Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.80804372968!2d110.464758575893!3d-7.703737676305473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ddf14ace605%3A0xf68812bdb4b779b5!2sMadrasah%20Internasional%20Technonatura%20Jogja!5e0!3m2!1sid!2sid!4v1761014737610!5m2!1sid!2sid"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default Contact;
