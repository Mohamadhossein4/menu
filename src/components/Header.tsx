import React from "react";
import Image from "next/image";
import headerImg from "../../public/images/headerImg.png";
import footerImg from "../../public/images/footerImg.png";
import iceCream from "../../public/images/iceCream.png";

const HeaderStyle ={
  width : "200px",
  height: "200px"
}
const imgStyle ={
  width : "200px",
  height: "200px"
}
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
         <div className="absolute flex flex-col items-center top-20 left-20 gap-y-2">
          <span className="text-4xl text-amber-950 font-bold">بستنی تایسی رول</span>
          <span className="text-xl text-pink-400">بستنی رولی</span>

         </div>
         <div className="absolute top-32 right-0">
          <Image
          style={imgStyle}
          src={iceCream}
          alt="header"
          className="-ml-3.5"
        />
         </div>
         <div className="absolute border h-60 w-45 left-2 shadow-xl">
           <div className="flex flex-col mt-10 p-2">
               <div className="flex items-center justify-between">
                <span>شیر موز </span>
                <div className="flex gap-2">
                  <span>120</span>
                  <span>130</span>
                </div>
               </div>
           </div>
         </div>
         <div className="absolute text-2xl font-bold text-pink-700 bg-pink-50 p-2 px-5 top-44 left-1.5">
          منو ترکیبی 
         </div>
          <div></div>
         <div className="absolute -bottom-161 right-0">
        <Image
          style={HeaderStyle}
          src={footerImg}
          alt="header"
          className="-ml-3.5"
        />
      </div>
    </div>
  );
};

export default Header;
