'use client'
import background from "public/experience_bg.png"
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import styles, { fadeIn } from "@/app/style";
import { skills } from "@/constants";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='sm:w-[150px] w-[150px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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

const Experience = () => {
  return (
    <div className="h-screen w-screen relative p-2 sm:p-8" id='experience'>
      <Image src={background} width={700} alt="Neon background" className="absolute bottom-16 sm:bottom-0 right-0"/>
      <h1 className={`text-3xl sm:text-4xl font-bold ${styles.text_gradient}`}>Skills</h1>
      <div className="justify-around sm:w-[800px] flex-wrap gap-6 mt-5 hidden lg:flex">
        {skills.map(({id,title,icon}) => (
          <ServiceCard key={id} title={title} icon={icon}/>
        ))}
      </div>
    </div>
  )
}

export default Experience