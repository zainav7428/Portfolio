import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";
import cv from "../assets/Zainav_CV.pdf";
import profile from "../assets/profile.png";



export default function Home() {


const [mouse,setMouse] = useState({
  x:0,
  y:0
});



useEffect(()=>{


const move = (e)=>{

setMouse({
x:e.clientX,
y:e.clientY
});

};


window.addEventListener(
"mousemove",
move
);


return()=>{

window.removeEventListener(
"mousemove",
move
);

};


},[]);




return(


<section className="
relative
min-h-screen
overflow-hidden
bg-[#030712]
text-white
pt-24
">



{/* Mouse Glow */}


<div

style={{
left:mouse.x-150,
top:mouse.y-150
}}

className="
fixed
z-0
h-[300px]
w-[300px]
rounded-full
bg-cyan-400/10
blur-[120px]
pointer-events-none
"

/>





{/* Background Glow */}


<div className="
absolute
-left-40
top-20
h-[450px]
w-[450px]
rounded-full
bg-purple-600/20
blur-[150px]
"/>



<div className="
absolute
-right-40
bottom-0
h-[450px]
w-[450px]
rounded-full
bg-blue-500/20
blur-[150px]
"/>





{/* Grid Background */}


<div className="
absolute
inset-0
opacity-5
bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
bg-[size:50px_50px]
"/>





<div className="
relative
z-10
mx-auto
max-w-7xl
px-6
md:px-12
lg:px-20
">


<div className="
grid
min-h-[calc(100vh-100px)]
items-center
gap-16
lg:grid-cols-2
">


{/* LEFT SECTION */}


<motion.div


initial={{
opacity:0,
x:-80
}}


animate={{
opacity:1,
x:0
}}


transition={{
duration:.8
}}

>
{/* Available Badge */}


<div className="
inline-flex
items-center
gap-3
rounded-full
border
border-white/10
bg-white/5
px-5
py-2
text-sm
text-gray-300
backdrop-blur-md
mt-16
">


<span className="
h-2
w-2
rounded-full
bg-green-400
animate-pulse
"/>


Available for Work


</div>






{/* Heading */}


<motion.h1


initial={{
opacity:0,
y:60,
filter:"blur(15px)"
}}


animate={{
opacity:1,
y:0,
filter:"blur(0px)"
}}


transition={{
duration:1,
delay:.2
}}


className="
mt-8
text-6xl
font-black
leading-tight
sm:text-7xl
lg:text-8xl
"

>



<motion.span

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8,
delay:.3
}}

>

Hi, I'm

</motion.span>



<br/>





<motion.span


animate={{
backgroundPosition:[
"0% center",
"200% center"
]
}}


transition={{
duration:4,
repeat:Infinity,
ease:"linear"
}}



className="
bg-gradient-to-r
from-purple-400
via-cyan-400
to-blue-500
bg-[length:200%_auto]
bg-clip-text
text-transparent
drop-shadow-[0_0_25px_rgba(34,211,238,.4)]
"

>


Zainab


</motion.span>



</motion.h1>







{/* Typewriter */}



<h2 className="
mt-5
text-3xl
font-bold
">


<Typewriter

words={[
"Full Stack Developer",
"React Developer",
"UI/UX Designer",
"Creative Coder"
]}

loop={0}

cursor

cursorStyle="_"

typeSpeed={80}

deleteSpeed={50}

delaySpeed={1500}

/>


</h2>






{/* Description */}



<p className="
mt-6
max-w-lg
text-lg
leading-8
text-gray-400
">


I create modern digital experiences
with clean code, beautiful UI and
smooth animations using React,
Tailwind CSS and modern technologies.


</p>

 <div className="
 mt-8
 flex
 gap-5
 "></div>

{/* Download CV */}



<motion.a


href={cv}


download="Zainav_CV.pdf"



whileHover={{

scale:1.05

}}



whileTap={{

scale:.95

}}



className="
inline-flex
w-fit
items-center
gap-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-cyan-500
px-7
py-3
font-semibold
text-white
shadow-[0_0_30px_rgba(34,211,238,.4)]
"


>


Download CV


<span>
↓
</span>


</motion.a>




{/* SOCIAL ICONS */}



<motion.div


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:1
}}



className="
mt-10
flex
gap-5
relative
z-50
pb-10
"


>






{/* Github */}


<motion.a


href="https://github.com/zainav7428"

target="_blank"

rel="noopener noreferrer"


whileHover={{
scale:1.15,
rotate:360
}}


whileTap={{
scale:.85
}}



className="
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-white/10
bg-white/5
text-white
backdrop-blur-md
transition
cursor-pointer
hover:border-white
hover:shadow-[0_0_30px_rgba(255,255,255,.6)]
"


>


<FaGithub size={27}/>


</motion.a>







{/* LinkedIn */}


<motion.a


href="https://www.linkedin.com/in/zainav-mansuri-a0a69b325"

target="_blank"

rel="noopener noreferrer"


whileHover={{
scale:1.15,
rotate:360
}}


whileTap={{
scale:.85
}}



className="
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-white/10
bg-white/5
text-white
backdrop-blur-md
transition
cursor-pointer
hover:border-[#0A66C2]
hover:text-[#0A66C2]
hover:shadow-[0_0_30px_rgba(10,102,194,.6)]
"


>


<FaLinkedin size={27}/>


</motion.a>







{/* Instagram */}



<motion.a


href="https://www.instagram.com/zainab_9057/"

target="_blank"

rel="noopener noreferrer"



whileHover={{
scale:1.15,
rotate:360
}}


whileTap={{
scale:.85
}}



className="
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-white/10
bg-white/5
text-white
backdrop-blur-md
transition
cursor-pointer
hover:border-pink-500
hover:text-pink-500
hover:shadow-[0_0_35px_rgba(236,72,153,.7)]
"


>


<FaInstagram size={27}/>


</motion.a>



</motion.div>
      </motion.div>



      {/* RIGHT SECTION */}



      <motion.div


      initial={{
        opacity:0,
        scale:.6
      }}


      animate={{
        opacity:1,
        scale:1
      }}


      transition={{
        duration:1
      }}



      className="
      relative
      flex
      items-center
      justify-center
      h-[550px]
      "


      >





      {/* Glow */}



      <div className="
      absolute
      h-[450px]
      w-[450px]
      rounded-full
      bg-purple-600/30
      blur-[120px]
      "/>




      <div className="
      absolute
      h-[350px]
      w-[350px]
      rounded-full
      bg-cyan-500/20
      blur-[100px]
      "/>







      {/* Tilted Orbit 1 */}



      <motion.div


      animate={{
        rotate:360
      }}


      transition={{
        duration:20,
        repeat:Infinity,
        ease:"linear"
      }}


      className="
      absolute
      h-[430px]
      w-[520px]
      rounded-[50%]
      border
      border-purple-500/50
      rotate-[-18deg]
      "


      >


      <span className="
      absolute
      top-12
      right-16
      h-4
      w-4
      rounded-full
      bg-cyan-400
      shadow-[0_0_30px_#22d3ee]
      "/>


      </motion.div>








      {/* Tilted Orbit 2 */}



      <motion.div


      animate={{
        rotate:-360
      }}


      transition={{
        duration:15,
        repeat:Infinity,
        ease:"linear"
      }}



      className="
      absolute
      h-[340px]
      w-[480px]
      rounded-[50%]
      border
      border-cyan-400/40
      rotate-[25deg]
      "


      >



      <span className="
      absolute
      bottom-8
      left-14
      h-4
      w-4
      rounded-full
      bg-purple-400
      shadow-[0_0_30px_#c084fc]
      "/>



      </motion.div>








      {/* Profile Image */}



      <motion.div


      animate={{
        y:[0,-15,0]
      }}


      transition={{
        duration:4,
        repeat:Infinity
      }}



      className="
      relative
      z-10
      "


      >




      <div className="
relative
h-[330px]
w-[330px]
rounded-full
p-[5px]
bg-gradient-to-r
from-purple-500
via-cyan-400
to-blue-500
shadow-[0_0_80px_rgba(34,211,238,.45)]
">


<div className="
h-full
w-full
overflow-hidden
rounded-full
bg-[#0f172a]
">


<img

src={profile}

alt="profile"

className="
h-full
w-full
object-cover
rounded-full
"

/>


</div>


</div>



      </motion.div>









      {/* React Card */}



      <motion.div


      animate={{
        y:[0,-20,0]
      }}


      transition={{
        duration:3,
        repeat:Infinity
      }}



      className="
      absolute
      right-5
      top-20
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-white/10
      border
      border-white/20
      backdrop-blur-xl
      text-3xl
      "


      >

      ⚛️


      </motion.div>









      {/* JavaScript Card */}



      <motion.div


      animate={{
        y:[0,20,0]
      }}


      transition={{
        duration:3.5,
        repeat:Infinity
      }}



      className="
      absolute
      left-0
      bottom-24
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-yellow-400
      font-bold
      text-black
      shadow-[0_0_30px_#facc15]
      "


      >

      JS


      </motion.div>









      {/* TypeScript Card */}



      <motion.div


      animate={{
        y:[0,-15,0]
      }}


      transition={{
        duration:4,
        repeat:Infinity
      }}



      className="
      absolute
      right-20
      bottom-10
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-blue-500
      font-bold
      shadow-[0_0_30px_#3b82f6]
      "


      >

      TS


      </motion.div>
      

      </motion.div>


      </div>


      </div>


    


      </section>


  );

}




































