import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({image,title,icon,discription,link}) => {
  return (
    <div className='mt-6 mb-14 p-[1px] rounded-[20px] bg-gradient-to-r w-[350px] from-primary to-cyan-400 shadow-black shadow-md mx-4'>
      <div className='bg-dark backdrop-blur-sm rounded-[20px] h-[390px] w-[400px] relative flex justify-evenly items-center flex-col overflow-hidden'>
        <div className="h-[80%] w-full absolute top-0 rounded-[20px] overflow-hidden">
          <Link className="text-primary text-4xl hover:scale-110 hover:text-secondary" href={link} target="_blank">
            <Image src={image} fill={true} objectFit="cover" className="border border-primary hover:scale-110"/>
          </Link>
        </div>
        <div className="absolute bottom-0 w-full h-[20%]">
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

export default ProjectCard