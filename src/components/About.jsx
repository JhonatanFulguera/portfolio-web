import React from 'react'
import "../../public/About.css"
export default function About() {
    return (
        <section id='about' className='border border-indigo-500'>
            <div className='wrapper'>
                <article>
                    <div className="title">
                        <h3>Who's this guy?</h3>
                        <hr className='my-4 border-r-[150px] border-indigo-500 h-0.5'/>
                    </div>
                    <div className="desc full">
                        <h4 className='Subtitle'>Mi nombre es Jhonatan</h4>
                        <p>Developer Full Stack web</p>
                        <p>
                        Soy una persona responsable, creativo, con voluntad de encarar nuevos
                        desafíos y aprender nuevas disciplinas. Buena predisposición para el trabajo
                        en equipo y activo en la resolución de problemas. En la búsqueda de
                        comenzar mi carrera profesional como Desarrollador.
                        </p>
                    </div>
                    <div className="title">
                        <h3>What does he do?</h3>
                        <hr className='my-4 border-r-[150px]   border-indigo-500 h-0.5' />
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">Soy un Programador</h4>
                        <p>
                        For the front-end I usually work with Javascript, either standalone or including
                        popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass,
                        CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
                        </p>
                        <p>
                        For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of
                        course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
                        </p>
                    </div>

                    <div className="desc">
                        <h4 className="subtitle">Ademas estudiante de Analista en sistemas Jr.</h4>
                        <p>
                        I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
                        Lightroom or Xd are some kind of industry standards and I love working with them. I'm
                        not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
                        that I've been working with.
                        </p>
                        <p>
                        User interfaces, brochures, books, branding... You name it! As I mentioned, creating
                        pretty things is particularly important for me.
                        </p>
                </div>
                </article>
            </div>
        </section>
    ) 
}
