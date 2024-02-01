import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const filters = [
  {
    id: 1,
    label: "Lifetime",
  },
  {
    id: 2,
    label: "Last Week",
  },
  {
    id: 3,
    label: "Last Month",
  },
  {
    id: 4,
    label: "Last Year",
  },
  {
    id: 5,
    label: "Customize Time Line",
    icon: <Calendar size={15} />,
  },
];

const Performance = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <div className="bg-[#fff7ee] py-10 px-20">
      <h2 className="text-2xl font-semibold text-gray-600">
        Instant Dive Into Your Performance Metrics
      </h2>

      <div className="flex items-center justify-start gap-x-4 py-8">
        <div className="flex gap-x-3 lg:space-x-1.5 w-fit rounded-lg py-1 px-2">
          {filters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? " border border-violet-400 bg-violet-100"
                  : " bg-white"
              } flex items-center gap-2 relative rounded px-2 lg:px-4 py-2 text-xs lg:text-sm font-medium transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-20 bg-gray-100 dark:bg-[#232323] py-1.5 "
                  style={{ borderRadius: 8 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
              {tab.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
