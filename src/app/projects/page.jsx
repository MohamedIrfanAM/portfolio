'use client'
import styles from "@/lib/style"
import ProjectsGrid from "@/components/ProjectsGrid"
import { BsArrowLeftCircle} from "react-icons/bs"
import Link from "next/link"

function Projects() {
  return (
    <main className="bg-dark p-2 pb-8 min-h-screen">
      <div className="flex flex-col justify-center">
        <Link href={'/#projects'}>
          <BsArrowLeftCircle className={"text-4xl absolute top-2 left-2 text-primary font-bold hover:text-secondary hover:scale-105"}/>
        </Link>
        <h1 className={`${styles.text_gradient} text-4xl font-bold text-center`}>Projects</h1>
        <ProjectsGrid/>
      </div>
    </main>
  )
}

export default Projects