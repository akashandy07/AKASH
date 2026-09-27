import { useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setSent(true);
    alert("See You Soon")
  };

  return (
    <section id="contact">
      <div className="contact-box reveal" ref={ref}>
        <h2>Let's Build Something Great</h2>
        <p>Have a project, opportunity, or frontend role in mind? Let's connect.</p>
        <div className="contact-links">
          <a href="">Email</a>
          <a href="https://www.linkedin.com/in/akash-a-a62756244/">LinkedIn</a>
          <a href="https://github.com/akashandy07/">GitHub</a>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn primary">{sent ? 'Sent ✓' : 'Send Message'}</button>
        </form>
      </div>
    </section>
  );
}
