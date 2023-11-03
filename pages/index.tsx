
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import LandingSection from '../containers/LandingSection'
import AboutSection from '../containers/AboutSection'
import ThirdSection from '../containers/ThirdSection'
import ContactSection from '../containers/ContactSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
   <div className='min-h-screen h-auto w-full  flex flex-col items-center justify-start '>
    <LandingSection />
    <AboutSection />
    <ThirdSection />
    <ContactSection />
    <Footer />
 
   </div>
  )
}
