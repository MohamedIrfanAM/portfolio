import { useScroll,motion } from "framer-motion"

const CircleOutline =  ({ reference }) => {
  const {scrollYProgress} = useScroll({
    target:reference,
    offset:["end 0.9","start center"]
  })
  return (
    <svg height="25" width="25" className="absolute -left-7 -rotate-90">
      <motion.circle cx="10" cy="10" r="10" stroke="cyan" fill="#081c29" style={{pathLength:scrollYProgress}} stroke-width="3"/>
      <circle cx="10" cy="10" r="5" fill="cyan" stroke-width="0" className="animate-pulse"/>
    </svg>
  )
}
export default CircleOutline