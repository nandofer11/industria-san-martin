/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import { AnimateSharedLayout, motion } from 'framer-motion'

import MyLink from './mylink'

import { useRouter } from 'next/dist/client/router'


const navigation = [
    { name: 'Inicio', href: '/', current: true },
    { name: 'Empresa', href: '/empresa', current: false },
    { name: 'Productos', href: '/productos', current: false },
    { name: 'Servicios', href: '/servicios', current: false },
    { name: 'Contacto', href: '/contacto', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navegacion() {

    const router = useRouter();

    return (
        <Disclosure  as="nav" className="bg-whitePrimary">

            {({ open }) => (
                <>
                    <div data-aos='fade-up' data-aos-easing="ease" data-aos-delay="400" className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Abrir menu principal</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-10 w-auto"
                                        src="./img/logo.png"
                                        alt="Industria Ladrillera San Martín"
                                    />
                                    
                                    <img
                                        className="hidden lg:block h-10 w-auto"
                                        src="./img/logo_horizontal.png"
                                        alt="Industria Ladrillera San Martín"
                                    />
                                    
                                </div>
                                <div className="hidden sm:block">
                                    <div className="flex space-x-4">
                                        {/* <Menu>
                                            {navigation.map((item) => (
                                                <Menu.Item>
                                                    <MyLink key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            router.pathname == item.href ? 'text-blackPrimary border-b-4 border-orangePrimary' : 'text-blackPrimary hover:bg-blackPrimary hover:text-whitePrimary',
                                                            'px-2 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}>{item.name}
                                                    </MyLink>

                                                </Menu.Item>
                                            ))}
                                        </Menu> */}
                                        <AnimateSharedLayout>
                                            <Menu>
                                                {navigation.map((item) => (
                                                    <Menu.Item>
                                                        <MyLink key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                router.pathname == item.href ? 'text-orangePrimary' : 'text-blackPrimary hover:text-orangePrimary',
                                                                'px-2 py-2 text-sm font-medium'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}>
                                                            {item.name}
                                                            {(router.pathname == item.href) && (
                                                                <motion.div
                                                                    layoutId = 'navigation-underline'
                                                                    className='navigation-underline'
                                                                    animate
                                                                >
                                                                    
                                                                </motion.div>
                                                            )}
                                                        </MyLink>

                                                    </Menu.Item>
                                                ))}
                                            </Menu>
                                        </AnimateSharedLayout>


                                    </div>
                                </div>
                            </div>
                            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <MyLink href={'/cotizacion'} className="bg-orangePrimary hover:bg-blackPrimary text-whitePrimary px-3 py-2 mr-3">Cotización</MyLink>
                                <MyLink href={'/trabaja-con-nosotros'} className="sm:hidden md:block bg-blackPrimary hover:bg-orangePrimary text-whitePrimary px-3 py-2">Envía tu CV</MyLink>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden border-b-2 border-orangePrimary">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        router.pathname == item.href ? 'bg-orangePrimary text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export { navigation, classNames };