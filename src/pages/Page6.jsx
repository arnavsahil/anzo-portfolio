import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page6 = () => {
  useGSAP(function () {
    gsap.to("#sunimg", {
      rotate: 360,
      duration: 10,
      repeat: -1,
    });
  });

  useGSAP(function () {
    gsap.to("#earthimg", {
      transform: "rotateY(-200deg)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  useGSAP(function () {
    gsap.to("#rocketimg", {
      // y: 10,
      duration: 0.7,
      repeat: -1,
      yoyo: true,
      scale: 0.9,
      ease: "bounce",
    });
  });
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from("#rotateimg", {
      transform: "rotateZ(-240deg)",
      duration: 1,
      //repeat: -1,
      ease: "linear",
      scrollTrigger: {
        trigger: "#rotateimg",
        //markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub: 2  ,
      },
    });
  });

  return (
    <div className="relative bg-white p-4">
      <div className="w-full rounded-3xl bg-black">
        <div className="flex items-center justify-between px-16 py-10">
          <div>
            <h1 className="text-[19vw] leading-none uppercase tracking-wide font-[anzo4] text-[#9B9B9B]">
              How
            </h1>
            <h1 className="text-[19vw] leading-[12vw] uppercase tracking-wide font-[anzo4] text-[#FAFAFA]">
              Can
            </h1>
          </div>
          <div>
            <h1 className=" text-[19vw] leading-none uppercase font-[anzo4] text-[#FAFAFA]">
              I help
            </h1>
            <h1 className="text-[19vw] leading-[12vw] uppercase font-[anzo4] text-[#FAFAFA]">
              you
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            id="rotateimg"
            className="absolute top-48 z-0 grayscale brightness-50"
            loading="lazy"
            src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_avif,quality_auto/triangle%203.png"
          />
        </div>
        <div className="flex items-center justify-evenly py-16 text-white">
          <div className="w-[25%]">
            <p className="text-[1.3vw] leading-5 font-[anzo2]">
              <span className="text-[#9B9B9B]">
                I am a self-taught web and brand designer with a passion for
                creating unique and timeless
              </span>
              &nbsp;masterpieces for ambitious professionals, entrepreneurs,
              artists, and boutique businesses.
            </p>
            <p className="text-[1.3vw] leading-10 font-[anzo2]">
              BeSpoke Freelance
              <span className="text-[#9B9B9B]">&nbsp;for agencies.</span>
            </p>
          </div>
          <div className="w-[25%]">
            <p className="text-[1.3vw] leading-5 font-[anzo2]">
              <span className="text-[#9B9B9B]">
                With a background in strategic marketing and acknowledged
                expertise in web development,
              </span>
              &nbsp;I aim to minimize my client's resources spent on macro and
              micro-management, marketing research, and hiring a whole team of a
              larger agency.
            </p>
          </div>
          <div className="w-[25%]">
            <p className="text-[1.3vw] leading-5 font-[anzo2]">
              My mission is to drive exceptional growth for my clients by
              increasing their brand appearance
              <span className="text-[#9B9B9B]">
                , defining their identity, and engaging customers through
                captivating black-and-white aesthetics with a modern, luxurious,
                and minimalistic touch.
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around text-white ">
          <div className="flex gap-6 z-10">
            <img
              id="sunimg"
              className="h-14"
              src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_86,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png"
            />
            <h1 className="text-[4vw] uppercase font-[anzo4]">
              Design<span className="text-[1.5vw] font-[anzo1]">&nbsp;01</span>
            </h1>
          </div>
          <div className="flex gap-6 z-10">
            <img
              id="earthimg"
              className="h-14"
              src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png"
            />
            <h1 className="text-[4vw] uppercase font-[anzo4]">
              Development
              <span className="text-[1.5vw] font-[anzo1]">&nbsp;02</span>
            </h1>
          </div>
          <div className="flex gap-6">
            <img
              id="rocketimg"
              className="z-10 h-14"
              src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png"
            />
            <h1 className="text-[4vw] uppercase font-[anzo4]">
              Branding
              <span className="text-[1.5vw] font-[anzo1]">&nbsp;03</span>
            </h1>
          </div>
        </div>
        <div className="px-20 py-10">
          <h3 className="text-[#9B9B9B] uppercase font-[anzo3]">
            Got a Project?
          </h3>
          <h3 className="text-[#9B9B9B] leading-none uppercase font-[anzo3]">
            Then please{" "}
            <span className="font-[anzo2] text-white">contact me</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page6;
