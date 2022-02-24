import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/dist/client/router'
import MyLink from './mylink'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faHardHat, faIndustry } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

const iHardHat = <FontAwesomeIcon className="fa-2x mx-2" icon={faHardHat} />
const iEnvelope = <FontAwesomeIcon className='text-orangePrimary' icon={faEnvelope} />
const iClock = <FontAwesomeIcon className='text-orangePrimary' icon={faClock} />
const iIndustry = <FontAwesomeIcon className='text-orangePrimary' icon={faIndustry} />
const iFB = <FontAwesomeIcon className='text-lg mr-2' icon={faFacebookSquare} />
const iInsta = <FontAwesomeIcon className='text-lg mr-2' icon={faInstagram} />
const iYouTube = <FontAwesomeIcon className='text-lg mr-2' icon={faYoutube} />
const iWsp = <FontAwesomeIcon className='text-lg mr-2' icon={faWhatsapp} />

const navigation = [
    { name: 'Inicio', href: '/', current: true },
    { name: 'Empresa', href: '/empresa', current: false },
    { name: 'Productos', href: '/productos', current: false },
    { name: 'Servicios', href: '/servicios', current: false },
    { name: 'Contacto', href: '/contacto', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="bg-blackPrimary text-whitePrimary">
            <div className="container mx-auto pt-10 pb-5 px-10">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div data-aos='fade-down' data-aos-easing="ease" data-aos-delay="400">
                        <img className="w-36" src="./img/logo-blanco.png" alt="logotipo Industria Ladrillera San Martin" />
                        <div className='mt-5'>
                            <p className="inline mr-4">Síguenos en:</p>
                            <a className="hover:text-gray-400" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iFB}</a>
                            <a className="hover:text-gray-400" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iInsta}</a>
                            <a className="hover:text-gray-400" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iYouTube}</a>
                        </div>
                    </div>
                    <div data-aos='fade-down' data-aos-easing="ease" data-aos-delay="400" className='my-4'>
                        <div className='flex flex-col'>
                            {navigation.map((item) => (
                                <MyLink key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        router.pathname == item.href ? 'text-whitePrimary hover:text-gray-500' : 'text-whitePrimary hover:text-gray-500 hover:text-whitePrimary'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}>{item.name}
                                </MyLink>
                            ))}
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-easing="ease" data-aos-delay="400" className='mb-4'>
                        <p>Contacto</p>
                        <p>{iEnvelope} Email: informes@industriasanmartin.com</p>
                        <p>{iClock} Horario: 8:00am - 5:00pm</p>
                        <p>{iIndustry} Carrt. Fernando Belaunte T. Km. 08, Caserío Las Delicias <br />
                            Rioja (Entrada Tamboyacu)</p>
                    </div>
                    <div data-aos='fade-left' data-aos-easing="ease" data-aos-delay="400">
                        <div className='my-5'>
                            <MyLink href={'/reclamos'} className='border border-gray-500 py-4 px-3 hover:bg-gray-500'> {iHardHat} ¿Tienes algún reclamo?</MyLink>
                        </div>
                        <div className='text-center my-5'>
                            <p className='pb-4'>Trabaja con nosotros!</p>
                            <MyLink href={'/trabaja-con-nosotros'} className="bg-orangePrimary px-3 py-2 hover:bg-orangeSecondary ">Enviar CV</MyLink>
                        </div>
                    </div>
                </div>
                <hr className='border border-gray-500 mt-2' />
                <div className="flex flex-col md:flex-row text-center justify-between pt-2">
                    <p  className='text-sm mb-3'>Copyright © 2022 Industria Ladrillera San Martín | Todos los Derechos Reservados.</p>
                    <p className='text-sm italic'>Diseño y Desarrollo:
                        <a className='hover:text-orangePrimary not-italic font-normal ml-2' href='https://walink.co/9b8263' target='_blank'> {iWsp}O. Fernández</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}