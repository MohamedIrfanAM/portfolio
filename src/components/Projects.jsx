import styles from "@/lib/style"
import ProjectsSlider from "./ProjectsSlider"


const Projects = () => {
  return (
    <section className="w-full py-14 lg:pr-24 h-screen" id='projects'>
      <h1 className={`text-center text-4xl font-bold mx-10 relative left-2 ${styles.text_gradient}`}>Recent Projects</h1>
    <ProjectsSlider/>
    </section>
  )
}

export default Projects