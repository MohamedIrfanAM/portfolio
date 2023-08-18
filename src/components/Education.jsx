'use client'
import { motion,useScroll } from "framer-motion"
import { useRef } from "react"
import { education } from "@/constants"
import styles, { slideIn, staggerContainer } from "@/lib/style"
import CircleOutline from "./CircleIcon"

const Details = ({course,institute,year,grade}) => {
  const listRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:listRef,
    offset:["end 0.9","start center"]
  })
  return(
    <motion.li className="flex flex-col" ref={listRef} variants={slideIn("up","spring",0.75)} initial='hidden' whileInView='visible'>
      <CircleOutline scrollYProgress={scrollYProgress}/>
      <div className={`text-lg font-bold ${styles.text_gradient} decoration-cyan-500 underline`}>{course}</div>  
      <div className="text-md text-primary font-bold">{institute}</div>
      <div className="text-md text-secondary">{year}</div>
      <div className="text-md text-secondary">{grade}</div>
    </motion.li>
  )
}

const Education = () => {
  const educationDiv = useRef(null)
  const {scrollYProgress} = useScroll({
    target:educationDiv,
    offset:["start 0.8","end center"]
  })
  return (
    <div className="w-full relative mt-2" ref={educationDiv}>
      <div className="absolute w-[4px] rounded-full bg-black left-3 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <motion.div className="absolute w-[4px] rounded-full bg-cyan-400 left-3 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <motion.ul className="flex flex-col justify-center gap-3 ml-8 mt-1 relative" variants={staggerContainer(0.5,0.2)} initial="hidden" whileInView="visible">
        {education.map(({id,course,institute,year,grade}) => (
          <Details key={id} course={course} institute={institute} grade={grade} year={year}/>
        ))} 
      </motion.ul>
    </div>
  )
}

export default Education