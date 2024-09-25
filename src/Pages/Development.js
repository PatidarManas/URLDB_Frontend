// import React, { useState } from "react";
// import mac from "../MacBook.png";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// const Development = () => {
//   const [development,setdevelopment] = useState("App")
//   function ioshandler(){
//     document.getElementById("dev-ios").style.transform = "scale(1)";
//     document.getElementById("dev-ios").style.top="0"
//     document.getElementById("dev-ios").style.left="-36%"
//     document.getElementById("dev-app").style.opacity="0";
//     document.getElementById("dev-lap").style.opacity="0";
//     document.getElementById("dev-ios").style.opacity="100%";

//   }
//   function apphandler(){
//     document.getElementById("dev-app").style.transform = "scale(1)";
//     document.getElementById("dev-app").style.top="85px"
//     document.getElementById("dev-app").style.left="38%"
//     document.getElementById("dev-ios").style.opacity="0";
//     document.getElementById("dev-lap").style.opacity="0";
//     document.getElementById("dev-app").style.opacity="100%";
//   }
//   function webhandler(){
//     document.getElementById("dev-app").style.transform = "scale(0.75)";
//     document.getElementById("dev-app").style.top="125px"
//     document.getElementById("dev-app").style.left="160px"
//     document.getElementById("dev-ios").style.transform = "scale(0.65)";
//     document.getElementById("dev-ios").style.top="70px"
//     document.getElementById("dev-ios").style.left="-140px"
//     document.getElementById("dev-ios").style.opacity="100%";
//     document.getElementById("dev-app").style.opacity="100%";
//     document.getElementById("dev-lap").style.opacity="100%";
//   }
//   return (
//     <div className=" w-full px-28 py-10 text-white ">
//       <div>
//         <div className="flex justify- px-10 items-start py-4 pb-0 bg-[#ffffff] ">
//           {/* app */}
//           <div id="dev-app" class="scale-[.75] relative top-[125px] left-40 mx-auto border-black bg-white border-[12px]  rounded-t-[2.5rem] border-b-0  w-[300px] z-50 transition-all duration-[700ms]">
//             <div className="mt-5  mx-auto w-4 h-4 rounded-full bg-black flex align-middle justify-center items-center ">
//               <div className=" m-0 p-0  w-2 h-2 border-[1px] border-gray-600 rounded-full bg-black"></div>
//             </div>
//             <div class="h-[32px] w-[3px] bg-black absolute -start-[17px] top-[72px] rounded-s-lg"></div>
//             <div class="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[124px] rounded-s-lg"></div>
//             <div class="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[178px] rounded-s-lg"></div>
//             <div class="h-[64px] w-[3px] bg-black absolute -end-[17px] top-[142px] rounded-e-lg"></div>
//             <div class="rounded-t-[2rem] overflow-hidden w-[272px] h-[272px] bg-white ">
//               <div class="bg-white w-[272px] h-[272px] border-0" alt="" />
//             </div>
//           </div>
//           {/* Laptop */}
//           <div id="dev-lap" className=" block w-[600px] transition-all duration-[700ms]">
//             <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
//               <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] md:max-h-[278px] bg-white ">
//                 <img
//                   src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
//                   class="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg opacity-0"
//                   alt=""
//                 />
//                 <div
//                   class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg opacity- bg-white"
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div class="relative mx-auto bg-black dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
//               <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
//             </div>
//           </div>
//           {/* Ios */}
//           <div id="dev-ios" className="scale-[0.65] relative top-[70px] -left-[140px] border-2 rounded-t-[42px] border-gray-400 bg-white p-0.5 border-b-0 pb-0 transition-all duration-[700ms]">
//             <div className="relative  w-[320px] h-[400px] bg-gradient-to-b from-[] rounded-t-[40px] border-[6px] border-b-0 border-black shadow-lg px-14 py-2">
              
//               <div className=" inset-x-0 top-0 h-[30px] flex items-center justify-between px-4 text-sm text-black mx-4">
//                 <span className="absolute left-6">9:41</span>
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-[90px] h-[20px] bg-black rounded-full"></div>
//                 <div className="absolute right-6 flex items-center space-x-1">
//                   <img
//                     src="https://img.icons8.com/?size=100&id=32264&format=png&color=000000"
//                     alt="Network"
//                     className="w-4 h-4"
//                   />
//                   <img
//                     src="https://img.icons8.com/?size=100&id=85509&format=png&color=000000"
//                     alt="WiFi"
//                     className="w-4 h-4"
//                   />
//                   <img
//                     src="https://img.icons8.com/?size=100&id=11461&format=png&color=000000"
//                     alt="Battery"
//                     className="w-4 h-4"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" bg-[#1d1c20] p-5 text-slate-400 z-50 flex justify-between">
//         <button onClick={()=>{ioshandler()}} className="text-start  text-slate-600 opacity-50 hover:text-slate-400 hover:opacity-60 transition-all duration-500">

//           <div 
          
//             style={{ fontFamily: "Poppins" }}
//             className="text-6xl font-bold "
//           >
//             IOS
//           </div>
//           <div className="text-4xl font-light">Development</div>
//         </button>
//         <button onClick={()=>{webhandler()}} className="text-start  text-slate-600 opacity-50 hover:text-slate-400 hover:opacity-60 transition-all duration-500">

//           <div
//             style={{ fontFamily: "Poppins" }}
//             className="text-6xl font-bold "
//           >
//             Web
//           </div>
//           <div className="text-4xl font-light">Development</div>
//         </button>
//         <button onClick={()=>{apphandler()}} className="text-start text-slate-600 opacity-50 hover:text-slate-400 hover:opacity-60 transition-all duration-500" >

//           <div
//             style={{ fontFamily: "Poppins" }}
//             className="text-6xl font-bold "
//           >
//             App
//           </div>
//           <div className="text-4xl font-light">Development</div>
//         </button>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default Development;