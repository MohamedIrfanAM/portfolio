import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import styles, { slideIn } from "@/app/style";

const SkillCard = ({ title, icon }) => (
  <Tilt className='sm:w-[150px] w-[150px]'>
    <motion.div
      variants={slideIn("left","spring",0.75)}
      className='w-[150px] p-[1px] rounded-[20px] bg-gradient-to-r from-primary to-cyan-400 shadow-black shadow-md'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-dark backdrop-blur-sm rounded-[20px] py-5 px-12 h-[150px] sm:h-[150px] flex justify-evenly items-center flex-col'
      >
        <Image src={icon} width={75} alt={title}/>

        <h3 className={`${styles.text_gradient} text-[20px] font-bold text-center`}>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default SkillCard