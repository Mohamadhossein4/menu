import React from "react";
import Image from "next/image";
import MainMenu from "../MainMenu";

import SurpriseMenu from "../SurpriseMenu";



const MainMenuitems = [
  {
    name: "موز کیک",
    twoRoolPrice: 180,
    threeRoolPrice: 220,
  },
  {
    name: "توت فرنگی + کیک",
     twoRoolPrice: 180,
    threeRoolPrice: 220,
  },
  {
    name: "نوتلا + موز + توت فرنگی",
    twoRoolPrice: 180,
    threeRoolPrice: 220,
  },{
    name: "نوتلا + موز + پسته",
    twoRoolPrice: 180,
    threeRoolPrice: 220,
  },{
    name: "نوتلا + موز + لوکوس",
   twoRoolPrice: 180,
    threeRoolPrice: 220,
  },{
    name: "اورئو + کره بادام زمینی + موز",
   twoRoolPrice: 180,
    threeRoolPrice: 220,
  },{
    name: "قهوه شنی + موز",
   twoRoolPrice: 180,
    threeRoolPrice: 220,
  },
];

const Luxuryitems = [
  {
    name: "موز + نوتلا + اورئو + پسته",
    twoRoolPrice: 200,
    threeRoolPrice: 250,
  },
  {
    name: "ترش لواشکی",
    twoRoolPrice: 180,
    threeRoolPrice: 220,
  },
  {
    name: "ترکیب به انتخاب شما",
    twoRoolPrice: 180,
    threeRoolPrice: 220,
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
