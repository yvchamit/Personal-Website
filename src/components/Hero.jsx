import { useSelector } from "react-redux";
import { useState } from "react";
import Colors from "./Colors";

function Hero() {
  const { content } = useSelector((state) => state.theme);
  const heroData = content.hero;

  const [borderHex, setBorderHex] = useState("transparent");

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-15 pt-18.75">
      <div className="flex-1">
        <div className="flex items-center justify-start mb-5">
          <div className="w-25.5 h-0 border border-indigo-800 dark:border-indigo-600 mr-2.5"></div>
          <span className="text-[20px] font-medium leading-7 text-indigo-700 dark:text-indigo-500">
            {heroData.name}
          </span>
        </div>

        <h1>{heroData.title}</h1>

        <p className="text-[18px] leading-7 text-gray-500 mb-6 max-w-135 py-3">
          {heroData.description}
        </p>

        <div className="flex flex-wrap gap-3.75 text-[18px] font-semibold leading-7">
          {heroData.buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.url}
              className={btn.type === "primary" ? "hero-button" : "hero-link"}
            >
              {btn.icon && <i className={`${btn.icon} text-[25px]`}></i>}
              {btn.label}
            </a>
          ))}
        </div>
      </div>

      <div className="w-full md:w-auto flex flex-col items-center">
        <img
          src={heroData.image}
          alt={heroData.name}
          className="w-full min-w-75 max-w-117 h-auto rounded-[18px] shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.21)] dark:shadow-[0px_18px_88px_-4px_rgba(0,0,0,0.5)] object-cover transition-all duration-100"
          style={{ 
            border: borderHex === "transparent" ? `0px`: `6px solid ${borderHex}`,
            boxShadow: borderHex !== "transparent" ? `0 0 25px ${borderHex}60` : "" 
          }}
        />
        <Colors onColorSelect={setBorderHex} currentSelection={borderHex} />
      </div>
    </section>
  );
}

export default Hero;
