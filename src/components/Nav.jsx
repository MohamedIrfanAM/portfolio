'use client'
import {AiOutlineHome,AiOutlineContacts,AiOutlineProject,AiOutlineProfile,AiOutlineLaptop} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className="fixed bottom-0 mx-auto inset-x-0 h-[60px] rounded-full  max-w-[450px] w-screen text-primary bg-blue-500/10 flex flex-row justify-between backdrop-blur-sm sm:flex-col sm:h-[400px] sm:w-[50px] sm:mr-2 sm:my-auto sm:inset-y-0 items-center">
      <Link to='hero' smooth={true} spy={true} activeClass='active' className='rounded-full'>
        <AiOutlineHome className='cursor-pointer m-4 text-2xl sm:text-xl'/>
      </Link>
      <Link to='about' smooth={true} spy={true} activeClass='active' className='rounded-full'>
        <AiOutlineProfile className='cursor-pointer m-4 text-2xl sm:text-xl'/ >
      </Link>
      <Link to='experience' smooth={true} spy={true} activeClass='active' className='rounded-full'>
        <AiOutlineProject className='cursor-pointer m-4 text-2xl sm:text-xl'/>
      </Link>
      <Link to='projects' smooth={true} spy={true} activeClass='active' className='rounded-full'>
        <AiOutlineLaptop className='cursor-pointer m-4 text-2xl sm:text-xl'/>
      </Link>
      <Link to='contact' smooth={true} spy={true} activeClass='active'className='rounded-full'>
        <AiOutlineContacts className='cursor-pointer m-4 text-2xl sm:text-xl'/>
      </Link>
    </div>
  )
}

export default Nav