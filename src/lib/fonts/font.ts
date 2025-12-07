import localFont from "next/font/local";

export const iranSans = localFont({
  src: [
    { path: "./IranSans/woff2/IRANSansWeb(FaNum).woff2", weight: "400" },
    // { path: "./IranSans/woff2/IRANSansWeb(FaNum)_Medium.woff2", weight: "500"},
    // { path: "./IranSans/woff2/IRANSansWeb(FaNum)_Bold.woff2", weight: "700"},
  ],
});

// export const morabba = localFont({
//   src: [
//     { path: "./Morabba/woff2/Morabba-light.woff2", weight: "300" },
//     { path: "./Morabba/woff2/Morabba-Medium.woff2", weight: "500" },
//     { path: "./Morabba/woff2/Morabba-Bold.woff2", weight: "700" },
//   ],
// });