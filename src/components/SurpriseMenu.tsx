import React from "react";
import { iranSans } from "@/lib/fonts/font";


interface SupriseMenuProp {
  menuTitle: string;
  items: {
    name: string;
  }[];
}

const SurpriseMenu = ({ menuTitle, items }: SupriseMenuProp) => {
  return (
    <div className="rounded-xl border border-gray-700">
      <div className="relative">
        <div className="absolute text-2xl font-bold text-pink-700 bg-[url('/images/background.jpg')] p-2 px-2 -top-7 left-1/2 -translate-x-1/2 ">
          {menuTitle}
        </div>
        
      </div>
      <div className="flex flex-col items-center justify-center p-8 text-pink-900">
        {items.map((items , index)=>{
          return(<div className={`  text-2xl`} key={index} > {items.name}</div>)
        })}
        <div className='text-pink-400 mt-6'>ممنون از انتخاب شما</div>
      </div>
    </div>
  );
};

export default SurpriseMenu;
