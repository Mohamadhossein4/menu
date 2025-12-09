import React from "react";
import Image from "next/image";
import MainMenu from "../MainMenu";

import SurpriseMenu from "../SurpriseMenu";



const MainMenuitems = [
  {
    name: "موز کیک",
    twoRoolPrice: 120,
    threeRoolPrice: 150,
  },
  {
    name: "توت فرنگی + کیک",
    twoRoolPrice: 120,
    threeRoolPrice: 150,
  },
  {
    name: "نوتلا + موز + توت فرنگی",
    twoRoolPrice: 120,
    threeRoolPrice: 150,
  },{
    name: "نوتلا + موز + پسته",
    twoRoolPrice: 120,
    threeRoolPrice: 150,
  },{
    name: "نوتلا + موز + لوکوم",
    twoRoolPrice: 120,
    threeRoolPrice: 150,
  },{
    name: "اورئو + کره بادام زمنی + موز",
    twoRoolPrice: 120,
    threeRoolPrice: 150,
  },{
    name: "قهوه شنی + موز",
    twoRoolPrice: 120,
    threeRoolPrice: 150,
  },
];

const Luxuryitems = [
  {
    name: "موز + نوتلا + اورئو + پسته",
    twoRoolPrice: 150,
    threeRoolPrice: 180,
  },
  {
    name: "ترش لواشکی",
    twoRoolPrice: 150,
    threeRoolPrice: 180,
  },
  {
    name: "ترکیب به انتخاب شما",
    twoRoolPrice: 150,
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
    <div className="flex flex-col container gap-10">
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
