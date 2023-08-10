'use client'
import Image from "next/image"
import { Link as Lk} from "react-scroll"
import Link from "next/link"
import irfanPotrait from "public/irfan-neon.png"
import { Dancing_Script } from "next/font/google"
import { intro, socialLinks } from "@/constants"
import styles from "@/app/style"

const dancing_script = Dancing_Script({
  subsets:['latin'],
})

const Hero = () => {
  return (
    <section className="h-screen w-full p-1" id='hero'>
      <div className={`text-2xl sm:text-3xl font-bold ${dancing_script.className} ${styles.text_gradient}`}>irfan_</div>
      <div className="flex flex-col justify-center sm:flex-row-reverse sm:items-center items-center w-screen sm:mt-0 sm:justify-around">
        <div>
          <Image src={irfanPotrait} width={900} alt="Irfan Neon Triangle Portrait"/>
        </div>
        <div className="flex flex-col sm:pl-[120px] sm:pt-4" >
          <div className="text-center sm:text-left">
            <div className="text-cyan-400 text-[28px] font-bold sm:text-[45px]">Hi, I'm Mohamed Irfan</div>
            <div className="font-bold text-primary text-xl sm:text-2xl">Software Developer</div>
            <div className="max-w-[300px] mt-1 text-secondary sm:text-md sm:mt-4 sm:max-w-[500px]">{intro}</div>
          </div>
          <div className="mx-auto mt-5 sm:mx-0 sm:mt-7">
            <Lk to='about' smooth={true} spy={true}>
              <button class="bg-gradient-to-r from-primary to-cyan-400 text-black py-2 px-2 rounded">
                Read more
              </button>
            </Lk>
          </div>
          <div className="flex flex-row justify-between text-2xl w-[150px] sm:w-[250px] sm:text-3xl text-primary cursor-pointer mt-8 mx-auto sm:mx-0 sm:mt-[100px]">
            {socialLinks.map(({id,link,icon}) => (
              <Link href={link} key={id} target="_blank" className="hover:text-secondary hover:scale-110">
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero