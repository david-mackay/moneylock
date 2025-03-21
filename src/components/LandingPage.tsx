"use client";

import React, { useState } from 'react';
import { MoneyLockHero } from './ui/background-paths';
import { FaqAccordion } from './ui/faq-chat-accordion';
import faqData from '@/data/faqData';
// SVG Icons as components - can be replaced with your

const LandingPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="landing-container">

      <MoneyLockHero title="Stripe for Crypto" />
      <FaqAccordion data={faqData} />

      {/* Benefits Section */}
      <div id="benefits" className="benefits-section">
        <h2 className="section-title">Why Merchants Choose MoneyLock</h2>

        {/* No Chargebacks */}
        <div className="benefit-item">
          <div className="benefit-content">=
            <h3 className="benefit-title">No Fraudulent Chargebacks</h3>
            <p className="benefit-description">
              Once paid, always paid. Say goodbye to disputed charges and fraudulent chargebacks.
              Our blockchain verification provides definitive proof of payment every time.
            </p>
          </div>
          <div className="benefit-visual">
            {/* Placeholder for visualization */}
            <div className="visual-placeholder">Chargeback Protection Visualization</div>
          </div>
        </div>

        {/* Global Access */}
        <div className="benefit-item">
          <div className="benefit-visual">
            {/* Placeholder for visualization */}
            <div className="visual-placeholder">Global Access Visualization</div>
          </div>
          <div className="benefit-content">
            <h3 className="benefit-title">Global Access</h3>
            <p className="benefit-description">
              Accept payments from anywhere, instantly. No currency conversion fees, no international processing delays.
              Open your business to the entire world without barriers.
            </p>
          </div>
        </div>

        {/* Simple Integration */}
        <div className="benefit-item">
          <div className="benefit-content">
            <h3 className="benefit-title">Simple Integration</h3>
            <p className="benefit-description">
              One code snippet. That's it. Integrate in minutes, not weeks.
              As easy as adding Google Analytics to your site.
            </p>
          </div>
          <div className="benefit-visual">
            {/* Code example */}
            <pre className="code-example">
              <code>{`import { MoneyLock } from '@moneylock/react';
  
// Add to your checkout
<MoneyLock 
  apiKey="YOUR_API_KEY"
  amount={cart.total}
  onSuccess={handleSuccess}
/>`}</code>
            </pre>
          </div>
        </div>

        {/* Own Your Customer Relationship */}
        <div className="benefit-item">
          <div className="benefit-visual">
            {/* Placeholder for visualization */}
            <div className="visual-placeholder">Customer Relationship Visualization</div>
          </div>
          <div className="benefit-content">
            <h3 className="benefit-title">Own Your Customer Relationship</h3>
            <p className="benefit-description">
              Direct connection with your customers. No intermediaries dictating terms or taking control.
              You build the relationship, we just facilitate the payment.
            </p>
          </div>
        </div>

        {/* Future-Proof Your Business */}
        <div className="benefit-item">
          <div className="benefit-content">
            <h3 className="benefit-title">Future-Proof Your Business</h3>
            <p className="benefit-description">
              Stay ahead of the curve with next-generation payment technology that's becoming the new standard.
              Position your business at the forefront of financial innovation.
            </p>
          </div>
          <div className="benefit-visual">
            {/* Placeholder for visualization */}
            <div className="visual-placeholder">Future-Proof Visualization</div>
          </div>
        </div>
      </div>

      {/* Call to Action - Email Signup */}
      <div id="signup" className="signup-section">
        <div className="signup-content">
          <h2 className="section-title">Get Early Access</h2>
          <p className="signup-description">
            Be among the first merchants to integrate our revolutionary payment solution and gain a competitive edge.
          </p>
          
          <div className="email-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <button className="submit-button">Join Waitlist</button>
          </div>
          
          <p className="privacy-note">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>MoneyLock.tech</span>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} MoneyLock. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;