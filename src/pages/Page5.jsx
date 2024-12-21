import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".rotate2Text", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      // repeat: -1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotate2Text",
        //markers: true,
        start: "top 60%",
        end: "top -270%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="page5" className="text-center bg-white text-black p-20">
      <div className="rotate2Text">
        <h1 className="text-[40vw] leading-[30vw] uppercase font-[anzo4]">
          Helping
        </h1>
      </div>
      <div className="rotate2Text">
        <h1 className="text-[40vw] leading-[33vw] uppercase font-[anzo4]">
          My
        </h1>
      </div>
      <div className="rotate2Text">
        <h1 className="text-[40vw] leading-[33vw] uppercase font-[anzo4]">
          Clients
        </h1>
      </div>
      <div className="rotate2Text">
        <h1 className="text-[40vw] leading-[33vw] uppercase font-[anzo4]">
          To achieve
        </h1>
      </div>
      <div className="rotate2Text">
        <h1 className="text-[40vw] leading-[33vw] uppercase font-[anzo4]">
          Their
        </h1>
      </div>
      <div className="rotate2Text">
        <h1 className="text-[40vw] leading-[33vw] uppercase font-[anzo4]">
          Dreams!
        </h1>
      </div>
    </div>
  );
};

export default Page5;
