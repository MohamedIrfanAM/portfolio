'use client'
import {AiOutlineHome,AiOutlineContacts,AiOutlineProject,AiOutlineUser,AiOutlineLaptop} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className="fixed bottom-0 mx-auto inset-x-0 h-[60px] rounded-full  max-w-[450px] w-screen text-primary bg-blue-500/10 flex flex-row justify-between backdrop-blur-sm sm:flex-col sm:h-[400px] sm:w-[50px] sm:mr-2 sm:my-auto sm:inset-y-0 items-center">

      <Link to='hero' smooth={true} spy={true} activeClass='active' className='group relative rounded-full hover:text-secondary [&.active]:hover:text-black'>
        <div className=' absolute hidden sm:group-hover:flex right-14 top-4 justify-items-end items-center'>
          <div className='text-primary text-[12px] bg-black p-1'>Home</div>
          <div className='border-solid border-l-black border border-y-transparent border-y-[6px] border-l-8 border-r-0 h-[5px]'></div>
        </div>
        <AiOutlineHome className='cursor-pointer m-4 text-2xl sm:text-xl group-hover:scale-110'/>
      </Link>

      <Link to='about' smooth={true} spy={true} activeClass='active' className='group relative rounded-full hover:text-secondary [&.active]:hover:text-black'>
        <div className=' absolute hidden sm:group-hover:flex right-14 top-4 justify-items-end items-center'>
          <div className='text-primary text-[12px] bg-black p-1'>About</div>
          <div className='border-solid border-l-black border border-y-transparent border-y-[6px] border-l-8 border-r-0 h-[5px]'></div>
        </div>
        <AiOutlineUser className='cursor-pointer m-4 text-2xl sm:text-xl group-hover:scale-110'/>
      </Link>
  
      <Link to='experience' smooth={true} spy={true} activeClass='active' className='group relative rounded-full hover:text-secondary [&.active]:hover:text-black'>
        <div className=' absolute hidden sm:group-hover:flex right-14 top-4 justify-items-end items-center'>
          <div className='text-primary text-[12px] bg-black p-1'>Experience</div>
          <div className='border-solid border-l-black border border-y-transparent border-y-[6px] border-l-8 border-r-0 h-[5px]'></div>
        </div>
        <AiOutlineProject className='cursor-pointer m-4 text-2xl sm:text-xl group-hover:scale-110'/>
      </Link>

      <Link to='projects' smooth={true} spy={true} activeClass='active' className='group relative rounded-full hover:text-secondary [&.active]:hover:text-black'>
        <div className=' absolute hidden sm:group-hover:flex right-14 top-4 justify-items-end items-center'>
          <div className='text-primary text-[12px] bg-black p-1'>Projects</div>
          <div className='border-solid border-l-black border border-y-transparent border-y-[6px] border-l-8 border-r-0 h-[5px]'></div>
        </div>
        <AiOutlineLaptop className='cursor-pointer m-4 text-2xl sm:text-xl group-hover:scale-110'/>
      </Link>

      <Link to='contact' smooth={true} spy={true} activeClass='active' className='group relative rounded-full hover:text-secondary [&.active]:hover:text-black'>
        <div className=' absolute hidden sm:group-hover:flex right-14 top-4 justify-items-end items-center'>
          <div className='text-primary text-[12px] bg-black p-1'>Contact</div>
          <div className='border-solid border-l-black border border-y-transparent border-y-[6px] border-l-8 border-r-0 h-[5px]'></div>
        </div>
        <AiOutlineContacts className='cursor-pointer m-4 text-2xl sm:text-xl group-hover:scale-110'/>
      </Link>

    </div>
  )
}

export default Nav