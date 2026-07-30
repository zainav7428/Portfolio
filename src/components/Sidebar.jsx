import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaFolder,
  FaBriefcase,
  FaEnvelope,
  FaMoon
} from "react-icons/fa";


export default function Sidebar() {

  const menu = [
    {
      name:"Home",
      icon:<FaHome/>
    },
    {
      name:"About",
      icon:<FaUser/>
    },
    {
      name:"Skills",
      icon:<FaCode/>
    },
    {
      name:"Projects",
      icon:<FaFolder/>
    },
    {
      name:"Experience",
      icon:<FaBriefcase/>
    },
    {
      name:"Contact",
      icon:<FaEnvelope/>
    }
  ];


  return (

    <motion.aside

      initial={{
        x:-100,
        opacity:0
      }}

      animate={{
        x:0,
        opacity:1
      }}

      transition={{
        duration:.7
      }}

      className="
        fixed
        left-5
        top-5
        bottom-5
        z-50
        w-[260px]
        rounded-3xl
        border
        border-white/10
        bg-[#070b1c]/90
        backdrop-blur-xl
        shadow-2xl
        px-6
        py-8
      "

    >


      {/* Logo */}

      <div className="flex items-center gap-4 mb-12">


        <div className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-purple-500
          to-cyan-400
          text-2xl
          font-bold
        ">
          M.
        </div>


        <div>

          <h1 className="font-bold text-xl">
            My Portfolio
          </h1>

          <p className="text-sm text-gray-400">
            Frontend Developer
          </p>

        </div>


      </div>




      {/* Menu */}


      <div className="space-y-4">


        {
          menu.map((item,index)=>(

            <motion.a

              key={index}

              whileHover={{
                x:8
              }}

              href="#"

              className="
                flex
                items-center
                gap-5
                rounded-xl
                px-5
                py-4
                text-gray-300
                transition
                hover:bg-white/10
                hover:text-white
              "

            >

              <span className="text-xl">
                {item.icon}
              </span>


              <span>
                {item.name}
              </span>


            </motion.a>

          ))
        }


      </div>




      {/* Bottom Buttons */}


      <div className="
        absolute
        bottom-8
        left-6
        right-6
      ">


        <button className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-white/10
          bg-white/5
          py-3
          text-gray-300
        ">

          <FaMoon/>

        </button>


        <button className="
          mt-4
          w-full
          rounded-xl
          bg-gradient-to-r
          from-purple-600
          to-cyan-500
          py-3
          font-semibold
        ">

          Hire Me

        </button>


      </div>


    </motion.aside>

  );
}