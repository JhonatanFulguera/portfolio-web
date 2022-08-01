import React from 'react'
import "../../public/Contact.css"

import { useContext } from 'react'
import { UserContext } from "../context/menuContext"

export default function Contact() {
    const { datosFormulario } = useContext(UserContext);

    const listItems = datosFormulario.map((dato,i) =>
            <div key={i}>
                <input type="text" placeholder={dato} className="bg-gris-b" id={dato} />
            </div>
        );
    return (
        <section id="contact" className='flex-col'>
            <article className='contact_content'>
                <div className='images'></div>
                <h3 className='text-2xl flex flex-col mb-5 md:text-3xl md:flex-row md:justify-between lg:mb-20 lg:tracking-wide lg:justify-evenly lg:text-4xl'>¿Tenes un proyecto en mente? <span>!Hablemos!</span></h3>
                <div className='correo-tel flex md:flex-row justify-between'>
                    <h4 className='lg:text-2xl'>jhonatanfulgueralucana@gmail.com</h4>
                    <p className='lg:text-2xl'>+54 1150420942</p>
                </div>
            </article>
            <article className='flex-col from_content'>
                <p className='text-xl font-bold my-4'>CONTACTO</p>
                <form action="#" method='POST'>
                    {listItems}
                    <textarea className='bg-gris-b' type="text" id='contexto' placeholder='Escribe tu mensaje...' title='El mensaje es obligatorio'></textarea>
                    <input className='buttonEn block bg-fuccia-b cursor-pointer' type="submit" id="EnviarM" value={"Enviar Mensaje"}/>
                </form>
            </article>
        </section>
    )
}
