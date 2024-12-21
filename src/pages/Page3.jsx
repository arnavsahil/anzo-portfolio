import React from "react";

const Page3 = () => {
  return (
    <div className="h-screen relative flex items-center justify-center">
      <img
        className="z-20 w-[65vw] absolute"
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1249,h_719,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
      />

      <video
        className="z-10 h-[70vh] w-[48vw] object-cover"
        loop
        muted
        autoPlay={true}
        src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"
      ></video>
      <div className="z-0 absolute top-[40%] h-0.5 w-3/5 bg-gray-500"></div>
      <div className="z-0 absolute top-[58%] h-0.5 w-4/5 bg-gray-500"></div>
      <div className="z-0 absolute top-[76%] h-0.5 w-full bg-gray-500"></div>
    </div>
  );
};

export default Page3;
