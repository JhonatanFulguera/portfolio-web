//assets
import { useContext } from 'react'
import { UserContext } from "../context/menuContext"
import "../../public/Menu.css"
import SocialLinks from '../Projects/SocialLinks';

export default function Menu() {
    const { menu, navMenu, datosMe } = useContext(UserContext);
    
    const listItemsMenu = datosMe.map((dato, i) =>
        <li key={i}>
            <a href={`#${dato.href}`} onClick={ navMenu }>{dato.title}</a>
        </li>
    );


    return (
        <div className={`menu-container ${!menu ? "desactive" : "active"} `}>
            <div className='Overlay'/>
            <div className='menu-items border-solid border-2 border-indigo-500'>
                <ul>
                    {listItemsMenu}
                </ul>
                <SocialLinks/>
            </div>
        </div>
    )
}
