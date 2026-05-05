import "./plan.css";
import { motion } from "framer-motion";

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/>
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/>
  </svg>
);

const BalanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8Z"/>
    <path d="M20 8v8"/>
    <path d="M20 12h2"/>
    <path d="M22 10v4"/>
  </svg>
);

const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 Z"/>
  </svg>
);

const GearsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2 2 2 0 0 1-2 2 2 2 0 0 0-2 2 2 2 0 0 1-2 2 2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 0-2-2Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const plansData = [
  {
    tag: "STARTER",
    name: "Basic",
    price: "$5–20",
    description: "Perfect for small landing pages and simple static websites.",
    icon: <RocketIcon />,
    features: [
      { text: "Up to 3–6 Pages", included: true },
      { text: "Responsive Design", included: true },
      { text: "Contact Form", included: true },
      { text: "Database Integration", included: false },
      { text: "Admin Dashboard", included: false },
      { text: "API Development", included: false },
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    tag: "POPULAR",
    name: "Balance",
    price: "$40–70",
    description: "Ideal for business websites with database and user management.",
    icon: <BalanceIcon />,
    features: [
      { text: "Up to 10 Pages", included: true },
      { text: "Everything in Basic", included: true },
      { text: "Database Integration", included: true },
      { text: "User Authentication", included: true },
      { text: "API Development", included: true },
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    tag: "BEST VALUE",
    name: "PRO",
    price: "$80–100",
    description: "Full front-end solution with API integration, dashboard, and advanced UI logic.",
    icon: <LightningIcon />,
    features: [
      { text: "Everything in Balance", included: true },
      { text: "Unlimited Pages", included: true },
      { text: "RESTful API Integration", included: true },
      { text: "Admin Dashboard UI", included: true },
      { text: "Performance Optimization", included: true },
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    tag: "ENTERPRISE",
    name: "Let's Talk",
    price: "Flexible",
    description: "Tailored solutions for complex front-end projects with unique requirements.",
    icon: <GearsIcon />,
    features: [
      { text: "Everything in PRO", included: true },
      { text: "Custom Architecture", included: true },
      { text: "Design System", included: true },
      { text: "Priority Support", included: true },
      { text: "Dedicated Maintenance", included: true },
    ],
    buttonText: "Contact Me",
    popular: false
  }
];

const Plan = () => {
  return (
    <section id="plan" className="plan-section">
      <div className="plan-header">
        <span className="section-label">-- TRANSPARENT PRICING</span>
        <h2 className="plan-title">Choose Your <i>Plan</i></h2>
        <p className="plan-subtitle">
          No hidden fees. Every plan is scoped to deliver real value — from a 
          simple landing page to a full front-end experience.
        </p>
      </div>

      <div className="plan-note">
        <InfoIcon />
        <p>
          All plans include source code delivery, clean architecture, and a 
          post-launch review session. Prices are estimates — final cost depends 
          on project scope.
        </p>
      </div>

      <div className="plan-grid">
        {plansData.map((plan, index) => (
          <motion.div
            key={index}
            className={`plan-card ${plan.popular ? "popular" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="card-top">
              <span className="plan-tag">{plan.tag}</span>
              <div className="plan-icon">
                {plan.icon}
              </div>
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="price">{plan.price.replace('$', '')}</span>
                {plan.price !== "Flexible" && <span className="period">/ project</span>}
              </div>
              <p className="plan-desc">{plan.description}</p>
            </div>

            <div className="divider-sm" />

            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i} className={!feature.included ? "excluded" : ""}>
                  <span className="feat-icon">
                    {feature.included ? <CheckIcon /> : <CrossIcon />}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <a href="#contact" className={`plan-btn ${plan.popular ? "primary" : "outline"}`}>
              {plan.buttonText}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="plan-footer">
        <div className="footer-card">
          <h3 className="footer-title">Not Sure Which <i>Plan</i> Fits?</h3>
          <p className="footer-desc">
            Reach out and we'll figure out the best scope and budget 
            together. No commitment needed.
          </p>
          <div className="footer-actions">
            <a href="#contact" className="plan-btn primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
