import { staggerContainer,slideIn } from "@/lib/style"
import { motion } from 'framer-motion'
import { projects } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({image,title,icon,discription,link}) => {
  return (
    <div className='mt-4 p-[1px] rounded-[20px] bg-gradient-to-r from-primary to-cyan-400 shadow-black shadow-md mx-4'>
      <div className='bg-dark backdrop-blur-sm rounded-[20px] h-[320px] w-[350px] relative flex justify-evenly items-center flex-col overflow-hidden'>
        <div className="h-[75%] w-full absolute top-0 rounded-[20px] overflow-hidden">
          <Link className="text-primary text-4xl hover:scale-110 hover:text-secondary" href={link} target="_blank">
            <Image src={image} fill={true} objectFit="cover" className="border border-primary hover:scale-110"/>
          </Link>
        </div>
        <div className="absolute bottom-3 w-full h-[20%]">
          <div className="text-primary font-semibold text-lg mx-auto text-center">{title}</div>
          <div className="flex items-center justify-center">
            <div className="text-secondary px-1 max-w-[85%] text-center">{discription}</div>
            <Link className="text-primary text-4xl hover:scale-110 hover:text-secondary" href={link} target="_blank">{icon}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectsGrid = () => {
  return (
    <motion.div className="flex flex-wrap gap-4 justify-center" variants={staggerContainer(0.1,0.2)}  initial="hidden" animate="visible">
      {projects.map(({id,title,discription,image,icon,link}) => (
        <motion.div variants={slideIn("left","spring",0.75)}>
          <ProjectCard key={id} title={title} discription={discription} image={image} icon={icon} link={link}/>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectsGrid