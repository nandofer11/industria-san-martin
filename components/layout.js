import Head from 'next/head'

import { motion } from 'framer-motion'

const variants = {
    hidden: {opacity: 0, x:-200, y:0},
    enter: {opacity: 1, x:0, y:0},
    exit: {opacity: 0, x:0, y:-100},
}

export default function Layout({ children, title, description }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
           
            <motion.main
                variants={variants} // Pasando el obj. variante dentro de Framer motion
                initial='hidden' // Establece estado inicial de variante.hidden
                animate='enter' // Estado animado a variantes.enter
                exit='exit' // Estado de salida (usado más adelante) a variantes.exit
                transition={{type:'linear'}} //estableciendo transición
                className=''
            >
                {children}
            </motion.main>
           
        </>
    )
}