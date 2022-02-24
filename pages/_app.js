import '../styles/globals.css'

import TopBar from '../components/topbar'
import Navegacion from '../components/navegacion'
import Footer from '../components/footer'
import { AnimatePresence } from 'framer-motion'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react'
// ..


function MyApp({ Component, pageProps, router }) {

  useEffect(()=>{
    AOS.init({
      useClassNames: false
    })
  },[])

  const url = router.route

  return <>
    <TopBar />
    <Navegacion/>
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >

      <Component {...pageProps} key={url}/>
    </AnimatePresence>
    <Footer/>
  </>
  
}

export default MyApp