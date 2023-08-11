import ProjectCard from "./ProjectCard"
import styles from "@/app/style"
import { projects } from "@/constants"

const Projects = () => {
  return (
    <section className="w-full p-4" id='projects'>
    <h1 className={`text-center sm:text-left text-4xl font-bold mx-10 ${styles.text_gradient}`}>Recent Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:mx-8 mt-4">
        {projects.map(({id,title,discription,image,icon,link}) => (
          <ProjectCard key={id} title={title} discription={discription} image={image} icon={icon} link={link}/>
        ))}
      </div>
    </section>
  )
}

export default Projects