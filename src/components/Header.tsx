import headerImg from "../../public/images/headerImg.png";
import Image from "next/image";


const HeaderStyle = {
  width: "200px",
  height: "200px",
};

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <div className="absolute w-6 h-6 rounded-full bg-amber-900/70 right-1 bottom-5"></div>
        <div className="absolute w-4 h-4 rounded-full bg-amber-900/70 right-8 bottom-12"></div>
        <div className="absolute w-2 h-2 rounded-full bg-amber-900/70 right-6 bottom-0"></div>
      </div>
      <div className="relative top-20 left-20">
        <span className="absolute bottom-16 right-11 w-64 text-4xl text-amber-950 font-bold">
          بستنی تایسی رول
        </span>
        <span className="absolute bottom-7 right-13 w-30 text-xl text-pink-400">
          بستنی رولی
        </span>
      </div>
      <div>
        <Image
          style={HeaderStyle}
          src={headerImg}
          alt="header"
          className="-ml-3.5"
        />
      </div>
    </div>
  );
};

export default Header;
