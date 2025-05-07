import React, { useEffect, useRef, useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Access to 50+ videos",
        "Community support",
        "Basic resources"
      ],
      accentColor: "#B782FC"
    },
    {
      name: "Pro",
      price: "$9.99",
      features: [
        "Access to 200+ videos",
        "Priority support",
        "Downloadable resources",
        "Weekly webinars"
      ],
      accentColor: "#FFD166",
      popular: true
    },
    {
      name: "Premium",
      price: "$19.99",
      features: [
        "Unlimited access",
        "24/7 priority support",
        "All downloadable resources",
        "Personal mentor",
        "Exclusive content"
      ],
      accentColor: "#06D6A0"
    }
  ];

  const premiumCardRef = useRef(null);
  const [premiumCardHeight, setPremiumCardHeight] = useState(null);

  useEffect(() => {
    if (premiumCardRef.current) {
      setPremiumCardHeight(premiumCardRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Simple, transparent pricing</h1>
        <p>Choose the plan that fits your learning journey</p>
      </div>
      
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            style={{ 
              "--accent-color": plan.accentColor,
              height: (plan.name === "Premium" || premiumCardHeight === null) ? "auto" : `${premiumCardHeight}px`
            }}
            ref={plan.name === "Premium" ? premiumCardRef : null}  // Set ref only on Premium card
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            
            <div className="card-content">
              <h3>{plan.name}</h3>
              <h2>{plan.price}</h2>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <button className="pricing-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
