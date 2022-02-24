import Layout from '../components/layout'
import Suscripcion from '../components/suscripcion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"


const iMobile = <FontAwesomeIcon className='text-orangePrimary ' icon={faMobileAlt} />
const iEnvelope = <FontAwesomeIcon className='text-orangePrimary ' icon={faEnvelope} />
const iFB = <FontAwesomeIcon className="mr-2" icon={faFacebookSquare} />
const iInsta = <FontAwesomeIcon className="mr-2" icon={faInstagram} />
const iYouTube = <FontAwesomeIcon className="mr-2" icon={faYoutube} />
const iPaperPlane = <FontAwesomeIcon icon={faPaperPlane}/>

export default function Contacto() {
  return (
    <div>
      <Layout
        title='Contacto | Industria Ladrillera San Martín'>
        <section className='bg-bgContact bg-no-repeat bg-cover'>
          <div className='container mx-auto flex-col md:flex md:flex-row py-10 justify-center'>
            <div className='mx-4 self-center md:mr-10'>
              <h3 className='text-orangePrimary font-bold text-3xl'>CONTÁCTANOS</h3>
              <p className='text-blackPrimary'>Estamos para atenderte</p>
              <div className='mt-6'>
                <h3 className='text-orangePrimary font-bold text-xl'>Encargado comercial planta</h3>
                <p className='text-blackPrimary'>{iMobile} 967 987 374</p>
                <p className='text-blackPrimary'>{iEnvelope} industriasanmartin@gmail.com</p>
              </div>
              <div className='mt-6'>
                <h3 className='text-orangePrimary font-bold text-xl'>Oficina</h3>
                <p className='text-blackPrimary'>{iMobile} 967 987 374</p>
                <p className='text-blackPrimary'>{iEnvelope} industriasanmartin@gmail.com</p>
              </div>
              <p className='text-blackPrimary mt-6'><span className='text-orangePrimary font-bold'>Planta: </span>Carr. Fernando Belaunde T. Km. 08
                Rioja, San Martín (Entrada Tamboyacu).</p>
              <div className='mt-6'>
                <p className="inline mr-4 text-orangePrimary font-bold italic">Síguenos en:</p>
                <a className="hover:text-orangePrimary" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iFB}</a>
                <a className="hover:text-orangePrimary" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iInsta}</a>
                <a className="hover:text-orangePrimary" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iYouTube}</a>
              </div>
            </div>
            <div className='bg-orangePrimary p-6 bg-bgForm bg-no-repeat bg-cover'>
              <form className=''>
                <div className="flex flex-col mb-3">
                  <label className='text-whitePrimary'>Nombres y Apellidos:</label>
                  <input type="text" className="w-96 form-input" />
                </div>
                <div className="flex flex-col mb-3">
                  <label className='text-whitePrimary'>Correo electrónico:</label>
                  <input type="email" className="w-96" />
                </div>
                <div className="flex flex-col mb-3">
                  <label className='text-whitePrimary'>Asunto:</label>
                  <input type="text" className="w-96" />
                </div>
                <div className='flex'>
                  <div className="flex flex-col mb-3">
                    <label className='text-whitePrimary'>Teléfono:</label>
                    <input type="tel" className="w-44 mr-8" />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label className='text-whitePrimary'>Ciudad:</label>
                    <input type="text" className="w-44" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className='text-whitePrimary'>Mensaje:</label>
                  <textarea name="mensaje" rows="6" placeholder='Escribe tu mensaje ... '></textarea>
                </div>
                <a href="" className='inline-block bg-blackPrimary py-2 px-4 text-whitePrimary mt-5'>{iPaperPlane} Enviar</a>
              </form>
            </div>
          </div>
        </section>
        <Suscripcion />
      </Layout>
    </div>
  )
}