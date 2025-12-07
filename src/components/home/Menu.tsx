import React from "react";
import Image from "next/image";
import headerImg from "../../../public/images/headerImg.png";
import footerImg from "../../../public/images/footerImg.png";
import iceCream from "../../../public/images/iceCream.png";
import MainMenu from "../MainMenu";
import LuxuryMenu from "../LuxuryMenu";
import SurpriseMenu from "../SurpriseMenu";


const HeaderStyle = {
  width: "200px",
  height: "200px",
};
const FooterStyle = {
  width: "400px",
  height: "200px",
};
const imgStyle = {
  width: "240px",
  height: "240px",
};
const Header = () => {
  return (
    <div className="relative container">
      <div className="absolute w-6 h-6 rounded-full bg-amber-900/50 right-1 top-18"></div>
      <div className="absolute w-2 h-2 rounded-full bg-amber-900/50 right-6 top-26"></div>
      <div className="absolute w-4 h-4 rounded-full bg-amber-900/50 right-8 top-12"></div>

      <div className="flex justify-end">
        <Image
          style={HeaderStyle}
          src={headerImg}
          alt="header"
          className="-ml-3.5"
        />
      </div>
      <div className={` absolute flex flex-col items-center top-20 left-20 gap-y-2`}>
        <span className="text-4xl text-amber-950 font-bold">
          بستنی تایسی رول
        </span>
        <span className="text-xl text-pink-400">بستنی رولی</span>
      </div>
      <div className="absolute top-32 -right-2">
        <Image
          style={imgStyle}
          src={iceCream}
          alt="header"
          className="-ml-3.5"
        />
      </div>
      <div className="absolute  rounded-xl border h-62 w-45 left-2">
        <MainMenu />
      </div>
      <div className="absolute text-2xl font-bold text-pink-700 bg-pink-50 p-2 px-3 top-44 left-9">
        منو ترکیبی
      </div>
      <div className="absolute flex items-center gap-3 left-4.5 top-56 text-xs ">
        <span>2 رول</span>
        <span>3 رول</span>
      </div>

      <div className="absolute rounded-xl border h-62 w-45 right-2 top-100 shadow-xl">
        <LuxuryMenu/>
      </div>
      <div className="absolute text-2xl font-bold text-pink-700 bg-pink-50 p-2 px-3 top-94 right-8">
        منو لاکچری
      </div>
      <div className="absolute flex items-center gap-3 right-28 top-106 text-xs ">
        <span>2 رول</span>
        <span>3 رول</span>
      </div>

      <div className="absolute rounded-xl border h-42 w-45 left-2 top-120 shadow-xl">
        <SurpriseMenu/>
      </div>
      <div className="absolute text-2xl font-bold text-pink-700 bg-pink-50 p-2 px-3 top-114 left-8.5">
        منو سوپرایز
      </div>
      


      <div className="absolute top-170 left-2.5">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1 items-center">
            <span className="text-sm text-white bg-amber-950/80 rounded-r-lg p-2">thaice.netlify.app</span>
            <span className="text-sm text-white bg-pink-950/80 rounded-l-lg p-2">09054900353</span>
          </div>
          <span className="text-[13.5px] "> تهران ، بلوار ابوذر ، پارک وحدت</span>
        </div>
      </div>
      <div className="absolute -bottom-161 right-0">
        <Image
          style={FooterStyle}
          src={footerImg}
          alt="header"
          className="-ml-3.5"
        />
      </div> 
    </div>
  );
};

export default Header;
