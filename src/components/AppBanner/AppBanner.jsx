import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import pattern from "../../assets/dumbell.jpg";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppBanner = () => {
  return (
    <div>
      <div className="container text-white">
        <div
          style={bannerImg}
          className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl p-6"
        >
          <div className="space-y-6 max-w-xl">
            <h1 className="text-2xl text-center sm:text-4xl font-semibold">
              Download the app
            </h1>
            <p className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              suscipit ullam consectetur eveniet! Eos ea aspernatur ab ipsa
              voluptatem adipisci dolorum quaerat vel autem, minima deleniti
              voluptate sed culpa dolores!
            </p>
            <div className="flex justify-center items-center gap-4">
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
