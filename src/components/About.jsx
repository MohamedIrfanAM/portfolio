'use client'
import { useState } from "react"
import Education from "./Education.jsx"
import Achievements from "./Achievements.jsx"
import { about } from "@/constants/index.js"
import styles from "@/app/style.js"

const About = () => {
  const [tab,setTab] = useState(1)
  console.log(tab==1)
  return (
    <section className="min-h-screen p-1 flex flex-col sm:flex-row sm:items-start sm:justify-between" id='about'>
      <div className="mt-3 flex flex-col justify-center items-center text-center sm:mt-[150px] sm:text-left sm:ml-4 sm:items-start">
        <div className={`text-3xl sm:text-4xl font-bold ${styles.text_gradient}`}>About Me</div>
        <div className="max-w-sm text-primary mt-2 leading-6 sm:max-w-lg sm:text-[17px] ">{about}</div>
      </div>

      <div className="sm:hidden">
        <div className="w-[280px] h-[50px] mx-auto bg-blue-500/10 backdrop-blur-lg rounded-full mt-4 flex justify-around items-center">
            <button className={`py-[9px] px-4 rounded-full  ${tab == 1 ? 'text-dark font-semibold bg-gradient-to-r from-primary from-[50%] to-cyan-400' : 'text-primary border border-primary' } `} onClick={()=>setTab(1)}>Education</button>
            <button className={`py-[9px] px-4 rounded-full  ${tab == 2 ? 'text-dark font-semibold bg-gradient-to-r from-primary from-[50%] to-cyan-400' : 'text-primary border border-primary' } `} onClick={()=>setTab(2)}>Achievements</button>
        </div>
        {tab == 1 ? <Education/> : <Achievements/>}
      </div>
      <div className="hidden sm:block mt-[150px]">
        <div className={`text-3xl sm:text-4xl font-bold mb-4 ${styles.text_gradient}`}>Education</div>
        <Education/>
      </div>
      <div className="hidden sm:block mr-16 mt-[150px]">
        <div className={`text-3xl sm:text-4xl font-bold ${styles.text_gradient}`}>Achievements</div>
        <Achievements/>
      </div>
    </section>
  )
}

export default About