import "./testimonials.css";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "Ahmed delivered a pixel-perfect landing page that exceeded our expectations. His attention to detail in animations and responsive design is truly world-class.",
    avatar: "/Landing2.png" // Using existing image as placeholder
  },
  {
    name: "Mark Thompson",
    role: "Product Manager",
    content: "The dashboard Ahmed built for us is both beautiful and highly functional. He has a deep understanding of React and state management. Highly recommended!",
    avatar: "/Landing4.png"
  },
  {
    name: "Elena Rodriguez",
    role: "Startup Founder",
    content: "Working with Ahmed was a breeze. He took our rough concept and turned it into a sleek, modern web application. His speed and communication are top-notch.",
    avatar: "/Landing10.png"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header">
        <span className="section-label">Testimonials</span>
        <h2 className="testimonials-title">What <i>Clients</i> Say</h2>
      </div>

    {/*   <div className="testimonials-grid" >
        {testimonialsData.map((item, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="quote-icon">“</div>
            <p className="testimonial-content">{item.content}</p>
            <div className="testimonial-footer">
              <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
              <div className="testimonial-info">
                <h4 className="testimonial-name">{item.name}</h4>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
    </section>
  );
};

export default Testimonials;
