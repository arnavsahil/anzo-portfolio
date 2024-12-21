import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page8 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".rotate3Text", {
      y: 70,
      duration: 2,
      delay: 2,
      opacity: 0.3,
      stagger: 1,
      ease: "power1.out",
      //yoyo: true,
      scrollTrigger: {
        trigger: ".rotate3Text",
        //markers: true,
        start: "top 75%",
        end: "top 5%",
        scrub: 3,
      },
    });
  });

  useGSAP(function () {
    gsap.to("#rotateimg1", {
      rotate: 60,
      duration: 6,
      repeat: -1,
      ease: "bounce.out",
    });
  });

  return (
    <div className="relative bg-white p-4">
      <div className="w-full rounded-3xl bg-black">
        <div className="px-16">
          <h1 className="text-[20vw] leading-snug tracking-wide uppercase font-[anzo4] text-white">
            Right
          </h1>
          <h1 className="text-[20vw] leading-[4vw] tracking-wide uppercase font-[anzo4] text-[#9B9B9B]">
            Fit
          </h1>
        </div>
        <div className="absolute w-3/5 top-10 right-8 px-20 py-10 text-white">
          <div className="rotate3Text">
            <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">
              Personality
            </h3>
            <p className="font-[anzo2]">
              Business relationships build on trust and compassion vs how can I
              get more for less +/-
            </p>
          </div>
          <div className="rotate3Text mt-10">
            <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">Approach</h3>
            <p className="font-[anzo2]">
              Full dive into personality, goals and objectives with transparency
              of worq process vs template and unmanageable office routine +/-
            </p>
          </div>
          <div className="rotate3Text mt-10">
            <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">Design</h3>
            <p className="font-[anzo2]">
              Design that is actually functional and helps to achieve results is
              design that works +/-
            </p>
          </div>
          <div className="rotate3Text mt-10">
            <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">Focus</h3>
            <p className="font-[anzo2]">
              How can I help and what can I do solve your problem or objective
              vs how can I sell you more +/-
            </p>
          </div>
          <div className="rotate3Text mt-10">
            <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">Fit</h3>
            <p className="font-[anzo2]">
              The perfect suit is the one fits you vs the one you can fit in.
              Choose wisely you are investing in yourself! +/-
            </p>
          </div>
          <div className="rotate3Text mt-10">
            <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">
              Core Values
            </h3>
            <p className="font-[anzo2]">
              Time, trust and experience are resources we can not buy, yet we
              are sharing them and exchange +/-
            </p>
          </div>
          <div className="rotate3Text mt-10">
            <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">
              To Consider
            </h3>
            <p className="font-[anzo2]">
              Your brand, your personal identity is the reflection of your
              passion and goals on your future; your first online impression
              matters +/-
            </p>
          </div>
        </div>
        <div className="px-10 py-4">
          <img
            id="rotateimg1"
            className="w-[30vw] grayscale"
            src="https://static.wixstatic.com/media/11062b_b42f6deed88e48509affdc02c3eb5b45f000.png/v1/fill/w_301,h_301,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_b42f6deed88e48509affdc02c3eb5b45f000.png"
          />
        </div>
        <div className="px-20 py-10">
          <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">
            Sounds Good?
          </h3>
          <h3 className="uppercase text-[#9B9B9B] font-[anzo3]">
            Then Please{" "}
            <span className="text-white font-[anzo2]">Email Me</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page8;
