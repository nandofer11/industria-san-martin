import { useState } from 'react'

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
  //Estados para los campos del formulario contacto
  const [nombresCompleto, setNombresCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mensaje, setMensaje] = useState("");

  //Validación de estado del form
  const [errors, setErrors] = useState({});

  //Establecer el texto del botón en el envío del formulario
  const [buttonText, setButtonText] = useState("Enviar");

  //Configuración de estados de mensajes de éxito o fracaso
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Enviando");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          nombresCompleto: nombresCompleto,
          email: email,
          asunto: asunto,
          telefono: telefono,
          ciudad: ciudad,
          mensaje:  mensaje,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Enviar");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Enviar");
    }
    console.log(nombresCompleto, email, asunto, mensaje);
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (nombresCompleto.length <= 0) {
      tempErrors["nombresCompleto"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (asunto.length <= 0) {
      tempErrors["asunto"] = true;
      isValid = false;
    }
    if (telefono.length <= 0) {
      tempErrors["telefono"] = true;
      isValid = false;
    }
    if (ciudad.length <= 0) {
      tempErrors["ciudad"] = true;
      isValid = false;
    }
    if (mensaje.length <= 0) {
      tempErrors["mensaje"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

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
                <a className="hover:text-orangePrimary" href="https://www.facebook.com/industriasanmartin" target='_blank' rel="noreferrer">{iFB}</a>
                <a className="hover:text-orangePrimary" href="https://www.facebook.com/industriasanmartin" target='_blank' rel="noreferrer">{iInsta}</a>
                <a className="hover:text-orangePrimary" href="https://www.facebook.com/industriasanmartin" target='_blank' rel="noreferrer">{iYouTube}</a>
              </div>
            </div>
            <div className='bg-orangePrimary p-6 bg-bgForm bg-no-repeat bg-cover'>
              <form className='' onSubmit={handleSubmit}>
                <div className="flex flex-col mb-3">
                  <label htmlFor='nombresCompleto' className='text-whitePrimary'>Nombres y Apellidos:</label>
                  <input value={nombresCompleto} onChange={(e)=>{setNombresCompleto(e.target.value);}} name='nombresCompleto' type="text" className="w-96 form-input" />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor='email' className='text-whitePrimary'>Correo electrónico:</label>
                  <input value={email} onChange={(e)=>{setEmail(e.target.value);}} name='email' type="email" className="w-96" />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor='asunto' className='text-whitePrimary'>Asunto:</label>
                  <input value={asunto} onChange={(e)=>{setAsunto(e.target.value);}} name='asunto' type="text" className="w-96" />
                </div>
                <div className='flex'>
                  <div className="flex flex-col mb-3">
                    <label htmlFor='telefono' className='text-whitePrimary'>Teléfono:</label>
                    <input value={telefono} onChange={(e)=>{setTelefono(e.target.value);}} name='telefono' type="tel" className="w-44 mr-8" />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor='ciudad' className='text-whitePrimary'>Ciudad:</label>
                    <input value={ciudad} onChange={(e)=>{setCiudad(e.target.value);}} name='ciudad' type="text" className="w-44" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor='mensaje' className='text-whitePrimary'>Mensaje:</label>
                  <textarea value={mensaje} onChange={(e)=>{setMensaje(e.target.value);}} name="mensaje" rows="6" placeholder='Escribe tu mensaje ... '></textarea>
                </div>
                <button href="" className='inline-block bg-blackPrimary py-2 px-4 text-whitePrimary mt-5'>{iPaperPlane} Enviar</button>
              </form>
            </div>
          </div>
        </section>
        <Suscripcion />
      </Layout>
    </div>
  )
}