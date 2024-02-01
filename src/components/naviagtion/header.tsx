import React from "react";
import Search from "../../ui/search";
import { ChevronDown, User, Settings } from "lucide-react";

const navLinks = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Orders",
  },
  {
    id: 3,
    label: "Integrations",
  },
  {
    id: 4,
    label: "Tracking Package",
    icon: <ChevronDown size={18} />,
  },
  {
    id: 5,
    label: "Partner with us",
  },
];

const Header = () => {
  return (
    <header className="w-full flex justify-between px-20 py-4 bg-white  text-gray-600">
      <div className="flex gap-10">
        {navLinks.map((item) => (
          <div
            className={`flex items-center gap-1 font-medium ${
              item.id == 1 && "border-b-2 border-violet-400"
            }`}
          >
            <p> {item.label}</p>
            {item.icon && <p> {item.icon}</p>}
          </div>
        ))}
      </div>

      <div className="flex gap-10 font-medium">
        <Search />
        <div className="flex items-center gap-1">
          <User size={16} strokeWidth={2.5} />
          <p>Account</p>
        </div>

        <div className="flex items-center gap-1">
          <Settings size={16} />
          <p>Settings</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
