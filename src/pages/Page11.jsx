import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page11 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".targetText", {
      opacity: 0,
      duration: 2,
      delay: 1,
      stagger: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".targetText",
        //markers: true,
        start: "top 70%",
        end: "top 10%",
        scrub: 4,
      },
    });
  });

  return (
    <div className="relative h-screen bg-white p-4">
      <div className="h-full w-full rounded-3xl bg-[url(https://static.wixstatic.com/media/11062b_fc7c8b8125a94b69ad7cad3b24a8093af000.jpg/v1/fill/w_968,h_634,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_fc7c8b8125a94b69ad7cad3b24a8093af000.jpg)]">
        <div className="text-center">
          <div className="">
            <h1 className="text-[12vw] leading-none tracking-wide uppercase text-white font-[anzo4]">
              Personal
            </h1>
            <p className="targetText -mt-5 text-[#909090] font-[anzo2]">
              Honesty, Communication, Punctuality
            </p>
          </div>
          <div className="mt-10">
            <h1 className="relative z-10 text-[12vw] leading-none tracking-wide uppercase text-white font-[anzo4]">
              Professional
            </h1>
            <p className="targetText -mt-5 text-[#909090] font-[anzo2]">
              Photoshop, Wix Studio, Figma
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-[12vw] leading-none tracking-wide uppercase text-white font-[anzo4]">
              Additional
            </h1>
            <p className="targetText -mt-5 text-[#909090] font-[anzo2]">
              Business Development, Branding, SEO
            </p>
          </div>
        </div>
        <img
          className="h-[75vh] absolute z-0 top-24 right-40"
          src="https://static.wixstatic.com/media/11062b_26ab0e4151b142f7a212532fe505c868f000.png/v1/fill/w_329,h_350,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_26ab0e4151b142f7a212532fe505c868f000.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page11;
