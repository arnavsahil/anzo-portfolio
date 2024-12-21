import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

const Page7 = () => {
  useGSAP(function () {
    gsap.to("#rotateAstro", {
      transform: "rotateZ(-25deg)",
      repeat: -1,
      duration: 10,
      yoyo: true,
      ease: "linear",
    });
  });

  return (
    <div className="h-screen relative flex items-center text-black px-20">
      <div className="flex items-center justify-start gap-20">
        <h1 className="text-[12vw] uppercase font-[anzo4]">Soft</h1>
        <h1 className="text-[42vw] uppercase font-[anzo4]">Skills</h1>
      </div>
      <img
        id="rotateAstro"
        className="h-[52vh] absolute top-[24%] right-[15%]"
        src="https://static.wixstatic.com/media/11062b_4f092394da7646e2aaf05f5bf79f141af000.png/v1/fill/w_261,h_242,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_4f092394da7646e2aaf05f5bf79f141af000.png"
      />
    </div>
  );
};

export default Page7;
