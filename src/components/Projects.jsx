'use client'
import styles,{fadeIn} from "@/lib/style"
import ProjectsSlider from "./ProjectsSlider"
import Link from "next/link"
import { BsBoxArrowInUpRight } from "react-icons/bs"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <section className="w-full py-14 lg:pr-24 h-screen " id='projects'>
      <motion.h1 className={`text-center text-4xl font-bold mx-10 relative left-2 ${styles.text_gradient}`} variants={fadeIn("left","spring",0.2,0.75)} initial='hidden' whileInView='visible'>Recent Projects</motion.h1>

      <motion.div variants={fadeIn("right","spring",0.2,0.75)} initial='hidden' whileInView='visible'>
        <ProjectsSlider/>
      </motion.div>

      <motion.div variants={fadeIn("up","spring",0.2,0.75)} initial='hidden' whileInView='visible'>
        <Link href='/projects' target="" className="text-dark bg-gradient-to-r from-primary to bg-cyan-400 hover:scale-110 px-4 py-2 flex justify-between rounded w-[140px] mx-auto mt-5 group">
            All Projects
          <BsBoxArrowInUpRight className="ml-1 mt-1 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
        </Link>
      </motion.div>
    </section>
  )
}

export default Projects