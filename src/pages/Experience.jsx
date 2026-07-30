import { motion } from "framer-motion";

import {
FaExternalLinkAlt,
FaLinkedin,
FaCode,
FaCalendarAlt,
FaBriefcase
} from "react-icons/fa";



export default function Experience(){


const experience={

company:"Athenura",

role:"Frontend Developer Intern",

duration:"27 Apr 2026 - 01 Aug 2026",

description:
"Worked on building modern responsive web interfaces using React and Tailwind CSS. Developed reusable components, improved UI experience and collaborated on creating a premium laundry service platform.",


skills:[
"React.js",
"Tailwind CSS",
"JavaScript",
"Responsive Design",
"UI Development"
]

};




return(


<section className="
relative
min-h-screen
overflow-hidden
bg-[#030712]
py-28
text-white
">





{/* Background Glow */}


<motion.div

animate={{

scale:[1,1.2,1],
opacity:[0.3,0.6,0.3]

}}

transition={{

duration:6,
repeat:Infinity

}}

className="
absolute
left-20
top-20
h-[350px]
w-[350px]
rounded-full
bg-purple-600/30
blur-[140px]
"

/>




<motion.div

animate={{

scale:[1,1.3,1]

}}

transition={{

duration:7,
repeat:Infinity

}}

className="
absolute
right-20
bottom-20
h-[350px]
w-[350px]
rounded-full
bg-cyan-500/20
blur-[140px]
"

/>








<div className="
relative
z-10
mx-auto
max-w-6xl
px-6
md:px-12
">







{/* Heading */}



<motion.div


initial={{

opacity:0,
y:-60

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


className="
text-center
"



>


<p className="
text-sm
tracking-[6px]
text-purple-400
font-semibold
mt-10
">

EXPERIENCE

</p>



<h1 className="
mt-5
text-5xl
font-black
">


My


<span className="
ml-3
bg-gradient-to-r
from-purple-400
via-blue-400
to-cyan-400
bg-clip-text
text-transparent
">

Journey

</span>


</h1>


</motion.div>









{/* Experience Card */}



<motion.div


initial={{

opacity:0,
scale:.8,
y:80

}}



whileInView={{

opacity:1,
scale:1,
y:0

}}



viewport={{

once:true

}}



transition={{

duration:1,
type:"spring"

}}



className="
relative
mx-auto
mt-20
max-w-3xl
"

>





{/* Animated Border */}


<div className="
absolute
inset-0
rounded-3xl
bg-gradient-to-r
from-purple-500
via-cyan-400
to-blue-500
blur-md
opacity-40
"/>







<motion.div


whileHover={{

y:-12,
scale:1.03

}}



transition={{

type:"spring",
stiffness:200

}}



className="
relative
rounded-3xl
border
border-white/10
bg-[#07101f]/90
p-10
backdrop-blur-xl
shadow-[0_0_50px_rgba(34,211,238,.15)]
"

>







{/* Top */}



<div className="
flex
items-center
justify-between
">



<div>


<div className="
flex
items-center
gap-3
">


<div className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-gradient-to-r
from-purple-600
to-cyan-500
text-2xl
">

<FaCode/>

</div>



<h2 className="
text-3xl
font-bold
">

{experience.company}

</h2>



</div>


</div>




<FaBriefcase className="
text-4xl
text-cyan-400
"/>



</div>










<p className="
mt-8
text-xl
font-semibold
text-purple-400
">

{experience.role}

</p>






<div className="
mt-4
flex
items-center
gap-3
text-gray-400
">

<FaCalendarAlt/>

{experience.duration}


</div>








<p className="
mt-6
leading-8
text-gray-400
">

{experience.description}

</p>









{/* Skills */}



<div className="
mt-8
flex
flex-wrap
gap-3
">


{

experience.skills.map((skill,index)=>(


<motion.span


key={index}


whileHover={{

scale:1.1

}}


className="
rounded-full
border
border-white/10
bg-white/5
px-4
py-2
text-sm
text-gray-300
"

>

{skill}


</motion.span>


))


}


</div>









{/* Buttons */}



<div className="
mt-10
flex
flex-wrap
gap-5
">





<motion.a


whileHover={{

scale:1.08

}}



href="https://www.athenura.in/"


target="_blank"

rel="noopener noreferrer"


className="
flex
items-center
gap-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-cyan-500
px-6
py-3
font-semibold
"


>


Visit Athenura

<FaExternalLinkAlt/>

</motion.a>







<motion.a


whileHover={{

scale:1.08

}}



href="https://www.linkedin.com/company/athenura/"


target="_blank"

rel="noopener noreferrer"


className="
flex
items-center
gap-3
rounded-xl
border
border-white/20
px-6
py-3
hover:bg-white/10
"


>


<FaLinkedin/>

LinkedIn


</motion.a>







</div>






</motion.div>







</motion.div>









</div>







</section>


)

}