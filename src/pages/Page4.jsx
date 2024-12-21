import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

const Page4 = () => {
  useGSAP(function () {
    gsap.to(".rotateimg", {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div className="h-screen relative bg-white p-4">
      <div className="h-full w-full bg-black rounded-3xl"></div>
      <img
        className="rotateimg absolute bottom-8 right-48 w-[32vw] grayscale"
        src="https://static.wixstatic.com/media/11062b_cb27c61054af44dbb90f7b6453869643f000.png/v1/fill/w_323,h_323,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_cb27c61054af44dbb90f7b6453869643f000.png"
      />
      <div className="absolute top-16 left-20 ">
        <h1 className="text-[19vw] leading-none tracking-wide uppercase font-[anzo4] text-[#9B9B9B]">
          What
        </h1>
        <h1 className="text-[19vw] leading-[12vw] tracking-wide uppercase font-[anzo4] text-[#FAFAFA]">
          I do
        </h1>
      </div>
      <div className="absolute bottom-[4vw] left-20">
        <h3 className="text-[#FAFAFA] uppercase font-[anzo2]">
          I design and Develop
        </h3>
        <h3 className="text-[#9B9B9B] leading-[1vw] uppercase font-[anzo3]">
          Modern, Impactful and Luxurious
        </h3>
        <h3 className="text-[#FAFAFA] font-[anzo2]">
          websites that seamlessly bridge your goals with needs of your clients.
        </h3>
      </div>
    </div>
  );
};

export default Page4;
