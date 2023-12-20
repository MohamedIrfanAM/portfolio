import {AiOutlineYoutube,AiOutlineHome,AiOutlineContacts,AiOutlineUser,AiOutlineLaptop,AiOutlineGithub,AiOutlineTwitter,AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import {SiCodeforces} from 'react-icons/si'
import {PiWrench} from 'react-icons/pi'
import { arduino,c,cpp,react,nextjs,javascript,python,mongodb,postegres,linux,tailwind, codeforces,nodejs,framer,git,docker } from '@/assets'
import { mazecruizer,books2notion,contest2calender,cameraControlledMouse,writingMachine,esp32HomeAutomation,textrade } from '../../public'

export const intro = "I'm an enthusiastic student of computer science, well-versed in DSA, Robotics, Frontend, Backend, and numerous other domains. I thrive on expanding my knowledge and skills in these areas while seeking new challenges to conquer."

export const about = "I'm a dedicated and passionate computer science student who embarked on my programming journey five years ago. What began as a mere interest has blossomed into a profound love for coding, propelling me to undertake a multitude of projects that span various domains. From crafting intricate robotics projects using Arduino, to delving into the depths of back-end development using Python and JavaScript, I've honed my skills through hands-on experiences. As an avid competitive programmer, I take on challenges with enthusiasm, boasting a commendable rating of over 1200 on Codeforces and 1440 on Codechef. My portfolio is a testament to my growth, showcasing my commitment to innovation, problem-solving, and the limitless possibilities that the world of computer science holds."

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
    id:"Codeforces",
    link:"https://codeforces.com/profile/irfan_",
    icon:<SiCodeforces/>
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
    id:"skills",
    title:"Skills",
    icon:<PiWrench/>
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
  },
  {
    id:3,
    title:"First Prize in Micromouse competition",
    conductor:"Conscientia 2023,Indian Institute of Space Science and Technology",
    discription:"Developed an autonomouse maze solving robot which uses of Flood Fill Algorithm"
  },
]

export const education = [
  {
    id:1,
    course:"Higher Secondary - Computer Science",
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
    id:2,
    title:"C",
    icon:c,
  },
  {
    id:3,
    title:"Python",
    icon:python,
  },
  {
    id:4,
    title:"JavaScript",
    icon:javascript,
  },
  {
    id:5,
    title:"ReactJS",
    icon:react
  },
  {
    id:6,
    title:"Tailwind",
    icon:tailwind
  },
  {
    id:7,
    title:"NextJS",
    icon:nextjs
  },
  {
    id:14,
    title:"Framer",
    icon:framer
  },
  {
    id:13,
    title:"NodeJS",
    icon:nodejs
  },
  {
    id:8,
    title:"MongoDB",
    icon:mongodb
  },
  {
    id:9,
    title:"PostegreSQL",
    icon:postegres
  },
  {
    id:15,
    title:"Docker",
    icon:docker
  },
  {
    id:11,
    title:"Codeforces",
    icon:codeforces
  },
  {
    id:10,
    title:"Linux",
    icon:linux
  },
  {
    id:16,
    title:"Git",
    icon:git
  },
  {
    id:12,
    title:"Arduino",
    icon:arduino
  },
]

export const projects = [
  {
    id:0,
    title:"Textrade",
    discription:"A web app for trading used books in college",
    image:textrade,
    icon:<AiOutlineGithub/>,
    link:"https://github.com/mohamedirfanam/textrade"
  },
  {
    id:1,
    title:"MazeCruizer",
    discription:"An autonomous maze solving robot using DFS",
    image:mazecruizer,
    icon:<AiOutlineGithub/>,
    link:"https://github.com/MohamedIrfanAM/Arduino/tree/master/MazeCruizer"
  },
  {
    id:2,
    title:"Books2Notion",
    discription:"Python script for syncing Google Play Books highlights to Notion",
    image:books2notion,
    icon:<AiOutlineGithub/>,
    link:"https://github.com/MohamedIrfanAM/books2notion"
  },
  {
    id:3,
    title:"Contest2Calender",
    discription:"Python script to sync CP contests date to Google calander todoist",
    image:contest2calender,
    icon:<AiOutlineGithub/>,
    link:"https://github.com/MohamedIrfanAM/contest2calender"
  },
  {
    id:4,
    title:"Camera Contolled Mouse",
    discription:"Program for controlling mouse using facial expressions using OpenCV",
    image:cameraControlledMouse,
    icon:<AiOutlineGithub/>,
    link:"https://github.com/MohamedIrfanAM/CameraControlledMouse"
  },
  {
    id:5,
    title:"Writing Machine",
    discription:"GRBL based 2D plotter that can draw write with corresponding GCODE",
    image:writingMachine,
    icon:<AiOutlineYoutube/>,
    link:"https://photos.app.goo.gl/ma2X6CbEAKHCredk9"
  },
  {
    id:6,
    title:"ESP32 Home Automation",
    discription:"ESP32 based home automation using Esprainmaker platform",
    image:esp32HomeAutomation,
    icon:<AiOutlineGithub/>,
    link:"https://github.com/MohamedIrfanAM/Arduino/tree/master/HostelRoomAutomation"
  },
]