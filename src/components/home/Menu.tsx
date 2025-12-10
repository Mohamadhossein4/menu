import React from "react";
import Image from "next/image";
import MainMenu from "../MainMenu";

import SurpriseMenu from "../SurpriseMenu";



const MainMenuitems = [
  {
    name: "موز کیک",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
  },
  {
    name: "توت فرنگی + کیک",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
  },
  {
    name: "نوتلا + موز + توت فرنگی",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
  },{
    name: "نوتلا + موز + پسته",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
  },{
    name: "نوتلا + موز + لوکوس",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
  },{
    name: "اورئو + کره بادام زمینی + موز",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
  },{
    name: "قهوه شنی + موز",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
  },
];

const Luxuryitems = [
  {
    name: "موز + نوتلا + اورئو + پسته",
    twoRoolPrice: 180,
    threeRoolPrice: 200,
  },
  {
    name: "ترش لواشکی",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
  },
  {
    name: "ترکیب به انتخاب شما",
    twoRoolPrice: 140,
    threeRoolPrice: 180,
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
