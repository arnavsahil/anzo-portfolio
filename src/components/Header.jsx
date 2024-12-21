import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="absolute top-16 left-20">
        <img
          className="h-16"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_132,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
        />
      </div>
      <button className="absolute top-20 right-20 bg-black text-white border-4 border-white px-10 py-2 rounded-3xl">
        Hire Me
      </button>
    </div>
  );
};

export default Header;
