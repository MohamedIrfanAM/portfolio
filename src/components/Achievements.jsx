'use client'
import { useScroll,motion } from "framer-motion"
import { useRef } from "react"

const StarOutline = ({ width, height, color,reference }) => {
  const {scrollYProgress} = useScroll({
    target:reference,
    offset:["end 0.9","start center"]
  })
  return(
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -left-[15px] top-1"
    >
      <motion.path
        d="M12 2L9.7 8.5H3.5L8.2 12.7L6.4 18.2L12 14.3L17.6 18.2L15.8 12.7L20.5 8.5H14.3L12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{pathLength:scrollYProgress}}
      />
    </svg>
  )
}

const Details = ({title,conductor,discription}) => {
  const detailRef = useRef(null) 
  return(
    <div className="px-2 ml-2 mt-3 sm:ml-2 relative">
      <StarOutline width={25} height={25} color={"cyan"} reference={detailRef}/>
      <div className="ml-1">
        <h1 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 decoration-cyan-500 underline">{title}</h1>
        <h2 className="text-primary font-semibold">{conductor}</h2>
        <h2 className="text-secondary max-w-[400px] sm:max-w-[350px]">{discription}</h2>
      </div>
    </div>
  )
}

const Achievements  = () => {
  const achievementDiv = useRef(null)
  const {scrollYProgress} = useScroll({
    target:achievementDiv,
    offset:["start 0.8","end center"]
  })
  return (
    <div ref={achievementDiv} className="relative ml-3">
      <div className="absolute w-[4px] rounded-full bg-black left-1 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <motion.div className="absolute w-[4px] rounded-full bg-cyan-400 left-1 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <Details title="First Prize in Mazerunner competition" conductor={"Hestia 2023,TKM collge of Engineering"} discription={"Build an autonomouse maze solving robot which works on the principle of DFS"} />
      <Details title="Second Prize in Sonorous Hackathon" conductor={"IEDC CET"} discription={"Developed a web-camera controlled mouse system that can effectively serve as a replacement for the traditional computer mouse for individuals with limited use of their forelimbs."} />
    </div>
  )
}

export default Achievements 