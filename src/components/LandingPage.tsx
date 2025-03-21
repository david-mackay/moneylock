"use client";

import React, { useState } from 'react';
import { MoneyLockHero } from './ui/background-paths';
import { cn } from "@/lib/utils";
import {
  IconShieldCheck,
  IconWorld,
  IconCode,
  IconUsers,
  IconTrendingUp,
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
} from "@tabler/icons-react";

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/collect-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      setEmail(''); // Clear the input
      alert('Thank you for joining our waitlist!');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="landing-container bg-black text-white">
      {/* Hero Section */}
      <section>
        <MoneyLockHero title="Stripe for Crypto" />
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 relative z-20">
        <FeaturesSectionWithHoverEffects />
      </section>

      {/* Call to Action - Email Signup */}
      <section id="signup" className="signup-section bg-gradient-to-b from-gray-900 to-black py-16 relative">
        {/* Subtle background effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#8B5CF6,#3B82F6)]"></div>
        </div>
        
        <div className="signup-content container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h2 className="section-title text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Get Early Access</h2>
          <p className="signup-description mb-8 text-gray-300">
            Be among the first merchants to integrate our revolutionary payment solution and gain a competitive edge.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full">
            <div className="email-form flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="email-input px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white w-full sm:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-70"
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="submit-button bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition duration-200 disabled:opacity-70"
              >
                {isSubmitting ? 'Processing...' : 'Join Waitlist'}
              </button>
            </div>
            
            <p className="privacy-note mt-4 text-sm text-gray-400">
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer bg-black text-white py-8 border-t border-gray-800">
        <div className="footer-content container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="footer-logo font-bold text-xl mb-4 sm:mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">MoneyLock.tech</span>
          </div>
          <div className="copyright text-gray-500 text-sm">
            © {new Date().getFullYear()} MoneyLock. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Updated FeatureSection with the benefits from the landing page
export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "No Fraudulent Chargebacks",
      description:
        "Once paid, always paid. Say goodbye to disputed charges and fraudulent chargebacks. Our blockchain verification provides definitive proof of payment every time.",
      icon: <IconShieldCheck className="text-blue-400" />,
    },
    {
      title: "Global Access",
      description:
        "Accept payments from anywhere, instantly. No currency conversion fees, no international processing delays. Open your business to the entire world without barriers.",
      icon: <IconWorld className="text-purple-400" />,
    },
    {
      title: "Simple Integration",
      description:
        "One code snippet. That's it. Integrate in minutes, not weeks. As easy as adding Google Analytics to your site.",
      icon: <IconCode className="text-blue-400" />,
    },
    {
      title: "Own Your Customer Relationship",
      description: "Direct connection with your customers. No intermediaries dictating terms or taking control. You build the relationship, we just facilitate the payment.",
      icon: <IconUsers className="text-purple-400" />,
    },
    {
      title: "Future-Proof Your Business",
      description: "Stay ahead of the curve with next-generation payment technology that's becoming the new standard. Position your business at the forefront of financial innovation.",
      icon: <IconTrendingUp className="text-blue-400" />,
    },
    {
      title: "100% Uptime guarantee",
      description: "Our blockchain-based system ensures payments are processed 24/7 without interruption.",
      icon: <IconCloud className="text-purple-400" />,
    },
    {
      title: "Competitive Fee Structure",
      description:
        "Lower transaction fees compared to traditional payment processors. Keep more of your hard-earned revenue.",
      icon: <IconCurrencyDollar className="text-blue-400" />,
    },
    {
      title: "Advanced Analytics",
      description: "Detailed insights into your payment flows with real-time reporting and analytics.",
      icon: <IconAdjustmentsBolt className="text-purple-400" />,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Why Merchants Choose MoneyLock</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-800",
        (index === 0 || index === 4) && "lg:border-l border-gray-800",
        index < 4 && "lg:border-b border-gray-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-800/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-2xl">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-gradient-to-b group-hover/feature:from-blue-500 group-hover/feature:to-purple-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default LandingPage;