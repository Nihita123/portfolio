import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeText = "✦ NIHITA KOLUKULA ✦ NIHITA KOLUKULA ✦ ";

  return (
    <div className="relative overflow-hidden w-full bg-transparent py-8">
      <motion.div
        className="flex whitespace-nowrap text-white text-[12vw] md:text-[8vw] font-orbitron font-bold tracking-wider"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          },
        }}
      >
        <span className="mx-6">{marqueeText.repeat(10)}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
