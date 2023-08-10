'use client'
import { useScroll,motion } from "framer-motion"

const StarOutline = ({ width, height, color,reference }) => {
  const {scrollYProgress} = useScroll({
    target:reference,
    offset:["end end","start center"]
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

export default StarOutline