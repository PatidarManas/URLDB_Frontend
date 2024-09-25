// import React, { useState } from "react";
// import glogo from "../Google_Icons-09-512.webp";
// import artlogo from "../icons8-art-100.png";
// import illlogo from "../icons8-digital-art-100.png";
// import iconlogo from "../icons8-icon-100.png";
// import logologo from "../icons8-logo-design-100.png";
// import { motion } from "framer-motion";
// import art1 from "../art1.png"
// import art2 from "../art2.png"
// import art3 from "../art3.png"
// import art4 from "../art4.png"
// import art5 from "../art5.png"
// import fire from "../icons8-fire-100.png"
// const Design = () => {
//   const [activeTab, setActiveTab] = useState(3);

//   const tabDetailsArray = [
//     { title: "Art Direction", logo: artlogo, content: <ArtContent /> },
//     { title: "Illustration...", logo: illlogo, content: <IllustrationContent /> },
//     { title: "Logo Design", logo: iconlogo, content: <LogoContent /> },
//     { title: "Iconography...", logo: logologo, content: <IconographyContent /> },
//   ];

  
//   return (
//     <div>
//       <div id="design" className=" flex text-white ">
//         <div
//           id="design-intro"
//           className="flex flex-col items-center mx-auto gap-10"
//         >
//           <h1
//             style={{ fontFamily: "Poppins" }}
//             className="text-6xl font-light text-center w-full"
//           >
//             Design that Inspires
//           </h1>
//           <div className="mt-1 px-20">
//             <div className="bg-white rounded-xl w-[85vw] h-[90vh] overflow-hidden">
//               <div className="flex h-10 px-2 gap-1 rounded-t-xl bg-gray-300 ">
//                 <div className="flex gap-[7px] self-center mr-4">
//                   <div className="h-3 w-3 rounded-full bg-red-500"></div>
//                   <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
//                   <div className="h-3 w-3 rounded-full bg-green-500"></div>
//                 </div>
//                 {tabDetailsArray.map((value, index) => {
//                   return (
//                     <div
//                       onClick={() => {
//                         setActiveTab(index );
//                       }}
//                       className={`flex self-end items-center  text-gray-800 w-44 ${
//                         activeTab == index
//                           ? "bg-white"
//                           : "bg-gray-200 hover:bg-gray-100"
//                       } rounded-t-lg cursor-pointer`}
//                     >
//                       <img src={value.logo} className="w-8 p-1"></img>
//                       <div className="font-mono font-medium">{value.title}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="rounded-xl h-full"
//               >
//                 {tabDetailsArray[activeTab].content}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// function artsectionhovered(id){
//   document.getElementById(`artheading-`+1).style.color="#475569";
//   document.getElementById(`artheading-`+2).style.color="#475569";
//   document.getElementById(`artheading-`+3).style.color="#475569";
//   document.getElementById(`artheading-`+4).style.color="#475569";
//   document.getElementById(`artheading-`+5).style.color="#475569";
//   document.getElementById(`artheading-`+id).style.color="#f1f5f9";
//   document.getElementById(`artdisc-`+1).style.opacity="0";
//   document.getElementById(`artdisc-`+2).style.opacity="0";
//   document.getElementById(`artdisc-`+3).style.opacity="0";
//   document.getElementById(`artdisc-`+4).style.opacity="0";
//   document.getElementById(`artdisc-`+5).style.opacity="0";
//   document.getElementById(`artdisc-`+id).style.opacity="100%";
// }
// function asrtsectionunhovered(id){
//   // document.getElementById(`artheading-`+id).style.color="#475569";

// }

// const ArtContent = () => (
//   <div id="artcomponentcontainer" className="bg-slate-800 h-full w-full flex gap-10 p-10  transition-all duration-300 ">
//     <div className="flex flex-col w-3/5">
//       <h1 id="artheading-1"  style={{fontFamily:"Open Sans"}} onMouseEnter={()=>{artsectionhovered(1)}} className="text-6xl font-bold text-slate-100 py-5 cursor-pointer transition-all duration-700">Discovery & Research </h1>
//       <h1 id="artheading-2" style={{fontFamily:"Open Sans"}} onMouseEnter={()=>{artsectionhovered(2)}} className="text-6xl font-bold text-slate-600 py-5 cursor-pointer transition-all duration-700">Concept Development</h1>
//       <h1 id="artheading-3" style={{fontFamily:"Open Sans"}} onMouseEnter={()=>{artsectionhovered(3)}} className="text-6xl font-bold text-slate-600 py-5 cursor-pointer transition-all duration-700">Design & Refinement</h1>
//       <h1 id="artheading-4" style={{fontFamily:"Open Sans"}} onMouseEnter={()=>{artsectionhovered(4)}} className="text-6xl font-bold text-slate-600 py-5 cursor-pointer transition-all duration-700">Client Review </h1>
//       <h1 id="artheading-5" style={{fontFamily:"Open Sans"}} onMouseEnter={()=>{artsectionhovered(5)}} className="text-6xl font-bold text-slate-600 py-5 cursor-pointer transition-all duration-700">Finalization & Launch</h1>
//     </div>
//     <div className="relative flex flex-col w-2/5">
//       <div id="artdisc-1" className="absolute inset-0 flex flex-col self-center my-auto gap-5  h-full justify-center align-middle transition-all duration-700">
//         <img src={art1} className="h-4/5 mx-auto"></img>
//         <p style={{fontFamily:"Montserrat"}} className="text-slate-300 text-2xl font-mono text-center ">Discover the art and let our research make your thinking reach it to the next level</p>
//       </div>
//       <div id="artdisc-2" className="absolute inset-0 flex flex-col self-center my-auto gap-5 opacity-0 h-full justify-center align-middle transition-all duration-700">
//         <img src={art2} className="h-3/5 mx-auto"></img>
//         <p style={{fontFamily:"Montserrat"}} className="text-slate-300 text-2xl font-mono text-center ">Discover the art and let our research make your thinking reach it to the next level</p>
//       </div>
//       <div id="artdisc-3" className="absolute inset-0 flex flex-col self-center my-auto gap-5 opacity-0 h-full justify-center align-middle transition-all duration-700">
//         <img src={art3} className=" h-3/6 mx-auto"></img>
//         <p style={{fontFamily:"Montserrat"}} className="text-slate-300 text-2xl font-mono text-center ">Discover the art and let our research make your thinking reach it to the next level</p>
//       </div>
//       <div id="artdisc-4" className="absolute inset-0 flex flex-col self-center my-auto gap-5 opacity-0 h-full justify-center align-middle transition-all duration-700">
//         <img src={art4} className="h-3/6 mx-auto"></img>
//         <p style={{fontFamily:"Montserrat"}} className="text-slate-300 text-2xl font-mono text-center ">Discover the art and let our research make your thinking reach it to the next level</p>
//       </div>
//       <div id="artdisc-5" className="absolute inset-0 flex flex-col self-center my-auto gap-5 opacity-0 h-full justify-center align-middle transition-all duration-700">
//         <img src={art5} className="h-3/5 mx-auto"></img>
//         <p style={{fontFamily:"Montserrat"}} className="text-slate-300 text-2xl font-mono text-center ">Discover the art and let our research make your thinking reach it to the next level</p>
//       </div>
//     </div>
//   </div>
// );

// const IllustrationContent = () => (
//   <div className="bg-slate-800 h-full w-full flex gap-10 p-10 flex-wrap items-center justify-center align-middle transition-all duration-300 ">
//     <div className=" w-[300px] h-[200px] bg-slate-200 text-black  border border-[#2d2d2d] rounded-[18px] shadow-[0_2px_22px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-300">
//       <h1>Discovery and Research</h1>
//       <img src={art1} className="h-full mx-auto"></img>
//     </div>
//     <div className=" w-[300px] h-[200px] bg-slate-200 text-black  border border-[#2d2d2d] rounded-[18px] shadow-[0_2px_22px_rgba(0,0,0,0.3)] ">
//     <img src={art2} className="h-full mx-auto"></img>
//     </div>
//     <div className=" w-[300px] h-[200px] bg-slate-200 text-black  border border-[#2d2d2d] rounded-[18px] shadow-[0_2px_22px_rgba(0,0,0,0.3)] ">
//     <img src={art3} className="h-full mx-auto"></img>
//     </div>
//     <div className=" w-[300px] h-[200px] bg-slate-200 text-black  border border-[#2d2d2d] rounded-[18px] shadow-[0_2px_22px_rgba(0,0,0,0.3)] flex align-middle justify-center">
//     <img src={art4} className="w-full rounded-[18px]"></img>
//     </div>
//     <div className=" w-[300px] h-[200px] bg-slate-200 text-black  border border-[#2d2d2d] rounded-[18px] shadow-[0_2px_22px_rgba(0,0,0,0.3)] ">
//     <img src={art5} className="h-full mx-auto"></img>
//     </div>
//   </div>
// );

// const LogoContent = () => (
//   // <div className="bg-slate-800 h-full w-full flex items-center ">
//     <div className="bg-slate-800 flex justify-between p-4 min-h-screen">
//       <div className="w-1/2 flex justify-center items-center relative">
//         <img src={art2} alt="Art" className="w-4/5 relative z-10 border-l-2 border-b-2" />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-center align-middle  m-0 p-0">
//         {Array.from({ length: 20 }, (_, index) => (
//           <div key={index} className=" w-28 h-20">
//             <img src={fire} alt="Art" className=" object-cover relative z-10" />
//           </div>
//         ))}
//       </div>
//     </div>
//   // </div>
// );

// const IconographyContent = () => (
//   <div className="bg-yellow-400 h-full w-full flex items-center ">
//     Iconography content here
//   </div>
// );
// export default Design;
