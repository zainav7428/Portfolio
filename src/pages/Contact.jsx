import { motion } from "framer-motion";

import {
FaPaperPlane,
FaGithub,
FaLinkedin,
FaInstagram,
FaEnvelope,
FaPhone,
FaMapMarkerAlt
} from "react-icons/fa";



export default function Contact(){
    const handleWhatsApp = (e)=>{

e.preventDefault();


const message = `
Hello Zainav 👋

Name: ${e.target.name.value}

Email: ${e.target.email.value}

Phone: ${e.target.phone.value}

Subject: ${e.target.subject.value}

Message:
${e.target.message.value}
`;


const whatsappURL =
`https://wa.me/917428019252?text=${encodeURIComponent(message)}`;


window.open(whatsappURL,"_blank");


};


return(


<section className="
relative
min-height-screen
overflow-hidden
bg-[#020617]
py-28
text-white
">





{/* BACKGROUND */}

<div className="
absolute
inset-0
bg-gradient-to-br
from-[#020617]
via-[#08021c]
to-[#001b3a]
"/>





{/* PURPLE GLOW */}


<div className="
absolute
left-10
top-20
h-[400px]
w-[400px]
rounded-full
bg-purple-600/30
blur-[160px]
"/>





{/* BLUE GLOW */}



<div className="
absolute
right-10
bottom-20
h-[400px]
w-[400px]
rounded-full
bg-cyan-500/20
blur-[160px]
"/>









{/* STARS */}




















<div className="
relative
z-10
mx-auto
max-w-7xl
px-6
md:px-12
">







<div className="
grid
items-center
gap-16
lg:grid-cols-2
">







{/* LEFT FORM */}




<motion.div


initial={{

opacity:0,
x:-80

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
tracking-[5px]
text-purple-400
font-semibold
mt-10
">

GET IN TOUCH

</p>






<h1 className="
mt-5
text-5xl
font-black
">


Let's work


<span className="
ml-3
bg-gradient-to-r
from-purple-400
to-cyan-400
bg-clip-text
text-transparent
">

together

</span>


</h1>






<p className="
mt-5
max-w-xl
text-gray-400
">

Have a project idea or want to collaborate?
Send me a message and let's create something amazing.

</p>









<form

onSubmit={handleWhatsApp}

className="
mt-8
space-y-5
"

>





<div className="
grid
gap-5
md:grid-cols-2
">



<input

name="name"

placeholder="Your Name"

className="
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
outline-none
placeholder:text-gray-500
focus:border-purple-500
"

/>



<input

name="email"

placeholder="Email Address"

className="
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
outline-none
placeholder:text-gray-500
focus:border-purple-500
"

/>




</div>








<input

name="phone"

placeholder="Phone Number"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
outline-none
placeholder:text-gray-500
focus:border-purple-500
"

/>






<input

name="subject"

placeholder="Subject"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
outline-none
placeholder:text-gray-500
focus:border-purple-500
"

/>






<textarea

name="message"

rows="5"

placeholder="Your Message"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
outline-none
placeholder:text-gray-500
focus:border-purple-500
"

/>







<motion.button

type="submit"

whileHover={{

scale:1.05

}}


whileTap={{

scale:.95

}}


className="
flex
items-center
gap-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-cyan-500
px-8
py-4
font-semibold
shadow-[0_0_30px_rgba(34,211,238,.4)]
"

>


Send Message

<FaPaperPlane/>

</motion.button>





</form>





</motion.div>













{/* RIGHT PLANET */}





<motion.div


initial={{

opacity:0,
scale:.7

}}


whileInView={{

opacity:1,
scale:1

}}


viewport={{

once:true

}}



className="
relative
flex
justify-center
"

>







{/* ORBIT 1 */}



<motion.div


animate={{

rotate:360

}}


transition={{

duration:25,
repeat:Infinity,
ease:"linear"

}}



className="
absolute
h-[360px]
w-[360px]
rounded-full
border
border-purple-500/30
"


>

<div className="
absolute
right-0
top-1/2
h-5
w-5
rounded-full
bg-cyan-400
shadow-[0_0_40px_cyan]
"/>


</motion.div>









{/* ORBIT 2 */}



<motion.div


animate={{

rotate:-360

}}


transition={{

duration:18,
repeat:Infinity,
ease:"linear"

}}


className="
absolute
h-[280px]
w-[280px]
rounded-full
border
border-cyan-400/20
"

/>








{/* PLANET */}



<motion.div


animate={{

y:[0,-20,0]

}}


transition={{

duration:5,
repeat:Infinity

}}



className="
flex
h-[300px]
w-[300px]
items-center
justify-center
rounded-full
border
border-white/10
bg-gradient-to-br
from-purple-600/40
via-blue-500/30
to-cyan-400/30
shadow-[0_0_90px_rgba(124,58,237,.6)]
backdrop-blur-xl
"

>


<div className="
text-center
">


<FaEnvelope

className="
mx-auto
text-6xl
text-cyan-400
"

/>


<h2 className="
mt-5
text-3xl
font-bold
">

Contact

</h2>



<p className="
mt-2
text-gray-300
">

Let's build together

</p>


</div>


</motion.div>






</motion.div>





</div>









{/* INFO CARDS */}



<div className="
mt-16
grid
gap-5
md:grid-cols-3
">





<div className="
flex
items-center
gap-4
rounded-2xl
border
border-white/10
bg-white/5
p-5
">

<FaEnvelope className="text-purple-400"/>

zainav@7428@gmail.com

</div>





<div className="
flex
items-center
gap-4
rounded-2xl
border
border-white/10
bg-white/5
p-5
">

<FaPhone className="text-cyan-400"/>

+91 7428019252

</div>





<div className="
flex
items-center
gap-4
rounded-2xl
border
border-white/10
bg-white/5
p-5
">

<FaMapMarkerAlt className="text-purple-400"/>

India

</div>




</div>








{/* SOCIAL */}



<div className="
mt-10
flex
gap-5
">
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



</div>






</div>






</section>


)

}