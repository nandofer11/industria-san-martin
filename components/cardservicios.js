import MyLink from "./mylink"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTree, faTruckMoving, faTruckLoading } from "@fortawesome/free-solid-svg-icons"

const iTree = <FontAwesomeIcon className="fa-2x mx-2" icon={faTree} />
const iTruckMoving = <FontAwesomeIcon className="fa-2x mx-2" icon={faTruckMoving} />
const iTruckLoading = <FontAwesomeIcon className="fa-2x mx-2" icon={faTruckLoading}/>


export default function CardServicios(){
    return(
        <div 
        
        className='container mx-auto flex  flex-col p-5'>

            

            <h2 data-aos='fade-down-right' data-aos-easing="ease" data-aos-delay="400" className='text-whitePrimary text-2xl text-center my-8 font-semibold'>Buscamos brindarle permanentemente productos y servicios de excelente calidad</h2>
            
            <div className='flex flex-col md:justify-around md:flex-row'>
              <MyLink data-aos='fade-up-right' data-aos-easing="ease" data-aos-delay="600" href={'/compromiso-ambiental'} className="self-center hover:cursor-pointer hover:bg-orangePrimary p-5 text-whitePrimary">{iTree} Compromiso ambiental</MyLink>
              <MyLink data-aos='fade-up' data-aos-easing="ease" data-aos-delay="800" href={'/zona-distribucion'} className="self-center hover:cursor-pointer hover:bg-orangePrimary p-5 text-whitePrimary">{iTruckMoving} Zona Distribución</MyLink>
              <MyLink data-aos='fade-up-left' data-aos-easing="ease" data-aos-delay="1000" href={'/proceso-produccion'} className="self-center hover:cursor-pointer hover:bg-orangePrimary p-5 text-whitePrimary">{iTruckLoading} Proceso producción</MyLink>
            </div>
          </div>
    )
}