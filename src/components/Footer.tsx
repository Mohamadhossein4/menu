import React from "react";
import Image from "next/image";
import footerImg from "../../public/images/footerImg.png";

const FooterStyle = {
  width: "300px",
  height: "300px",
};

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 -mb-40 mt-6">
        <div className="flex gap-1 items-center">
          <span className="text-sm text-white bg-amber-950/80 rounded-r-lg p-2">
            thaice.vercel.app
          </span>
          <span className="text-sm text-white bg-pink-950/80 rounded-l-lg p-2">
            09054900353
          </span>
        </div>
        <span className="text-lg"> تهران ، بلوار ابوذر ، پارک وحدت</span>
      </div>
      <div>
        <Image
          style={FooterStyle}
          src={footerImg}
          alt="footer"
          className=""
        />
      </div>
      <div className="relative">
        <div className="absolute w-6 h-6 rounded-full bg-red-900/70 left-3 bottom-10"></div>
        <div className="absolute w-4 h-4 rounded-full bg-red-900/70 left-5 bottom-18"></div>
        <div className="absolute w-2 h-2 rounded-full bg-red-900/70 left-12 bottom-8"></div>
      </div>
    </div>
  );
};

export default Footer;
