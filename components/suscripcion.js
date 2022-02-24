export default function Suscripcion() {
    return (
        <div className="w-full bg-suscripcionImage bg-cover bg-no-repeat">
        <div className=" md:relative container mx-auto items-center flex flex-col sm:flex-row py-0 pt-10 sm-:py-10 overflow-hidden	">
            <div data-aos='fade-right' data-aos-easing="ease" data-aos-delay="400" className="px-10 pb-10 md:w-[500px]">
                <h2 className="text-orangePrimary text-3xl font-bold">Premiamos tu compra!</h2>
                <p className="mb-5">Suscríbete a nuestro boletín y mantente informado sobre nuestras promociones.</p>
                <form className="">
                    <div className="flex">
                        <input type="email" className="bg-orangePrimary border-0 text-whitePrimary md:w-2/3 lg:w-full" />
                        <button className="bg-blackPrimary text-whitePrimary py-2 px-3 hover:text-orangePrimary">Suscribirse</button>
                    </div>
                </form>
            </div>

            <img data-aos='fade-left' data-aos-easing="ease" data-aos-delay="400" className="md:absolute w-1/2 sm:w-1/4 md:w-1/5 xl:w-100 xl:right-40 right-0 md:right-10 top-2" src='./img/img-worker.png' />

        </div>
        </div>
    )
}