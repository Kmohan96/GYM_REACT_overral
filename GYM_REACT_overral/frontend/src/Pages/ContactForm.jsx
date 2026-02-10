import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/ContactForm.css";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ge2oq38",
        "template_kbfgv0q",
        {
          user_email: email,
          user_message: message,
        },
        "8UwFK-ScFgNdU0Tqv"
      )
      .then(() => {
        alert("Thanks ra! Message sent successfully 😊");
        setEmail("");
        setMessage("");
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send message");
        setLoading(false);
      });
  };

  return (
    <div className="contact-page">
      {/* LEFT SECTION */}
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>
          Hyderabad lo unnam 😊  
          Gym, trainer, diet & fitness related queries anni ikkada pampandi.
        </p>

        <div className="contact-info-item">
          <span>📍</span>
          <p>Hyderabad, Telangana</p>
        </div>

        <div className="contact-info-item">
          <span>📧</span>
          <p>support@gymtracker.com</p>
        </div>

        <div className="contact-info-item">
          <span>📞</span>
          <p>+91 6309383826</p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="contact-right">
        <h2>Send a Message</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;