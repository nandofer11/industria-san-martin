import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faPeopleCarry } from '@fortawesome/free-solid-svg-icons'
import Suscripcion from '../components/suscripcion'
import Valores from '../components/valores'

const iTrophy = <FontAwesomeIcon className='fa-2x' icon={faTrophy} />
const iPeopleCarry = <FontAwesomeIcon className='fa-2x' icon={faPeopleCarry} />

export default function TrabajaConNosotros() {
    return (
        <div>
            <Layout
                title='Trabaja con nosotros | Industria Ladrillera San Martín'>
                <section className='bg-bgHeaderTrabaja bg-no-repeat bg-cover text-whitePrimary'>
                    <div className='container mx-auto py-20 text-center md:text-left'>
                        <p className='text-lg'>Trabaja en Industria Ladrillera San Martín</p>
                        <h1 className='text-3xl font-bold'>Únete a nuestro equipo</h1>
                        <p>Buscamos personas con talento que nos ayuden a crear valor de manera sostenible</p>
                    </div>
                </section>
                <section className='bg-bgContact bg-no-repeat bg-cover'>
                    <div className='container mx-auto flex py-10'>
                        <div className='w-1/2 pr-5 bg-gray-50 p-4'>
                            <h1 className='text-orangePrimary text-lg font-bold text-center'>Por qué Industria Ladrillera San Martín</h1>
                            <p className='text-blackPrimary text-sm text-justify py-5 w-96 mx-auto'>Tenemos un compromiso con nuestros empleados. Nos preocupamos por su bienestar y desarrollo como medio para que puedan dar lo mejor de sí mismos en su puesto de trabajo.</p>
                            <div className='hover:bg-white hover:cursor-pointer flex flex-col mx-auto items-center w-60 p-4 mb-5'>
                                <span className='bg-orangePrimary p-3 text-whitePrimary rounded-full mb-2'>{iTrophy}</span>
                                <h3 className='text-blackPrimary font-bold'>Esfuerzo y recompensa</h3>
                                <p className='text-blackPrimary text-center'>Creemos en la meritocracia, cada empleado tiene objetivos definidos y vinculados a beneficios para recompensar su esfuerzo.</p>
                            </div>
                            <div className='hover:bg-white hover:cursor-pointer flex flex-col mx-auto items-center w-60 p-4'>
                                <span className='bg-orangePrimary p-3 text-whitePrimary rounded-full mb-2'>{iPeopleCarry}</span>
                                <h3 className='text-blackPrimary font-bold'>Cultura de respeto</h3>
                                <p className='text-blackPrimary text-center'>Trabajamos en un ambiente diverso favoreciendo y fomentando la igualdad de oportunidades entre los empleados.</p>
                            </div>
                        </div>
                        <div className='w-1/2 ml-8 p-4'>
                            <form className=''>
                            <h3 className='mb-4 text-orangePrimary font-bold'>ENVÍA TU CURRÍCULUM</h3>
                                <div className="flex flex-col mb-3">
                                    <label className='text-orangePrimary'>Nro. Documento DNI:</label>
                                    <input type="number" className="w-1/3" />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className='text-orangePrimary'>Nombres y Apellidos:</label>
                                    <input type="text" className="w-96 form-input" />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className='text-orangePrimary'>Email:</label>
                                    <input type="email" className="w-96" />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className='text-orangePrimary'>Número de teléfono:</label>
                                    <input type="tel" className="w-1/3" />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className='text-orangePrimary'>Ciudad:</label>
                                    <input type="text" className="w-1/3" />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className='text-orangePrimary'>Adjuntar CV:</label>
                                    <label className='font-bold mb-3'>Puede cargar archivos de tipo PDF (5 MB máx.)</label>
                                    <input id="fileCV" name="fileCV" type="file" accept='.pdf' className="hover:cursor-pointer border-2 border-orangePrimary border-dashed p-10" />
                                </div>
                                <a href="" className='inline-block bg-blackPrimary py-2 px-4 text-whitePrimary mt-5'> Enviar</a>
                            </form>
                        </div>
                    </div>
                </section>
                <Valores/>
                <Suscripcion />
                
            </Layout>
        </div>
    )
}