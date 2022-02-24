import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faClock } from "@fortawesome/free-regular-svg-icons"

const iFB = <FontAwesomeIcon className="mr-2" icon={faFacebookSquare} />
const iInsta = <FontAwesomeIcon className="mr-2" icon={faInstagram} />
const iYouTube = <FontAwesomeIcon className="mr-2" icon={faYoutube} />
const iEnvelope = <FontAwesomeIcon icon={faEnvelope} />
const iClock = <FontAwesomeIcon icon={faClock} />



export default function TopBar() {
    return (
        <div data-aos='fade-down' className='py-2 bg-blackPrimary text-white hidden sm:block '>
            <div className="container mx-auto flex justify-between sm:px-2">
                <div>
                    <p className="inline mr-4">Síguenos en:</p>
                    <a className="hover:text-gray-400" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iFB}</a>
                    <a className="hover:text-gray-400" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iInsta}</a>
                    <a className="hover:text-gray-400" href="https://www.facebook.com/industriasanmartin" target='_blank'>{iYouTube}</a>
                </div>
                <div className='flex'>
                    <p className="mr-3"><span className="text-orangePrimary">{iEnvelope}</span> industriasanmartin@gmail.com
                    </p>
                    <p className="hidden md:block"><span className="text-orangePrimary">{iClock}</span> Horario: Lun. - Sáb. de 8:00am - 5:00pm</p>
                </div>
            </div>

        </div>
    )
}
