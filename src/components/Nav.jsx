'use client'
import { Link } from 'react-scroll'
import { navLinks } from '@/constants'
import { motion } from 'framer-motion'
import { slideIn } from '@/lib/style'

const Item = ({id,title,icon}) => {
  return (
    <Link to={id} smooth={true} spy={true} activeClass='active' className='group relative rounded-full hover:text-secondary [&.active]:hover:text-black'>
      <div className=' absolute hidden sm:group-hover:flex right-14 top-4 justify-items-end items-center'>
        <div className='text-primary text-[12px] bg-black p-1'>{title}</div>
        <div className='border-solid border-l-black border border-y-transparent border-y-[6px] border-l-8 border-r-0 h-[5px]'></div>
      </div>
      <div className='cursor-pointer m-4 text-2xl sm:text-xl group-hover:scale-110'>{icon}</div>
    </Link>
  )
}

const Nav = () => {
  return (
    <motion.div className="z-50 fixed bottom-0 mx-auto inset-x-0 h-[60px] rounded-full  max-w-[450px] w-screen text-primary bg-blue-500/10 flex flex-row justify-between backdrop-blur-sm sm:flex-col sm:h-[400px] sm:w-[50px] sm:mr-2 sm:my-auto sm:inset-y-0 items-center" variants={slideIn("right","spring",0.75)} initial='hidden' animate='visible'>
      {navLinks.map(({id,title,icon}) => (
        <Item key={id} id={id} title={title} icon={icon}/>
      ))}
    </motion.div>
  )
}

export default Nav