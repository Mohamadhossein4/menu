import React from "react";
import Image from "next/image";
import MainMenu from "../MainMenu";

import SurpriseMenu from "../SurpriseMenu";



const MainMenuitems = [
  {
    name: "موز کیک",
    twoRoolPrice: 200,
    threeRoolPrice: 250,
  },
  {
    name: "توت فرنگی + کیک",
     twoRoolPrice: 200,
    threeRoolPrice: 250,
  },
  {
    name: "نوتلا + موز + توت فرنگی",
    twoRoolPrice: 200,
    threeRoolPrice: 250,
  },{
    name: "نوتلا + موز + پسته",
    twoRoolPrice: 200,
    threeRoolPrice: 250,
  },{
    name: "نوتلا + موز + لوکوس",
   twoRoolPrice: 200,
    threeRoolPrice: 250,
  },{
    name: "اورئو + کره بادام زمینی + موز",
   twoRoolPrice: 200,
    threeRoolPrice: 250,
  },{
    name: "قهوه شنی + موز",
   twoRoolPrice: 200,
    threeRoolPrice: 250,
  },
];

const Luxuryitems = [
  {
    name: "موز + نوتلا + اورئو + پسته",
    twoRoolPrice: 250,
    threeRoolPrice: 280,
  },
  {
    name: "ترش لواشکی",
    twoRoolPrice: 200,
    threeRoolPrice: 250,
  },
  {
    name: "ترکیب به انتخاب شما",
    twoRoolPrice: 280,
    threeRoolPrice: 320,
  }
];

const Supriseitems = [
  {
    name: "هر هفته یک طعم جدید",
  }
];


const Menu = () => {
  return (
    <div className="flex flex-col container gap-10 -mt-6">
      <div className="px-4">
        <MainMenu items={MainMenuitems} menuTitle={"منو ترکیبی"}/>
      </div>
      <div className="px-4">
        <MainMenu items={Luxuryitems} menuTitle={"منو لاکچری"}/>
      </div>
      <div className="px-4">
        <SurpriseMenu items={Supriseitems} menuTitle={"سوپرایز"}/>
      </div>
    </div>
  );
};

export default Menu;
