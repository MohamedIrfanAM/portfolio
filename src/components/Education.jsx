'use client'
import { motion,useScroll } from "framer-motion"
import { useRef } from "react"
import { education } from "@/constants"
import styles from "@/app/style"
import CircleOutline from "./CircleIcon"

const Details = ({course,institute,year,grade}) => {
  const listRef = useRef(null)
  return(
    <li className="flex flex-col" ref={listRef}>
      <CircleOutline reference={listRef}/>
      <div className={`text-lg font-bold ${styles.text_gradient} decoration-cyan-500 underline`}>{course}</div>  
      <div className="text-md text-primary font-bold">{institute}</div>
      <div text className="text-md text-secondary">{year}</div>
      <div className="text-md text-secondary">{grade}</div>
    </li>
  )
}

const Education = () => {
  const educationDiv = useRef(null)
  const {scrollYProgress} = useScroll({
    target:educationDiv,
    offset:["start 0.8","end center"]
  })
  console.log(scrollYProgress)
  return (
    <div className="w-full relative mt-2" ref={educationDiv}>
      <div className="absolute w-[4px] rounded-full bg-black left-3 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <motion.div className="absolute w-[4px] rounded-full bg-cyan-400 left-3 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <ul className="flex flex-col justify-center gap-3 ml-8 mt-1 relative">
        {education.map(({id,course,institute,year,grade}) => (
          <Details key={id} course={course} institute={institute} grade={grade} year={year}/>
        ))} 
      </ul>
    </div>
  )
}

export default Education