import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const PricingData = [
  {
    name: "Gold Card",
    price: 499,
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-200" />
    ),
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live Classes on demand.",
    ],
    duration: "12 month",
    aosDely: "0",
  },
  {
    name: "Flexible Card",
    price: 899,
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-200" />
    ),
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live Classes on demand.",
    ],
    duration: "12 month",
    aosDely: "500",
  },
  {
    name: "Platinum Card",
    price: 1299,
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-200" />
    ),
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live Classes on demand.",
    ],
    duration: "12 month",
    aosDely: "500",
  },
];
const Pricing = () => {
  return (
    <div className="my-14 py-12">
      <div className="container">
        <h1 className="text-3xl text-center sm:text-5xl font-bold text-primary">
          Pricing
        </h1>
        {/* card section  */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PricingData.map((data, index) => (
            <div
              key={index}
              className="space-y-3 text-center bg-gray-200 dark:bg-dark text-black dark:text-white p-4 sm:py-16 rounded-lg group shadow-xl hover:bg-primary/20 dark:hover:bg-primary/50 duration-200"
            >
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <h1 className="text-4xl font-semibold text-primary">
                ${data.price}
              </h1>
              {data.description.map((des, index) => (
                <div key={index}>
                  <p>{des}</p>
                </div>
              ))}
              <p className="font-semibold text-xl">Duration: {data.duration}</p>
              <button className="primary-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
