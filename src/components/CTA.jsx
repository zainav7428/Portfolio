// import { motion } from "framer-motion";
// import { FaArrowRight, FaCode } from "react-icons/fa";

// import skillsImg from "../assets/skills.png";


// export default function CTA(){


// return (

// <section className="
// relative
// overflow-hidden
// bg-[#030712]
// py-28
// text-white
// ">


// {/* Background Glow */}

// <div className="
// absolute
// left-0
// top-20
// h-[400px]
// w-[400px]
// rounded-full
// bg-purple-600/20
// blur-[150px]
// "/>


// <div className="
// absolute
// right-0
// bottom-20
// h-[400px]
// w-[400px]
// rounded-full
// bg-cyan-500/20
// blur-[150px]
// "/>



// <div className="
// relative
// z-10
// mx-auto
// max-w-7xl
// px-6
// md:px-12
// lg:px-20
// ">



// <div className="
// grid
// items-center
// gap-16
// lg:grid-cols-2
// ">





// {/* LEFT CONTENT */}



// <motion.div


// initial={{
// opacity:0,
// x:-60
// }}

// whileInView={{
// opacity:1,
// x:0
// }}

// viewport={{
// once:true
// }}


// >



// <p className="
// text-sm
// tracking-[5px]
// text-purple-400
// font-semibold
// ">

// LET'S CONNECT

// </p>




// <h2 className="
// mt-5
// text-5xl
// font-black
// leading-tight
// ">


// Ready to build

// <span className="
// ml-3
// bg-gradient-to-r
// from-purple-400
// to-cyan-400
// bg-clip-text
// text-transparent
// ">

// something amazing?

// </span>


// </h2>




// <p className="
// mt-6
// max-w-xl
// text-gray-400
// text-lg
// leading-8
// ">

// Let's work together and create
// modern, scalable and beautiful
// digital experiences using latest
// technologies.

// </p>





// <div className="
// mt-10
// flex
// gap-5
// ">



// <motion.button

// whileHover={{
// scale:1.08
// }}

// className="
// flex
// items-center
// gap-3
// rounded-xl
// bg-gradient-to-r
// from-purple-600
// to-cyan-500
// px-8
// py-4
// font-bold
// shadow-[0_0_30px_rgba(34,211,238,.5)]
// "

// >

// Hire Me

// <FaArrowRight/>

// </motion.button>





// <button className="
// rounded-xl
// border
// border-white/20
// bg-white/5
// px-8
// py-4
// font-bold
// backdrop-blur-xl
// ">

// Contact

// </button>



// </div>




// </motion.div>









// {/* RIGHT IMAGE CARD */}



// <motion.div


// initial={{
// opacity:0,
// scale:.7,
// rotateY:-20
// }}

// whileInView={{
// opacity:1,
// scale:1,
// rotateY:0
// }}

// viewport={{
// once:true
// }}


// style={{
// perspective:1000
// }}


// >



// <motion.div


// animate={{
// y:[0,-15,0]
// }}

// transition={{
// duration:4,
// repeat:Infinity,
// ease:"easeInOut"
// }}



// className="
// relative
// h-[500px]
// w-[350px]
// overflow-hidden
// rounded-[40px]
// border
// border-white/20
// bg-white/5
// backdrop-blur-xl
// shadow-[0_0_80px_rgba(34,211,238,.35)]
// "


// >



// {/* Glow */}

// <div className="
// absolute
// inset-0
// bg-gradient-to-tr
// from-purple-500/30
// via-transparent
// to-cyan-400/30
// z-10
// "/>





// {/* Image */}


// <motion.img


// src={skillsImg}


// animate={{
// scale:[1,1.05,1]
// }}

// transition={{
// duration:8,
// repeat:Infinity
// }}



// className="
// h-full
// w-full
// object-cover
// "

// />






// {/* Floating Code Icon */}


// <motion.div

// animate={{
// y:[0,-20,0],
// rotate:360
// }}

// transition={{
// duration:6,
// repeat:Infinity
// }}


// className="
// absolute
// right-6
// top-12
// z-20
// flex
// h-16
// w-16
// items-center
// justify-center
// rounded-2xl
// bg-white/10
// border
// border-white/20
// text-3xl
// text-cyan-400
// backdrop-blur-xl
// "

// >

// <FaCode/>

// </motion.div>




// </motion.div>


// </motion.div>




// </div>


// </div>


// </section>

// );

// }