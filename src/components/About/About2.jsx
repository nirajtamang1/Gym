import React from "react";
import BannerImage from "../../assets/banner2.png";

export const About2 = () => {
  return (
    <div className="py-16 dark:bg-dark dark:text-white bg-white duration-200">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {/* text section  */}
          <div className="space-y-4">
            {/* Heading Section  */}
            <div className="flex items-center gap-4">
              <div className="text-primary text-7xl">
                <h1 className="font-bold">02</h1>
              </div>
              <div>
                <p className="text-primary ">Global Fitness</p>
                <h1 className="text-2xl sm:text-4xl font-bold">About Us</h1>
              </div>
            </div>
            {/* Botton Section  */}
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati quaerat error pariatur sit eum. Fugit fuga nisi in
                commodi placeat ad omnis, sit ex illo maiores cum, eaque velit.
                Debitis perspiciatis ad inventore nemo laboriosam dolore officia
                eos voluptates aut, molestiae perferendis tempore cumque
                necessitatibus id magnam totam nisi consectetur.
              </p>
            </div>
            <button className="outline-btn">Get Started</button>
          </div>
          {/* image section  */}
          <div>
            <img
              src={BannerImage}
              alt=""
              className="sm:scale-125 max-h-[300px] drop-shadow-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
