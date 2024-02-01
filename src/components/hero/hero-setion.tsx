import HeroCard from "./hero-card";
import { MessageCircleWarning, AlertCircle } from "lucide-react";

const cards = [
  {
    heading: "Order sync successful!",
    content:
      "Your order details from the last 30 days have been successfully synced. Check them out now!",
    button1: "Explore your orders!",
    customClass: "bg-white",
    button1Style: "bg-[#414141] text-white",
  },
  {
    heading: "Customize Customer Notification",
    icon: <MessageCircleWarning size={15} strokeWidth={2.5} />,
    content:
      "Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers",
    button1: "Configure Notifications",
    customClass: "bg-[#fef9db]",
    button1Style: "bg-[#414141] text-white",
  },
  {
    heading: "Your Tracking Link has been generated",
    icon: <AlertCircle size={15} strokeWidth={2.5} />,
    content: "Include the Link to Your Store's Navigation Menu.",
    button1: "Copy Link",
    button2: "Go To Navigation Menu",
    customClass: "bg-[#eaf5fe]",
    button1Style: "bg-white",
    button2Style: "bg-[#414141] text-white ml-3",
  },
];

const HeroSection = () => {
  return (
    <div className="bg-[#f7f6f4] py-10 px-20 2xl:px-64">
      <h2 className="text-2xl font-semibold py-8 text-gray-700">
        Welcome, John Mathew!!
      </h2>

      <div className="flex gap-12 2xl:gap-40 justify-start">
        {cards?.map((card) => (
          <HeroCard
            id={card.heading}
            heading={card.heading}
            content={card.content}
            icon={card.icon}
            customClass={card.customClass}
            button1={card.button1}
            button2={card.button2}
            button2Style={card.button2Style}
            button1Style={card.button1Style}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
