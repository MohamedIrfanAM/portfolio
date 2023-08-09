'use client'
import { useState } from "react"
import Education from "./Education.jsx"
import Achievements from "./Achievements.jsx"

const About = () => {
  const [tab,setTab] = useState(1)
  console.log(tab==1)
  return (
    <section className="min-h-screen p-1 flex flex-col sm:flex-row sm:items-start sm:justify-between" id='about'>
      <div className="mt-3 flex flex-col justify-center items-center text-center sm:mt-[150px] sm:text-left sm:ml-4 sm:items-start">
        <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">About Me</div>
        <div className="max-w-sm text-primary mt-2 leading-6 sm:max-w-lg sm:text-[17px] ">I'm a dedicated and passionate computer science student who embarked on my programming journey five years ago. What began as a mere interest has blossomed into a profound love for coding, propelling me to undertake a multitude of projects that span various domains. From crafting intricate robotics projects using Arduino, to delving into the depths of back-end development using Python and JavaScript, I've honed my skills through hands-on experiences. As an avid competitive programmer, I take on challenges with enthusiasm, boasting a commendable rating of over 1000 on Codeforces. My portfolio is a testament to my growth, showcasing my commitment to innovation, problem-solving, and the limitless possibilities that the world of computer science holds.</div>
      </div>

      <div className="sm:hidden">
        <div className="w-[280px] h-[50px] mx-auto bg-blue-500/10 backdrop-blur-lg rounded-full mt-4 flex justify-around items-center">
            <button className={`py-[9px] px-4 rounded-full  ${tab == 1 ? 'text-dark font-semibold bg-gradient-to-r from-primary from-[50%] to-cyan-400' : 'text-primary border border-primary' } `} onClick={()=>setTab(1)}>Education</button>
            <button className={`py-[9px] px-4 rounded-full  ${tab == 2 ? 'text-dark font-semibold bg-gradient-to-r from-primary from-[50%] to-cyan-400' : 'text-primary border border-primary' } `} onClick={()=>setTab(2)}>Achievements</button>
        </div>
        {tab == 1 ? <Education/> : <Achievements/>}
      </div>
      <div className="hidden sm:block mt-[150px]">
        <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 mb-4">Education</div>
        <Education/>
      </div>
      <div className="hidden sm:block mr-16 mt-[150px]">
        <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">Achievements</div>
        <Achievements/>
      </div>
    </section>
  )
}

export default About