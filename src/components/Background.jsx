import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      <motion.div
        animate={{
          x: [0, 250, -150, 0],
          y: [0, -200, 200, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[140px] top-[-100px] left-[-100px]"
      />

      <motion.div
        animate={{
          x: [0, -250, 100, 0],
          y: [0, 250, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px] bottom-[-100px] right-[-100px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

    </div>
  );
};

export default Background;