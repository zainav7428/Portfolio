import { motion } from "framer-motion";

import {
FaReact,
FaJava,
FaNodeJs,
FaGitAlt
} from "react-icons/fa";

import {
SiTailwindcss,
SiJavascript,
SiMongodb,
SiMysql,
SiSpringboot
} from "react-icons/si";


import skillsImg from "../assets/skills.png";



export default function Skills(){


const skills=[

{
name:"React.js",
icon:<FaReact/>,
desc:"Building interactive and reusable UI components.",
color:"text-cyan-400"
},

{
name:"Java",
icon:<FaJava/>,
desc:"Object oriented programming and backend development.",
color:"text-orange-400"
},

{
name:"Node.js",
icon:<FaNodeJs/>,
desc:"Server side runtime for scalable applications.",
color:"text-green-400"
},


{
name:"MongoDB",
icon:<SiMongodb/>,
desc:"NoSQL database for modern applications.",
color:"text-green-400"
},


{
name:"Spring Boot",
icon:<SiSpringboot/>,
desc:"Creating powerful backend APIs.",
color:"text-green-500"
},


{
name:"MySQL",
icon:<SiMysql/>,
desc:"Relational database management.",
color:"text-blue-400"
},


];



return(


<section className="
relative
overflow-hidden
bg-[#030712]
py-28
text-white
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
absolute
right-0
bottom-10
h-[400px]
w-[400px]
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

>








<h2 className="
mt-5
text-6xl
font-black
leading-tight
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

Skills

</span>


</h2>






<p className="
mt-6
max-w-xl
text-gray-400
text-lg
leading-8
">

I work with modern technologies to build
scalable, fast and beautiful web applications.

</p>








{/* Skill Cards */}



<div className="
mt-10
grid
gap-5
sm:grid-cols-2
">



{
skills.map((skill,index)=>(



<motion.div


key={index}


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
delay:index*.1
}}



whileHover={{
y:-8,
scale:1.03
}}



className="
rounded-3xl
border
border-white/10
bg-white/5
p-5
backdrop-blur-xl
"

>


<div className={`
text-4xl
${skill.color}
`}>

{skill.icon}

</div>



<h3 className="
mt-4
text-xl
font-bold
">

{skill.name}

</h3>



<p className="
mt-2
text-sm
text-gray-400
">

{skill.desc}

</p>



</motion.div>


))

}


</div>







</motion.div>









{/* RIGHT IMAGE */}



<motion.div


initial={{
opacity:0,
scale:.8
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
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
y:[0,-15,0]
}}

transition={{
duration:4,
repeat:Infinity
}}



whileHover={{
scale:1.05
}}



className="
relative
h-[620px]
w-[400px]
overflow-hidden
rounded-[40px]
border
border-white/20
bg-white/5
shadow-[0_0_80px_rgba(34,211,238,.3)]
"

>





<div className="
absolute
inset-0
bg-gradient-to-tr
from-purple-500/30
to-cyan-400/20
z-10
"/>




<motion.img


src={skillsImg}


animate={{
scale:[1,1.04,1]
}}

transition={{
duration:8,
repeat:Infinity
}}



className="
h-full
w-full
object-cover
"

/>






<div className="
absolute
right-8
top-10
z-20
rounded-2xl
bg-white/10
p-5
text-4xl
text-cyan-400
backdrop-blur-xl
">

<FaReact/>

</div>





<div className="
absolute
left-8
bottom-20
z-20
rounded-2xl
bg-white/10
p-5
text-4xl
text-orange-400
backdrop-blur-xl
">

<FaJava/>

</div>





<div className="
absolute
right-10
bottom-10
z-20
rounded-2xl
bg-white/10
p-5
text-4xl
text-green-400
backdrop-blur-xl
">

<FaNodeJs/>

</div>





</motion.div>



</motion.div>







</div>



</div>



</section>



)

}