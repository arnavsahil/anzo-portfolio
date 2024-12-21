import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <div className="page1bottom flex justify-between">
      <div className="absolute left-20 bottom-14">
        <h2 className="uppercase text-[#FAFAFA] font-[anzo2]">
          Brand Design | Website Design
        </h2>
        <h2 className="uppercase text-[#717171] font-[anzo3]">
          Bespoke Freelance
        </h2>
      </div>
      <div
        id="banner"
        className="absolute right-20 bottom-14 flex flex-col gap-4"
      >
        <img
          className="w-16 h-16"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_134,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
        />
        <img
          className="w-16 h-16"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_134,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png"
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
