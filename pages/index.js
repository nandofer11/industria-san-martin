import Layout from '../components/layout'
import CardServicios from '../components/cardservicios'
import Suscripcion from '../components/suscripcion'
import MyLink from '../components/mylink'


export default function Inicio() {
  return (
    <div>
      <Layout
        title='Industria Ladrillera San Martín'>
        <main className='bg-headerImage bg-no-repeat bg-cover'>
          

          
          <header className="container mx-auto flex flex-col px-10 sm:flex-row items-center justify-around pt-56">

            <div className='text-center py-10 sm:text-left sm:w-1/2 '>
            
              <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800" className='text-orangePrimary text-3xl font-bold'>BIENVENIDOS A INDUSTRIA LADRILLERA SAN MARTÍN</h1>

              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1200" className='text-blackPrimary'>
                Les dan las más cordial bienvenida a su sitio web y tenemos el agrado
                de presentarles nuestra exclusiva línea de productos cerámicos.
              </p>
              <MyLink data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1600" href={'/productos'} className='bg-orangePrimary text-whitePrimary p-3 inline-block my-4 hover:bg-blackPrimary hover:cursor-pointer'>Productos</MyLink>
              
              </div>
            <img data-aos="fade-up-left" data-aos-easing="ease" data-aos-delay="2000"  className='w-1/2 sm:w-1/4' src='./img/man-brick.png' />


          </header>
          
        </main>

        <section className='bg-aboutImage bg-no-repeat bg-cover py-20'>
          <div  className='md:relative container mx-auto flex flex-col items-center bg-orangePrimary py-10'>
            <img data-aos='fade-down' className='w-1/2 md:w-1/3 lg:w-1/3 md:absolute left-0 align-center lg:bottom-5' src='./img/pandereta.png' />
            <div  className="text-center md:text-left md:ml-[200px] md:pr-30 lg:ml-[400px] px-10">
              <h2 data-aos='fade-down' data-aos-easing="ease" data-aos-delay="400"  className='text-whitePrimary text-2xl mb-4 font-bold'>Te ofrecemos <br /> los mejores productos</h2>
              <p data-aos='fade-up-left' data-aos-easing="ease" data-aos-delay="600" className='text-whitePrimary'>Industria San Martin inicia sus actividades comerciales el 15 de octubre de 1996. Los productos que fabricamos y comercializamos son ladrillos cerámicos de arcilla cocida que se utilizan en la construcción de viviendas, edificios e infraestructura en general.</p>
              <MyLink data-aos='fade-up-right' data-aos-easing="ease" data-aos-delay="800" href={'/empresa'} className='bg-whitePrimary text-orangePrimary p-3 inline-block my-4 hover:bg-blackPrimary hover:text-whitePrimary hover:cursor-pointer'>Empresa</MyLink>
            </div>
          </div>
        </section>
        <section className='bg-servicesImage bg-no-repeat bg-cover'>
          <CardServicios />
        </section>

        <Suscripcion />

      </Layout>
    </div>
  )
}
