import React from 'react'
import SocialLinks from '../Projects/SocialLinks'
import "../../public/Footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <h3 className='text-white'>THANKS FOR VISITING</h3>
        <p className='text-white'>© {new Date().getFullYear()} jhonatanfulguera.</p>
        <SocialLinks />
      </div>
    </footer>
  )
}
