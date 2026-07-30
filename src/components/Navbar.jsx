import { motion } from "framer-motion";
import { useState } from "react";


import { Link } from "react-router-dom";

import {
FaBars,
FaTimes,
FaHome,
FaUser,
FaCode,
FaFolder,
FaEnvelope,
FaMoon, 
FaSun,
FaBriefcase

} from "react-icons/fa";



export default function Navbar(){
    const [darkMode,setDarkMode] = useState(true);


const toggleTheme = ()=>{

setDarkMode(!darkMode);

if(darkMode){

document.documentElement.classList.add("light");

}
else{

document.documentElement.classList.remove("light");

}

};


const [open,setOpen]=useState(false);



const menu=[

{
name:"Home",
path:"/",
icon:<FaHome/>
},

{
name:"About",
path:"/about",
icon:<FaUser/>
},

{
name:"Skills",
path:"/skills",
icon:<FaCode/>
},

{
name:"Projects",
path:"/projects",
icon:<FaFolder/>
},

{
name:"Contact",
path:"/contact",
icon:<FaEnvelope/>
},

{
name:"Experience",
path:"/experience",
icon:<FaBriefcase/>
}

];





return(


<motion.nav


initial={{
y:-100,
opacity:0
}}


animate={{
y:0,
opacity:1
}}


transition={{
duration:.8
}}


className="
fixed
top-4
left-0
right-0
z-50
mx-auto
w-[95%]
rounded-3xl
border
border-white/10
bg-[#070b1c]/80
backdrop-blur-xl
shadow-2xl
"


>


<div className="
flex
items-center
justify-between
px-6
py-4
">





{/* LOGO */}



<Link to="/">

<div className="
flex
items-center
gap-3
">


<div className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-gradient-to-br
from-purple-500
to-cyan-400
text-xl
font-bold
">

Z.

</div>



<div>


<h1 className="
font-bold
text-white
">

Zainav

</h1>


<p className="
text-xs
text-gray-400
">

Developer

</p>


</div>


</div>


</Link>









{/* DESKTOP MENU */}



<div className="
hidden
items-center
gap-2
lg:flex
">


{

menu.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-5
}}


>


<Link

to={item.path}


className="
group
flex
flex-col
items-center
gap-1
rounded-xl
px-5
py-2
text-gray-400
transition
hover:bg-white/10
hover:text-white
"


>


<span className="
text-lg
group-hover:text-purple-400
">

{item.icon}

</span>


<span className="
text-sm
">

{item.name}

</span>


</Link>


</motion.div>


))

}



</div>









{/* RIGHT BUTTON */}



<div className="
flex
items-center
gap-3
">









{/* MOBILE BUTTON */}



<button

onClick={()=>setOpen(!open)}


className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
border
border-white/10
bg-white/5
text-white
lg:hidden
"

>


{
open ?
<FaTimes/>
:
<FaBars/>
}


</button>



</div>





</div>









{/* MOBILE MENU */}



{

open &&


<motion.div


initial={{
opacity:0,
height:0
}}


animate={{
opacity:1,
height:"auto"
}}


className="
mx-4
mb-4
rounded-2xl
border
border-white/10
bg-[#070b1c]
p-4
lg:hidden
"

>


{

menu.map((item,index)=>(


<Link

key={index}

to={item.path}


onClick={()=>setOpen(false)}


className="
flex
items-center
gap-4
rounded-xl
px-4
py-3
text-gray-300
transition
hover:bg-white/10
hover:text-white
"


>


<span className="
text-purple-400
">

{item.icon}

</span>


{item.name}


</Link>


))


}



</motion.div>


}



</motion.nav>


)

}