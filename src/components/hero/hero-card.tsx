import React from "react";
import Button from "../../ui/button";
// import { IconProps } from "lucide-react";

type HeroCardProps = {
  id: string;
  heading: string;
  content: string;
  button1: string;
  button2?: string;
  customClass: string;
  button1Style: string;
  button2Style?: string;
  icon?: React.ReactElement;
};

const HeroCard = ({
  id,
  heading,
  content,
  icon,
  button1,
  button2,
  customClass,
  button1Style,
  button2Style,
}: HeroCardProps) => {
  return (
    <div
      id={id}
      className={` ${customClass} flex flex-col justify-around border border-gray-300 rounded-lg w-[400px] h-44 2xl:h-48 2xl:w[450px] px-4`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 font-medium text-gray-700">
          {icon}
          {heading}
        </div>

        <p className=" font-light text-sm">{content}</p>
      </div>

      <div>
        <Button text={button1} customClass={button1Style} />
        {button2 && button2Style && (
          <Button text={button2} customClass={button2Style} />
        )}
      </div>
    </div>
  );
};

export default HeroCard;
