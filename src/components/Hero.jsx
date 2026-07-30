// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaArrowDown,
// } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

//       {/* Background Gradient */}
//       <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px] animate-pulse"></div>

//       <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px] animate-pulse"></div>

//       {/* Grid Background */}
//       <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:55px_55px]" />

//       <section className="relative z-10 flex min-h-screen items-center">

//         <div className="mx-auto w-full max-w-[1500px] px-8 md:px-16 lg:px-24 xl:px-36">

//           <div className="grid items-center gap-20 lg:grid-cols-2">

//             {/* LEFT SIDE */}

//             <motion.div
//               initial={{ opacity: 0, x: -80 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//               className="max-w-2xl"
//             >

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: .3 }}
//                 className="mb-5 tracking-[8px] uppercase text-cyan-400 text-lg"
//               >
//                 Hello I'm
//               </motion.p>

//               <motion.h1
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: .5 }}
//                 className="text-6xl font-black leading-none sm:text-7xl lg:text-[110px]"
//               >
//                 ZAINAB
//               </motion.h1>

//               <div className="mt-8 text-3xl font-bold sm:text-5xl">

//                 <span className="text-purple-400">

//                   <Typewriter
//                     words={[
//                       "Frontend Developer",
//                       "React Developer",
//                       "UI Designer",
//                       "Creative Developer",
//                     ]}
//                     loop={0}
//                     cursor
//                     cursorStyle="_"
//                     typeSpeed={80}
//                     deleteSpeed={40}
//                   />

//                 </span>

//               </div>

//               <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

//                 Passionate about building beautiful, modern and
//                 interactive websites using React, Tailwind CSS
//                 and creative animations.

//               </p>

//               {/* Buttons */}

//               <div className="mt-10 flex flex-wrap gap-5">

//                 <button className="group relative overflow-hidden rounded-full bg-cyan-500 px-9 py-4 font-semibold">

//                   <span className="relative z-10">
//                     View Projects
//                   </span>

//                   <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-700 group-hover:translate-x-full"></span>

//                 </button>

//                 <button className="rounded-full border border-white/20 px-9 py-4 font-semibold transition hover:bg-white hover:text-black">

//                   Download CV

//                 </button>

//               </div>

//               {/* Social */}

//               <div className="mt-12 flex gap-5">

//                 <motion.div
//                   whileHover={{
//                     scale: 1.15,
//                     rotate: 360,
//                   }}
//                   className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/20"
//                 >
//                   <FaGithub size={24} />
//                 </motion.div>

//                 <motion.div
//                   whileHover={{
//                     scale: 1.15,
//                     rotate: 360,
//                   }}
//                   className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/20"
//                 >
//                   <FaLinkedin size={24} />
//                 </motion.div>

//               </div>

//             </motion.div>
//                         {/* RIGHT SIDE */}

//             <motion.div
//               initial={{ opacity: 0, scale: 0.7 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1 }}
//               className="relative flex items-center justify-center"
//             >
//               {/* Glow */}

//               <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]"></div>

//               <div className="absolute h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[120px]"></div>

//               {/* Outer Ring */}

//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute h-[430px] w-[430px] rounded-full border border-cyan-400/30"
//               />

//               {/* Middle Ring */}

//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   duration: 15,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute h-[380px] w-[380px] rounded-full border border-purple-500/30"
//               />

//               {/* Floating Image */}

//               <motion.div
//                 animate={{
//                   y: [0, -18, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                 }}
//                 className="relative"
//               >
//                 <img
//                   src="https://i.pravatar.cc/500"
//                   alt="profile"
//                   className="h-[340px] w-[340px] rounded-full border-[8px] border-[#0B1220] object-cover shadow-[0_0_80px_rgba(34,211,238,0.45)]"
//                 />

//                 {/* Small Floating Dots */}

//                 <motion.div
//                   animate={{
//                     y: [0, -15, 0],
//                     x: [0, 10, 0],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                   }}
//                   className="absolute -left-6 top-12 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_25px_cyan]"
//                 />

//                 <motion.div
//                   animate={{
//                     y: [0, 15, 0],
//                     x: [0, -10, 0],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                   }}
//                   className="absolute -right-5 bottom-16 h-6 w-6 rounded-full bg-purple-500 shadow-[0_0_25px_purple]"
//                 />

//                 <motion.div
//                   animate={{
//                     scale: [1, 1.3, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                   className="absolute right-8 top-2 h-3 w-3 rounded-full bg-white"
//                 />
//               </motion.div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* Scroll Down */}

//       <motion.div
//         animate={{
//           y: [0, 15, 0],
//         }}
//         transition={{
//           duration: 1.5,
//           repeat: Infinity,
//         }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <FaArrowDown className="text-3xl text-cyan-400" />
//       </motion.div>

//     </div>
//   );
// }






































