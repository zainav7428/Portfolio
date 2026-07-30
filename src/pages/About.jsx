import { motion } from "framer-motion";

import {
  FaReact,
  FaServer,
  FaDatabase,
  FaFigma,
  FaCodeBranch
} from "react-icons/fa";

import aboutImg from "../assets/about.png";


export default function About(){


const details = [

{
icon:<FaReact/>,
title:"Frontend",
value:"React.js • Tailwind CSS • HTML • CSS • JavaScript"
},

{
icon:<FaServer/>,
title:"Backend",
value:"Java"
},

{
icon:<FaDatabase/>,
title:"Database",
value:"MySQL "
},

{
icon:<FaFigma/>,
title:"UI/UX",
value:"Figma Designs"
},

{
icon:<FaCodeBranch/>,
title:"Projects",
value:"5+ Built"
}

];



return (

<section className="
relative
min-h-screen
overflow-hidden
bg-[#030712]
text-white
py-24
">



{/* Glow */}

<div className="
absolute
left-0
top-20
h-[400px]
w-[400px]
rounded-full
bg-purple-600/20
blur-[150px]
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
items-center
gap-16
lg:grid-cols-2
">





{/* LEFT */}



<motion.div


initial={{
opacity:0,
x:-60
}}


whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

>


<p className="
text-sm
tracking-widest
text-purple-400
font-semibold
mt-10
">

ABOUT ME

</p>




<h2 className="
mt-5
text-5xl
font-black
leading-tight
">


I'm a 

<span className="
bg-gradient-to-r
from-purple-400
to-cyan-400
bg-clip-text
text-transparent ml-3
">

passionate developer

</span>


<br/>

who loves to create.


</h2>






<p className="
mt-6
max-w-xl
text-gray-400
leading-7
">


I specialize in building modern web applications
using React, Node.js, and other cutting-edge
technologies. I love turning ideas into reality.


</p>






{/* Details */}


<div className="
mt-8
space-y-5
">


{
details.map((item,index)=>(


<motion.div

key={index}

whileHover={{
x:10
}}

className="
flex
items-center
gap-5
"


>


<div className="
text-purple-400
text-xl
">

{item.icon}

</div>



<p className="
w-28
text-gray-400
">

{item.title}

</p>



<p className="
text-white
font-medium
">

{item.value}

</p>



</motion.div>


))
}


</div>






{/* Button */}

<motion.button

whileHover={{
  scale:1.05
}}

whileTap={{
  scale:0.95
}}

className="
mt-10
flex
items-center
gap-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-blue-500
px-8
py-3
font-semibold
text-white
shadow-lg
shadow-purple-500/30
transition
"

>

Explore My Work

<span>
→
</span>


</motion.button>



</motion.div>








{/* RIGHT CARD */}




<motion.div

initial={{
  opacity:0,
  y:80,
  rotateX:-20
}}

whileInView={{
  opacity:1,
  y:0,
  rotateX:0
}}

viewport={{
  once:true
}}

whileHover={{
  scale:1.08,
  rotateY:8
}}

animate={{
  y:[0,-10,0]
}}

transition={{
  y:{
    duration:4,
    repeat:Infinity,
    ease:"easeInOut"
  },

  default:{
    duration:.8,
    ease:"easeOut"
  }
}}

style={{
  perspective:1000
}}

className="
flex
justify-center
"

>


<motion.div

animate={{
boxShadow:[
"0 0 30px rgba(124,58,237,.3)",
"0 0 70px rgba(34,211,238,.5)",
"0 0 30px rgba(124,58,237,.3)"
]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
relative
h-[520px]
w-[300px]
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
"
>


<motion.div

initial={{
x:"-100%"
}}

animate={{
x:"200%"
}}

transition={{
duration:2,
ease:"linear",
delay:0.5
}}

className="
absolute
top-0
left-0
h-full
w-20
bg-gradient-to-r
from-transparent
via-white/20
to-transparent
skew-x-12
z-20
"

/>

<motion.img

src={aboutImg}

whileHover={{
scale:1.08
}}

transition={{
duration:0.5
}}

className="
h-full
w-full
object-cover
"

/>



<div className="
absolute
inset-0
bg-gradient-to-t
from-[#030712]
via-transparent
to-transparent
"/>




<div className="
absolute
bottom-8
left-8
">


<h3 className="
text-3xl
italic
font-serif
">

Zainav

</h3>


<p className="
mt-2
text-gray-300
">

Full Stack Developer

</p>


</div>



</motion.div>



</motion.div>





</div>

</div>


</section>


);

}