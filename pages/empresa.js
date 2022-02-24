import Layout from '../components/layout'
import Valores from '../components/valores'
import Suscripcion from '../components/suscripcion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const iPlayIcon = <FontAwesomeIcon icon={faPlay} />

export default function Empresa() {
  return (
    <div>
      <Layout
        title='Empresa | Industria Ladrillera San Martín'>
        <section className='bg-bgAbout bg-cover bg-no-repeat' data-aos='fade-down' data-aos-easing="ease" data-aos-delay='600'>
          <div className='container mx-auto text-center py-40'>
            <h1 data-aos='fade-down' data-aos-easing="ease" data-aos-delay="800" className='text-white font-bold text-4xl mb-5' >NUESTRA EMPRESA</h1>
            <h3 data-aos='fade-down' data-aos-easing="ease" data-aos-delay="1000" className='text-white text-2xl mb-5 font-light
' >Construimos hogares para un San Martín que crece</h3>
            <a data-aos='fade-down' data-aos-easing="ease" data-aos-delay="1200" className='bg-blackPrimary hover:bg-orangePrimary hover:border hover:border-white hover:cursor-pointer text-whitePrimary px-3 py-2'>{iPlayIcon} Conócenos</a>
          </div>
        </section>
        <section className='bg-bgGrupo21 bg-cover bg-no-repeat'>
          <div className='container mx-auto py-20'>
            <div className='flex-col md:flex md:flex-row
              justify-center p-10'>
              <img data-aos='fade-down' data-aos-easing="ease" data-aos-delay="400" className='w-2/5' src='./img/IMG_2250.png' />
              <div data-aos='fade-down' data-aos-easing="ease" data-aos-delay="600" className='md:w-2/5 md:ml-20 self-center text-justify'>
                <h3 className='text-orangePrimary font-bold text-3xl mb-2'>Industria Ladrillera San Martín</h3>
                <p className='font-light'>Es una empresa privada con inversión 100% peruana, fundada en
                  1972, nos dedicamos a la fabricación y comercialización de todo
                  tipo de ladrillos de arcilla de alta calidad. Nuestros años en el
                  mercado nos respaldan como una empresa líder en la industria de
                  ladrillos cerámicos.</p>
              </div>
            </div>
            <div  className='flex-col md:flex md:flex-row justify-center'>
              <div data-aos='fade-down' data-aos-easing="ease" data-aos-delay="800" className='p-8 md:px-12 md:w-2/5 text-center md:mr-10 bg-whitePrimary mb-10 md:mb-0'>
                <h3 className='text-orangePrimary font-bold text-2xl mb-4'>Misión</h3>
                <p>Afianzarnos como líder en el sector ladrillero, produciendo los ladrillos de la más alta calidad y dar el mejor servicio a nuestros clientes, pensando siempre en la seguridad de todos los hogares peruanos.</p> 
              </div>
              <div data-aos='fade-down' data-aos-easing="ease" data-aos-delay="1000" className='p-8 md:px-12 md:w-2/5 text-center bg-orangePrimary text-whitePrimary'>
                <h3 className='font-bold text-2xl mb-4'>Visión</h3>
                <p>Hacer de nuestra industria una empresa de excelencia en la producción de ladrillos, aportando al sector de la construcción el producto más confiable y de mejores características técnicas del mercado.</p> 
              </div>
            </div>
          </div>
        </section>
        
          <Valores/>
          <Suscripcion/>
        
      </Layout>
    </div>
  )
}
