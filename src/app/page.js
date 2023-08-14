import { Hero,Nav,About,Projects,Experience,Contact} from '@/components'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <main className='bg-dark'>
      <Hero />
      <Nav />
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Toaster position='top-right'/>
     </main>
  )
}
