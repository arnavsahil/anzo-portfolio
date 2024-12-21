import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const handleMouseMove = (e) => {
    // console.log(tiltRef.current.getBoundingClientRect().x);
    // setXVal(e.clientX / 100);
    // setYVal(e.clientY / 100);
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        60
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 20
    );

    // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
    // setXVal(
    //   e.clientX -
    //     tiltRef.current.getBoundingClientRect().x -
    //     tiltRef.current.getBoundingClientRect().width / 2
    // ) / 100;
    // setYVal(
    //   -(
    //     e.clientY -
    //     tiltRef.current.getBoundingClientRect().y -
    //     tiltRef.current.getBoundingClientRect().height / 2
    //   ) / 50
    // );
    // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      id="page1"
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      className="relative h-screen bg-white p-4"
    >
      <div className="h-full w-full bg-cover rounded-[32px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2476,h_1146,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]"></div>
      <Header></Header>
      <TiltText tiltRef={tiltRef}></TiltText>
      <Page1Bottom></Page1Bottom>
    </div>
  );
};

export default Page1;
