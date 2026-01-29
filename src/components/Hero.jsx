// import React from 'react'

// const Hero = () => {
//   return (
//     <div className="w-full h-full flex items-center justify-center">
//       <div className="flex items-center flex-col justify-center">
//         <p className="text-white text-4xl font-extralight">
//           Hey, I'm Saif! welcom to my
//         </p>
//         <div>
//           <h1 className='text-white font-["fnt"] text-[8.5vw]'>
//             portfolio
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero


import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <div className="h-screen  flex flex-col justify-center items-center text-white">
      <AnimatedText
        text="Hey, I'm Saif! Welcome to my"
        type="subtitle"
        className="text-3xl font-fnt opacity-80 mb-4"
      />
      <AnimatedText
        text="portfolio."
        type="title"
        className="text-[140px] leading-none"
      />

    </div>
  );
}
