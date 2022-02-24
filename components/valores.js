import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake } from "@fortawesome/free-regular-svg-icons"
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

const iHandShake = <FontAwesomeIcon className="fa-3x" icon={faHandshake} />
const iBalance = <FontAwesomeIcon className="fa-3x" icon={faBalanceScale} />
const iClock = <FontAwesomeIcon className="fa-3x" icon={faClock}/>

export default function Valores() {
    return (
        <div className="w-full  bg-blackPrimary p-10" data-aos='fade-down' data-aos-easing="ease">
            <div className="container mx-auto flex-col md:flex md:flex-row ">
                <div className="md:w-2/5 mb-10">
                    <div data-aos='fade-up-right' data-aos-easing="ease" data-aos-delay="400" className="w-1/2 h-1 bg-orangePrimary"></div>
                    <h1 data-aos='fade-down' data-aos-easing="ease" data-aos-delay="600" className="mt-4 text-2xl font-bold text-whitePrimary">Nuestro compromiso es con
                        cada uno que lucha y se esfuerza por
                        construir su hogar y ver crecer a San Martín.
                    </h1>
                </div>

                <div className="w-full md:w-3/5 text-center text-whitePrimary ">
                    <h3 data-aos='fade-down' data-aos-easing="ease" data-aos-delay="800" className="mb-5 font-bold text-xl">NUESTROS VALORES</h3>
                    <div data-aos='fade-down' data-aos-easing="ease" data-aos-delay="1000" className="mr-10 md:inline-block p-4">
                        <div>{iHandShake}</div>
                        <p>Respeto</p>
                    </div>
                    <div data-aos='fade-down' data-aos-easing="ease" data-aos-delay="1200" className="mr-10 md:inline-block p-4">
                        <div>{iBalance}</div>
                        <p>Respeto</p>
                    </div>
                    <div data-aos='fade-down' data-aos-easing="ease" data-aos-delay="1400" className="mr-10 md:inline-block p-4">
                        <div>{iClock}</div>
                        <p>Respeto</p>
                    </div>
                </div>
            </div>
        </div>
    )
}