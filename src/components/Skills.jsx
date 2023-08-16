'use client'
import { cyanGlobeBackground } from "../../public";
import Image from "next/image";
import styles from "@/app/style";
import Slider from "./SkillsSlider";

const Skills = () => {
  return (
  <div className="h-screen w-screen relative p-5 sm:p-8" id='skills'>
    <Image src={cyanGlobeBackground} width={700} alt="Neon background" className="absolute bottom-16 sm:bottom-0 right-0"/>
    <h1 className={`text-center sm:text-left text-4xl font-bold sm:mx-4 ${styles.text_gradient}`}>Skills</h1>
    <Slider/>
  </div>
  )
}

export default Skills