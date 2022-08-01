import { useContext } from 'react'
import { UserContext } from "../context/menuContext"
import '../../public/Navbar.css'

export default function Navbar() {
  const { menu, navMenu } = useContext(UserContext);
  console.log(menu);

  return (
    <nav id="navbar" className='border-solid border-2 border-sky-500'>
        <div className="nav-wrapper">
          <p className="brand">
            <strong className='text-fuccia-b font-bold '>{"< "}</strong>Jhontan
            <strong>Fulguera</strong><span className='text-fuccia-b font-bold'>{" />"}</span>
          </p>
          <div className = "wrap" onClick={navMenu}>
            <div id='camp' className = {`${!menu ? `hover:`: ""}burger`}>
                <div className = "strip burger-strip">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
          </div>
        </div>
      </nav>
  )
}
