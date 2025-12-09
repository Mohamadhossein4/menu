import React from "react";
import { iranSans } from "@/lib/fonts/font";

interface MainMenuProp {
menuTitle : string;
items: {
     name: string;
  twoRoolPrice: number;
  threeRoolPrice: number;
  }[];
}

const MainMenu = ({menuTitle , items} : MainMenuProp) => {
  return (
    <div className="rounded-xl border border-gray-700">
      <div className="relative">
      <div className="absolute text-2xl font-bold text-pink-700 bg-[url('/images/background.jpg')] p-2 px-2 -top-7 left-1/2 -translate-x-1/2 ">
       {menuTitle}
      </div>
      <div className="absolute flex items-center gap-2.5 left-2 top-4 text-sm">
        <span>2 رول</span>
        <span>3 رول</span>
      </div>
      </div>
      <div  className="flex flex-col mt-12 p-2 gap-3">
      {items.map((items, index)=>{
        return(
        <div key={index} className="flex items-center justify-between">
          <span>{items.name}</span>
          <div className={`${iranSans.className} flex items-center justify-center gap-2 `}>
            <span className="bg-pink-100 border border-pink-500 px-1 text-gray-600 rounded-md">{items.twoRoolPrice}</span>
            <span className="bg-pink-100 border border-pink-500 px-1 text-gray-600 rounded-md">{items.threeRoolPrice}</span>
          </div>
        
      </div>)
      } )}
      </div>
      
    </div>
  );
};

export default MainMenu;
