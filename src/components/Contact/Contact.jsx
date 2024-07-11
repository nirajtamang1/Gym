import React from "react";

export const Contact = () => {
  return (
    <div className="my-14">
      <div className="container dark:bg-black bg-gray-100 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-black/80 dark:text-white">
              <span className="text-primary">Sweat now, shine later.</span> Your
              body is a reflection of your lifestyle choices.
            </h1>
          </div>
          <div className="text-center grid  place-items-center">
            <button className="primary-btn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};
