'use client'
import styles,{staggerContainer,slideIn} from "@/app/style"
import { sendEmail } from "@/actions/sendEmail"
import toast from 'react-hot-toast'
import SubmitButton from "./SubmitButton"
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <section className="h-screen pt-24 sm:p-24" id ='contact'>
      <motion.h1 className={`text-center text-4xl font-bold mx-10 ${styles.text_gradient}`} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>Contact</motion.h1>
      <motion.p className="text-primary text-center max-w-[500px] mx-auto mt-1" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>Contact me directly at <a className="underline" href="mailto:mohamed.irfan.rashid.am@gmail.com">mohamed.irfan.rashid.am@gmail.com</a></motion.p>
      <motion.form 
        className="flex flex-col p-8 items-center justify-center gap-4" 
        action={async (formData) => {
          const {data,error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
        variants={staggerContainer(0.1,0.2)} initial="hidden" whileInView="visible"
        >
        <motion.input           
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email" 
          className="p-3 w-[min(100%,38rem)] h-10 rounded-md bg-blue-500/10 text-primary border border-secondary/75 outline-none focus:border-primary"
          variants={slideIn("up","spring",0.75)} initial='hidden' whileInView='visible'/>
        <motion.textarea 
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          className="p-3 w-[min(100%,38rem)] h-64 rounded-md bg-blue-500/10 text-primary border border-secondary/75 outline-none focus:border-primary"
          variants={slideIn("up","spring",0.75)} initial='hidden' whileInView='visible'/>
        <motion.div variants={slideIn("up","spring",0.75)} initial='hidden' whileInView='visible'>
          <SubmitButton/>
        </motion.div>
      </motion.form>
    </section>
  )
}

export default Contact