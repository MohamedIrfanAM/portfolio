'use client'
import { useScroll,motion } from "framer-motion"
import { useRef } from "react"
import { achievemetns } from "@/constants"
import styles,{staggerContainer,slideIn} from "@/lib/style"
import StarOutline from "./StarIcon"

const Details = ({title,conductor,discription}) => {
  const detailRef = useRef(null) 
  return(
    <motion.div className="px-2 ml-2 mt-3 sm:ml-2 relative" ref={detailRef} variants={slideIn("up","spring",0.75)} initial='hidden' whileInView='visible'>
      <StarOutline width={25} height={25} color={"cyan"} reference={detailRef}/>
      <div className="ml-1">
        <h1 className={`text-lg font-semibold ${styles.text_gradient} decoration-cyan-500 underline`}>{title}</h1>
        <h2 className="text-primary font-semibold">{conductor}</h2>
        <h2 className="text-secondary max-w-[400px] sm:max-w-[350px]">{discription}</h2>
      </div>
    </motion.div>
  )
}

const Achievements  = () => {
  const achievementDiv = useRef(null)
  const {scrollYProgress} = useScroll({
    target:achievementDiv,
    offset:["start 0.8","end center"]
  })
  return (
    <motion.div ref={achievementDiv} className="relative ml-3" variants={staggerContainer(0.5,0.2)} initial="hidden" whileInView="visible">
      <div className="absolute w-[4px] rounded-full bg-black left-1 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <motion.div className="absolute w-[4px] rounded-full bg-cyan-400 left-1 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      {achievemetns.map(({id,title,conductor,discription}) => (
        <Details key={id} title={title} conductor={conductor} discription={discription} />
      ))}
    </motion.div>
  )
}

export default Achievements 