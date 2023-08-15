'use client'
import { cyanGlobeBackground } from "../../public";
import Image from "next/image";
import styles, { staggerContainer } from "@/app/style";
import { skills } from "@/constants";
import Slider from "./Slider";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
  <div className="h-screen w-screen relative p-5 sm:p-8" id='skills'>
    <Image src={cyanGlobeBackground} width={700} alt="Neon background" className="absolute bottom-16 sm:bottom-0 right-0"/>
    <h1 className={`text-center sm:text-left text-4xl font-bold ${styles.text_gradient}`}>Skills</h1>
    <div className="sm:hidden">
      <Slider/>
    </div>
    <motion.div className="justify-around max-w-[800px] flex-wrap gap-6 mt-5 hidden sm:flex" variants={staggerContainer(0.1,0.2)} initial="hidden" whileInView="visible">
      {skills.map(({id,title,icon}) => (
        <SkillCard key={id} title={title} icon={icon}/>
      ))}
    </motion.div>
  </div>
  )
}

export default Skills