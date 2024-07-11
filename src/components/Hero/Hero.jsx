import React from "react";
import BannerImg from "../../assets/hero.jpg";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
export const Hero = () => {
  return (
    <div
      style={BgStyle}
      className="bg-white dark:text-white dark:bg-black duration-200"
    >
      <div className="bg-white/70 dark:bg-black/70 duration-200">
        <div className="container min-h-[500px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p className="text-primary text-2xl">Start Your Fitness Journey</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Your Fitness Hournery Begins
            </h1>
            <p>"The body achieves what the mind believes."</p>
            <button className="primary-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
