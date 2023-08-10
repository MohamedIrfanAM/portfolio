import {AiOutlineHome,AiOutlineContacts,AiOutlineProject,AiOutlineUser,AiOutlineLaptop,AiOutlineGithub,AiOutlineTwitter,AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import { arduino,c,cpp,react,nextjs,javascript,python,mongodb,postegres,linux,tailwind, codeforces } from '@/assets'

export const intro = "I'm an enthusiastic student of computer science, well-versed in DSA, Robotics, Frontend, Backend, and numerous other domains. I thrive on expanding my knowledge and skills in these areas while seeking new challenges to conquer."

export const about = "I'm a dedicated and passionate computer science student who embarked on my programming journey five years ago. What began as a mere interest has blossomed into a profound love for coding, propelling me to undertake a multitude of projects that span various domains. From crafting intricate robotics projects using Arduino, to delving into the depths of back-end development using Python and JavaScript, I've honed my skills through hands-on experiences. As an avid competitive programmer, I take on challenges with enthusiasm, boasting a commendable rating of over 1000 on Codeforces. My portfolio is a testament to my growth, showcasing my commitment to innovation, problem-solving, and the limitless possibilities that the world of computer science holds."

export const socialLinks = [
  {
    id:"Github",
    link:"https://github.com/MohamedIrfanAM",
    icon:<AiOutlineGithub/>
  },
  {
    id:"LinkedIn",
    link:"https://www.linkedin.com/in/mohamedirfanam/",
    icon:<AiOutlineLinkedin/>
  },
  {
    id:"Twitter",
    link:"https://twitter.com/MohamedIrfanAM",
    icon:<AiOutlineTwitter/>
  },
  {
    id:"Instagram",
    link:"https://www.instagram.com/m._.irf_an/",
    icon:<AiOutlineInstagram/>
  },
]

export const navLinks = [
  {
    id:"hero",
    title:"Home",
    icon:<AiOutlineHome/>
  },
  {
    id:"about",
    title:"Profile",
    icon:<AiOutlineUser/>
  },
  {
    id:"experience",
    title:"Experience",
    icon:<AiOutlineProject/>
  },
  {
    id:"projects",
    title:"Projects",
    icon:<AiOutlineLaptop/>
  },
  {
    id:"contact",
    title:"Contact",
    icon:<AiOutlineContacts/>
  },
]

export const achievemetns = [
  {
    id:1,
    title:"First Prize in Mazerunner competition",
    conductor:"Hestia 2023,TKM collge of Engineering",
    discription:"Build an autonomouse maze solving robot which works on the principle of DFS"
  },
  {
    id:2,
    title:"Second Prize in Sonorous Hackathon",
    conductor:"IEDC CET",
    discription:"Developed a web-camera controlled mouse system that can effectively serve as a replacement for the traditional computer mouse for individuals with limited use of their forelimbs"
  }
]

export const education = [
  {
    id:1,
    course:"Higer Secondary - Computer Science",
    institue:"GVHSS Valapad,Thrissur",
    year:"2020-2022",
    grade:"Grade:97%"
  },
  {
    id:2,
    course:"B.Tech Computer Science and Engineering",
    institue:"Collge of Engineering Trivandrum",
    year:"2022-2026",
    grade:"CGPA:9.59"
  }
]

export const skills = [
  {
    id:1,
    title:"C++",
    icon:cpp,
  },
  {
    id:4,
    title:"C",
    icon:c,
  },
  {
    id:2,
    title:"Python",
    icon:python,
  },
  {
    id:3,
    title:"JavaScript",
    icon:javascript,
  },
  {
    id:6,
    title:"ReactJS",
    icon:react
  },
  {
    id:9,
    title:"Tailwind",
    icon:tailwind
  },
  {
    id:7,
    title:"NextJS",
    icon:nextjs
  },
  {
    id:10,
    title:"Linux",
    icon:linux
  },
  {
    id:11,
    title:"Codeforces",
    icon:codeforces
  },
  {
    id:7,
    title:"MongoDB",
    icon:mongodb
  },
  {
    id:8,
    title:"PostegreSQL",
    icon:postegres
  },
  {
    id:5,
    title:"Arduino",
    icon:arduino
  },
]