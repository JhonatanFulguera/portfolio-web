import { Children, createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [menu, setMenu] = useState(false)
    const navMenu = () => {
        setMenu(!menu)
    }
    const datosMe = [
        {
            title : "HOME",
            href : "welcome-section"
        },
        {
            title : "SOBRE MI",
            href : "about"
        },
        {
            title : "PROYECTOS",
            href : "projects"
        },
        {
            title : "CONTACTO",
            href : "contact"
        }
    ]
    const datosFormulario = [
        "Nombre Completo",
        "Teléfono",
        "Email"
    ];

    return(
        <UserContext.Provider value={{
            menu,
            datosMe,
            datosFormulario, 
            navMenu,
            }}>
            {children}
        </UserContext.Provider>
    )
}