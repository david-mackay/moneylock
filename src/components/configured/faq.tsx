import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const defaultData = [
    {
      id: 1,
      question: "How do I accept global payments without the usual hassles?",
      answer: "That's the beauty of MoneyLock! Your customers can pay in crypto from anywhere in the world - no currency exchange fees, no international payment delays, no country restrictions. Money flows as freely as information should! 🌎",
      icon: "🌍",
      iconPosition: "left"
    },
    {
      id: 2,
      question: "What happens if a customer tries to dispute a payment?",
      answer: "Here's where crypto shines! Unlike credit cards where chargebacks can happen months later, blockchain payments are verified and immutable. Once confirmed, the payment is final - giving you complete protection against fraudulent disputes. We have the receipts, literally! 🛡️",
      icon: "🛡️",
      iconPosition: "right"
    },
    {
      id: 3,
      question: "My customers don't understand crypto. Is this still for me?",
      answer: "Absolutely! Your customers use our simple payment widget - they can pay in crypto, but you don't need to explain blockchain to them. We handle all the complexity behind the scenes. Think of it like email - users don't need to understand SMTP to send messages! 💫",
      icon: "💫",
      iconPosition: "left"
    },
    {
      id: 4,
      question: "If customers pay in crypto, how do I get my money in USD?",
      answer: "We've made this seamless! Customers pay in stablecoins (digital dollars), and we handle the conversion. The funds hit your account as USD, EUR, or your preferred currency. You get all the benefits of crypto without needing to hold any yourself. Best of both worlds! 💱",
      icon: "💱",
      iconPosition: "right"
    },
    {
      id: 5,
      question: "How hard is it to integrate this with my existing store?",
      answer: "Easier than adding Google Analytics! Just copy our snippet into your site, configure your API key, and you're live. Most merchants complete setup in under 10 minutes. Our widget works with Shopify, WooCommerce, and custom sites. No blockchain PhD required! 🚀",
      icon: "🚀",
      iconPosition: "left"
    }
  ];

function DefaultDemo() {
  return (
    <FaqAccordion 
      data={defaultData}
      className="max-w-[700px]"
    />
  );
}

function CustomStyleDemo() {
  return (
    <FaqAccordion 
      data={defaultData}
      className="max-w-[700px]"
      questionClassName="bg-secondary hover:bg-secondary/80"
      answerClassName="bg-secondary text-secondary-foreground"
      timestamp="Updated daily at 12:00 PM"
    />
  );
}

export { DefaultDemo, CustomStyleDemo };