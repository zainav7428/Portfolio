import { motion } from "framer-motion";

import {
FaGithub,
FaLinkedin,
FaInstagram,
FaEnvelope,
FaPhone,
FaMapMarkerAlt,
FaArrowUp
} from "react-icons/fa";



export default function Footer(){



const socials=[

{
icon:<FaGithub/>,
link:"https://github.com/zainav7428"
},

{
icon:<FaLinkedin/>,
link:"https://www.linkedin.com/in/zainav-mansuri-a0a69b325"
},

{
icon:<FaInstagram/>,
link:"https://www.instagram.com/zainab_9057/"
}

];



const links=[
"Home",
"About",
"Skills",
"Projects",
"Contact"
];



const services=[
"Frontend Development",
"Backend Development",
"UI/UX Design",
"API Integration"
];



const tech=[
"React.js",
"Tailwind CSS",
"Java",
"Spring Boot"
];




return(


<footer className="
relative
overflow-hidden
w-full
bg-[#030712]
text-white
pt-16
">






{/* BACKGROUND GLOW */}



<div className="
absolute
top-0
left-0
h-[400px]
w-[400px]
rounded-full
bg-purple-600/20
blur-[150px]
"/>




<div className="
absolute
bottom-0
right-0
h-[400px]
w-[400px]
rounded-full
bg-cyan-500/20
blur-[150px]
"/>








{/* FLOATING BUBBLES */}



{

[1,2,3,4,5].map((item)=>(


<motion.div


key={item}


animate={{

y:[0,-120,0],
opacity:[0.2,0.6,0.2]

}}


transition={{

duration:5+item,
repeat:Infinity,
delay:item

}}



className="
absolute
bottom-0
h-16
w-16
rounded-full
bg-gradient-to-br
from-purple-500/30
to-cyan-400/20
blur-xl
"


style={{

left:`${item*18}%`

}}


/>


))

}








{/* MAIN FOOTER */}



<div className="
relative
z-10
border-t
border-white/10
bg-white/5
backdrop-blur-xl
px-6
py-12
md:px-16
">







<div className="
grid
gap-10
sm:grid-cols-2
lg:grid-cols-5
">







{/* BRAND */}



<div>



<motion.h2

animate={{

backgroundPosition:[
"0%",
"200%"
]

}}


transition={{

duration:5,
repeat:Infinity

}}



className="
text-4xl
font-black
bg-gradient-to-r
from-purple-400
via-cyan-400
to-blue-500
bg-[length:200%_auto]
bg-clip-text
text-transparent
"

>

ZAINAV.

</motion.h2>






<p className="
mt-2
text-sm
tracking-[4px]
text-purple-400
">

FULL STACK DEVELOPER

</p>





<p className="
mt-5
text-sm
leading-7
text-gray-400
">

Creating modern websites with
beautiful UI, clean code and
smooth user experiences.

</p>






{/* SOCIAL ICONS */}



<div className="
mt-6
flex
gap-4
">


{

socials.map((item,index)=>(


<motion.a


key={index}


href={item.link}

target="_blank"

rel="noopener noreferrer"



whileHover={{

scale:1.2,
y:-8,
rotate:360

}}


whileTap={{

scale:.9

}}



className="
flex
h-12
w-12
items-center
justify-center
rounded-full
border
border-white/10
bg-white/5
text-xl
transition
hover:text-cyan-400
hover:border-cyan-400
hover:shadow-[0_0_30px_rgba(34,211,238,.6)]
"



>


{item.icon}



</motion.a>



))

}



</div>





</div>









<FooterBox

title="Quick Links"

items={links}

/>





<FooterBox

title="Services"

items={services}

/>






<FooterBox

title="Technologies"

items={tech}

/>









{/* CONTACT */}



<div>


<h3 className="
font-bold
text-purple-400
">

Contact

</h3>



<div className="
mt-5
space-y-4
text-sm
text-gray-400
">



<p className="
flex
items-center
gap-3
hover:text-cyan-400
transition
">

<FaEnvelope/>

zainav7428@gmail.com


</p>




<p className="
flex
items-center
gap-3
hover:text-cyan-400
transition
">

<FaPhone/>

+91 7428019252


</p>





<p className="
flex
items-center
gap-3
hover:text-cyan-400
transition
">

<FaMapMarkerAlt/>

India


</p>




</div>



</div>







</div>










{/* BOTTOM */}




<div className="
mt-12
border-t
border-white/10
pt-6
text-sm
text-gray-400
text-center
">





<p>

© 2026 Zainav. All Rights Reserved.

</p>













</div>






</div>






</footer>


)

}





function FooterBox({title,items}){


return(


<div>


<h3 className="
font-bold
text-purple-400
">

{title}

</h3>



<ul className="
mt-5
space-y-3
text-sm
text-gray-400
">


{

items.map((item,index)=>(


<motion.li


key={index}


whileHover={{

x:8,
color:"#22d3ee"

}}



className="
cursor-pointer
transition
"


>

{item}


</motion.li>


))


}


</ul>



</div>


)


}