import { motion } from "framer-motion"

const CircleOutline =  ({ scrollYProgress }) => {
  return (
    <svg height="25" width="25" className="absolute -left-[29px] -rotate-90">
      <motion.circle cx="11" cy="11" r="10" stroke="cyan" fill="#081c29" style={{pathLength:scrollYProgress}} strokeWidth="2"/>
      <circle cx="11" cy="11" r="5" fill="cyan" strokeWidth="0" className="animate-pulse"/>
    </svg>
  )
}
export default CircleOutline