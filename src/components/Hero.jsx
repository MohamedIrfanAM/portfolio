'use client'
import Image from "next/image"
import { Link as Lk} from "react-scroll"
import Link from "next/link"
import { irfanPortrait } from "../../public"
import { Dancing_Script } from "next/font/google"
import { intro, socialLinks } from "@/constants"
import styles, {fadeIn } from "@/lib/style"
import {BsBoxArrowInUpRight} from "react-icons/bs"
import { motion } from "framer-motion"
import { useTypewriter,Cursor } from "react-simple-typewriter"
import ParticlesContainer from "./ParticlesContainer"
import { useState } from "react"

const dancing_script = Dancing_Script({
  subsets:['latin'],
})

const Hero = () => {
  const [subheading] = useTypewriter({words:['Software Developer','CS Student','Technophile','Robotics Enthusiast'],loop:{},typeSpeed:60,deleteSpeed:80})
  const [buttonHover,setButtonHover] = useState(false)
  return (
    <section className="h-screen w-full p-1" id='hero'>
      <ParticlesContainer/>
      <div className={`text-2xl sm:text-3xl font-bold ${dancing_script.className} ${styles.text_gradient}`}>@irfan_</div>
      <div className="flex flex-col justify-center sm:flex-row-reverse sm:items-center items-center w-screen sm:mt-0 sm:justify-around">
        <motion.div variants={fadeIn("top","spring",0.5,0.75)} initial='hidden' whileInView='visible' className="z-10">
          <Image src={irfanPortrait} width={900} alt="Irfan Neon Triangle Portrait"/>
        </motion.div>
        <div className="flex flex-col sm:pl-[120px] sm:pt-4">
          <motion.div className="text-center sm:text-left" variants={fadeIn("right","spring",0.1,0.75)} initial='hidden' whileInView='visible'>
            <div className="text-cyan-400 text-[28px] font-bold sm:text-[45px]">Hi, I&apos;m Mohamed Irfan</div>
            <div className="font-bold text-primary text-xl sm:text-2xl"><span>{subheading}<Cursor/></span></div>
            <div className="max-w-[300px] mt-1 text-secondary sm:text-md sm:mt-4 sm:max-w-[500px]">{intro}</div>
          </motion.div>
          <motion.div className="mx-auto mt-5 sm:mx-0 sm:mt-7 flex justify-start gap-4 group z-10 " variants={fadeIn("left",'spring',0.5,0.75)} initial='hidden' whileInView='visible'>
            <Link href='/resume' target="_blank" className={`relative hover:scale-110 px-4 py-2 flex justify-between rounded ${buttonHover ? 'bg-dark text-primary border border-primary':'text-dark'}`} onMouseEnter={()=>setButtonHover(false)}>
              {!buttonHover && <motion.span className="absolute inset-0 bg-gradient-to-r from-primary to bg-cyan-400 -z-10 rounded" layoutId="buttonbg"/>}
              Resume
              <BsBoxArrowInUpRight className="ml-1 mt-1 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </Link>
            <Lk to='contact' smooth={true} spy={true} onMouseEnter={()=>setButtonHover(true)} onMouseLeave={()=>setButtonHover(false)}>
              <button className={`py-2 px-4 rounded  hover:scale-110 relative ${buttonHover? 'text-dark': 'bg-dark text-primary border border-primary'}`}>
                {buttonHover && <motion.span className="absolute inset-0 bg-gradient-to-r from-primary to bg-cyan-400 -z-10 rounded" layoutId="buttonbg"/>}
                Contact
              </button>
            </Lk>
          </motion.div>
          <motion.div className="flex flex-row justify-between text-2xl w-[180px] sm:w-[250px] sm:text-3xl text-primary cursor-pointer mt-5 mx-auto sm:mx-0 sm:mt-[100px] z-10" variants={fadeIn("right",'spring',0.5,0.75)} initial='hidden' whileInView='visible'>
            {socialLinks.map(({id,link,icon}) => (
              <Link href={link} key={id} target="_blank" className="hover:text-secondary hover:scale-110">
                {icon}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero