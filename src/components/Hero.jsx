'use client'
import Image from "next/image"
import { Link } from "react-scroll"
import irfanPotrait from "public/irfan-neon.png"
import { Dancing_Script } from "next/font/google"
import { AiOutlineGithub,AiFillLinkedin,AiOutlineTwitter,AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"

const dancing_script = Dancing_Script({
  subsets:['latin'],
})
const Hero = () => {
  return (
    <section className="h-screen w-full p-1" id='hero'>
      <div className={`text-2xl sm:text-3xl font-bold ${dancing_script.className} bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-200 `}>irfan_</div>
      <div className="flex flex-col justify-center sm:flex-row-reverse sm:items-center items-center w-screen sm:mt-0 sm:justify-around">
        <div>
          <Image src={irfanPotrait} width={900} alt="Irfan Neon Triangle Portrait"/>
        </div>
        <div className="flex flex-col sm:pl-[120px] sm:pt-4" >
          <div className="text-center sm:text-left">
            <div className="text-cyan-400 text-[28px] font-bold sm:text-[45px]">Hi, I'm Mohamed Irfan</div>
            <div className="font-bold text-primary text-xl sm:text-2xl">Software Developer</div>
            <div className="max-w-[300px] mt-1 text-secondary sm:text-md sm:mt-4 sm:max-w-[500px]">I'm an enthusiastic student of computer science, well-versed in DSA, Robotics, Frontend, Backend, and numerous other domains. I thrive on expanding my knowledge and skills in these areas while seeking new challenges to conquer.</div>
          </div>
          <div className="mx-auto mt-5 sm:mx-0 sm:mt-7">
            <Link to='about' smooth={true} spy={true}>
              <button class="bg-gradient-to-r from-primary to-cyan-400 text-black py-2 px-2 rounded">
                Read more
              </button>
            </Link>
          </div>
          <div className="flex flex-row justify-between text-2xl w-[150px] sm:w-[250px] sm:text-3xl text-primary cursor-pointer mt-8 mx-auto sm:mx-0 sm:mt-[100px]">
            <a href="https://github.com/MohamedIrfanAM" target="_blank"><AiOutlineGithub className="hover:text-secondary hover:scale-110"/></a>
            <a href="https://www.linkedin.com/in/mohamedirfanam/" target="_blank"><AiOutlineLinkedin className="hover:text-secondary hover:scale-110"/></a>
            <a href="https://twitter.com/MohamedIrfanAM" target="_blank"><AiOutlineTwitter className="hover:text-secondary hover:scale-110"/></a>
            <a href="https://www.instagram.com/m._.irf_an/" target="_blank"><AiOutlineInstagram className="hover:text-secondary hover:scale-110"/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero