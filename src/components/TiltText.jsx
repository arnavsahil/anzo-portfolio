import React from "react";

const TiltText = ({ tiltRef }) => {
  return (
    <div
      id="tiltDiv"
      ref={tiltRef}
      className="tiltText absolute top-[40vh] left-20"
    >
      <h2 className="text-[9vh] uppercase font-[anzo1] text-white">
        I am <span className="text-black">Dark Mode</span>™
      </h2>
      <h2 className="text-[17vh] uppercase leading-[9vh] font-[anzo1] text-white">
        Designer
      </h2>
      <h2 className="text-[9vh] uppercase font-[anzo1] text-white">To Hire</h2>
    </div>
  );
};

export default TiltText;
