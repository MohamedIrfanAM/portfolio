import { Hero,Nav,About,Skills,Projects,Contact} from '@/components'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <main className='bg-dark'>
      <Hero />
      <Nav />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Toaster position='top-right'/>
     </main>
  )
}
