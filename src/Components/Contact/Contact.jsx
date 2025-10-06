import React, { useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const params = new URLSearchParams(window.location.search);
  const subjectFromURL = params.get("subject") || "";

  useEffect(() => {
    window.scrollTo(0, 0);
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Home EV Charger",
    zip: "",
    subject: subjectFromURL,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const formEl = e.currentTarget;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      toast.error("Please fill all required fields.", {
        toastId: "form-invalid",
      });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      const msg = "Missing EmailJS keys. Check .env.local values.";
      setErrorMsg(msg);
      toast.error(msg, { toastId: "emailjs-keys-missing" });
      return;
    }

    setLoading(true);
    setStatus("");
    setErrorMsg("");
    const toastId = toast.loading("Sending message…");

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      service: formData.service,
      zip: formData.zip,
      subject: formData.subject,
      to_name: "PlugIQ",
      message: formData.message,
    };

    try {
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      console.log("EmailJS OK:", res);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "Home EV Charger",
        zip: "",
        subject: "",
        message: "",
      });
      setStatus("success");
      toast.update(toastId, {
        render: "Thanks! Please check your email.",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      const msg =
        err?.text ||
        err?.message ||
        "Email failed. Check IDs, allowed origin, and template variables.";
      setStatus("error");
      setErrorMsg(msg);
      toast.update(toastId, {
        render: msg,
        type: "error",
        isLoading: false,
        autoClose: 3500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact" id="contact" aria-label="Contact PlugIQ">
      <div className="contact-inner">
        <div className="contact-copy">
          <span className="contact-eyebrow">Contact</span>
          <h2 className="contact-title">Get a Free Quote</h2>
          <p className="contact-subtitle">
            Tell us about your panel, parking setup, and preferred charger.
            We’ll confirm pricing and an install date.
          </p>

          <figure className="contact-illustration">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="EV charging station at night"
              loading="lazy"
              decoding="async"
            />
          </figure>

          {/* <ul className="contact-list">
            <li>Licensed and insured</li>
            <li>Residential and commercial</li>
          </ul> */}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row grid-2">
            <div>
              <label htmlFor="firstName">
                First Name<span className="req">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">
                Last Name<span className="req">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row grid-2">
            <div>
              <label htmlFor="email">
                Email<span className="req">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row grid-2">
            <div>
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Home EV Charger</option>
                <option>Commercial Stations</option>
                <option>Panel Upgrade</option>
                <option>Maintenance</option>
              </select>
            </div>
            <div>
              <label htmlFor="zip">
                ZIP Code<span className="req">*</span>
              </label>
              <input
                id="zip"
                name="zip"
                inputMode="numeric"
                pattern="[0-9]{5}"
                value={formData.zip}
                onChange={handleChange}
                required
                title="Enter a 5-digit ZIP code"
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">
              Message<span className="req">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn--primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          <p className={`form-status ${status}`} aria-live="polite">
            {status === "success"
              ? "Thanks! Please check your email."
              : status === "error"
              ? errorMsg
              : ""}
          </p>
        </form>
      </div>
    </div>
  );
}
