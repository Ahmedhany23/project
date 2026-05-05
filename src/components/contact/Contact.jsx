import "./contact.css";
import Lottie from "lottie-react";
import done from "../../animation/done.json";
import { useForm, ValidationError } from "@formspree/react";
import { FaWhatsapp } from "react-icons/fa";

const MapPinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbnbzng");

  return (
    <section id="contact" className="contact-us">
      <div className="contact-left">
        <h1 className="title">
          <span className="icon-envelope"> </span>
          Contact Me
        </h1>
        <p className="sub-title">
          Have a project in mind or want to discuss the latest in tech? Feel
          free to reach out.
        </p>

        {/* Contact Info Details */}
        <div className="contact-details">
          <div className="detail-item">
            <span className="detail-icon">
              <MapPinIcon />
            </span>
            <span>Giza, Egypt</span>
          </div>
          <a href="mailto:ahmedhany.22@hotmail.com" className="detail-item">
            <span className="detail-icon">
              <MailIcon />
            </span>
            <span>ahmedhany.22@hotmail.com</span>
          </a>
          <div className="detail-item">
            <span className="detail-icon">
              <PhoneIcon />
            </span>
            <span>+20 120 546 5494</span>
          </div>
          <a
            href="https://wa.me/201205465494"
            target="_blank"
            rel="noreferrer"
            className="detail-item"
          >
            <span className="detail-icon">
              <FaWhatsapp />
            </span>
            <span>WhatsApp</span>
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address: </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="hello@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message: </label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Tell me about your project..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Sending..." : "Send Message"}
            <span
              className="icon-paper-plane"
              style={{ marginLeft: "10px" }}
            ></span>
          </button>

          {state.succeeded && (
            <p
              className="flex success"
              style={{ marginTop: "24px", fontSize: "16px" }}
            >
              <Lottie
                loop={false}
                style={{ height: 77 }}
                animationData={done}
              />
              Your message has been sent successfully ♥
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
