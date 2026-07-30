import { motion } from "framer-motion";

import {
FaGithub,
FaExternalLinkAlt
} from "react-icons/fa";


import learnImg from "../assets/learnpath.png";
import schoolImg from "../assets/school.png";
import laundryImg from "../assets/laundary.png";



export default function Project(){


const projects=[


{
title:"LearnPath AI",

desc:
"AI-powered learning platform that creates personalized learning roadmaps for students and developers.",

image:learnImg,

tags:[
"React",
"Tailwind CSS"
],

live:"https://learnpath-ai-indol.vercel.app/",

github:"https://github.com/zainav7428/LearnpathAi"

},



{
title:"School Website",

desc:
"Modern responsive school website with academics, announcements, events and interactive UI sections.",

image:schoolImg,

tags:[
"React",
"Tailwind CSS"
],

live:"https://school-website-latest.vercel.app/",

github:"https://github.com/V8Suraj/School_Website_Latest"

},



{
title:"Laundry Website",

desc:
"Premium laundry service platform with booking, order tracking and modern user experience.",

image:laundryImg,

tags:[
"React",
"Tailwind CSS"
],

live:"https://ath-laundary.vercel.app/",

github:"https://github.com/Ayush110704/laundary"

}

];



return(


<section className="
relative
overflow-hidden
bg-[#030712]
py-28
text-white
">


{/* BACKGROUND GLOW */}


<div className="
absolute
left-0
top-20
h-[350px]
w-[350px]
rounded-full
bg-purple-600/20
blur-[150px]
"/>



<div className="
absolute
right-0
bottom-20
h-[350px]
w-[350px]
rounded-full
bg-cyan-500/20
blur-[150px]
"/>







<div className="
relative
z-10
mx-auto
max-w-7xl
px-6
md:px-12
">








{/* HEADING */}



<motion.div


initial={{

opacity:0,
y:40

}}


whileInView={{

opacity:1,
y:0

}}


viewport={{

once:true

}}


transition={{

duration:.8

}}



>



<motion.p

initial={{

opacity:0,
x:-30

}}

whileInView={{

opacity:1,
x:0

}}

transition={{

delay:.2

}}



className="
text-sm
tracking-[6px]
font-semibold
text-purple-400
"

>



</motion.p>








<h2 className="
mt-5
text-5xl
font-black
leading-tight
">



<motion.span


initial={{

opacity:0,
y:30

}}


whileInView={{

opacity:1,
y:0

}}


transition={{

delay:.3

}}


>

Some of my

</motion.span>




<br/>






<motion.span


initial={{

opacity:0,
y:30

}}


whileInView={{

opacity:1,
y:0

}}


transition={{

delay:.5

}}



className="
bg-gradient-to-r
from-purple-400
via-blue-400
to-cyan-400
bg-clip-text
text-transparent
"

>


recent works


</motion.span>



</h2>





<motion.div

animate={{

width:["0%","100%","0%"]

}}


transition={{

duration:4,
repeat:Infinity

}}



className="
mt-5
h-[2px]
bg-gradient-to-r
from-purple-500
to-cyan-400
"


/>




</motion.div>










{/* PROJECT GRID */}



<div className="
mt-14
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
">
    {/* PROJECT CARDS */}


{

projects.map((project,index)=>(


<motion.div


key={index}



initial={{

opacity:0,
y:60

}}



whileInView={{

opacity:1,
y:0

}}



viewport={{

once:true,
amount:.3

}}



transition={{

duration:.7,
delay:index*.15

}}



whileHover={{

y:-12

}}



className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
transition
duration-500
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(34,211,238,.25)]
"



>








{/* IMAGE */}



<div className="
relative
h-56
overflow-hidden
">





<motion.img


src={project.image}



animate={{

scale:[1,1.03,1]

}}



transition={{

duration:6,
repeat:Infinity,
ease:"easeInOut"

}}



whileHover={{

scale:1.12

}}



className="
h-full
w-full
object-cover
transition
duration-700
"


/>







{/* IMAGE OVERLAY */}



<div className="
absolute
inset-0
bg-gradient-to-t
from-[#030712]
via-transparent
to-transparent
"/>






{/* MOVING LIGHT */}



<motion.div


animate={{

x:["-120%","200%"]

}}



transition={{

duration:4,
repeat:Infinity,
delay:index

}}



className="
absolute
top-0
left-0
h-full
w-24
bg-gradient-to-r
from-transparent
via-white/20
to-transparent
skew-x-12
"



/>



</div>









{/* CONTENT */}



<div className="
p-6
">






<h3 className="
text-2xl
font-bold
transition
group-hover:text-cyan-400
">

{project.title}

</h3>






<p className="
mt-3
text-sm
leading-6
text-gray-400
">

{project.desc}

</p>









{/* TAGS */}



<div className="
mt-5
flex
flex-wrap
gap-2
">


{

project.tags.map((tag,i)=>(


<motion.span


key={i}


whileHover={{

y:-3,
scale:1.05

}}



className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1
text-xs
text-gray-300
"

>


{tag}


</motion.span>


))


}



</div>
{/* BUTTONS */}



<div className="
mt-6
flex
gap-4
">






{/* LIVE BUTTON */}



<motion.a


href={project.live}


target="_blank"


rel="noopener noreferrer"



whileHover={{

scale:1.08,
y:-3

}}



whileTap={{

scale:.95

}}



className="
flex
items-center
gap-2
rounded-xl
bg-gradient-to-r
from-purple-600
to-cyan-500
px-5
py-2
text-sm
font-semibold
shadow-[0_0_25px_rgba(34,211,238,.35)]
"

>


Live

<FaExternalLinkAlt/>


</motion.a>









{/* GITHUB BUTTON */}



<motion.a


href={project.github}


target="_blank"


rel="noopener noreferrer"



whileHover={{

scale:1.08,
y:-3

}}



whileTap={{

scale:.95

}}



className="
flex
items-center
gap-2
rounded-xl
border
border-white/20
px-5
py-2
text-sm
text-gray-300
transition
hover:bg-white/10
hover:text-white
"



>


<FaGithub/>


Code


</motion.a>






</div>







</div>









{/* CARD GLOW */}



<motion.div


animate={{

opacity:[
0.2,
0.6,
0.2
]

}}



transition={{

duration:3,
repeat:Infinity

}}



className="
absolute
inset-0
rounded-3xl
border
border-cyan-400/20
pointer-events-none
"



/>






</motion.div>


))

}



</div>








</div>


</section>


)


}
