import React from 'react'

export default function SocialLinks() {
  return (
    <div className='social border-solid border-2 border-sky-500'>
        <a href="#" target={"_blank"} rel="" title='Link to author`s GitHub profile'>{" "}<i class="fa-brands fa-github"></i></a>
        <a href="#" target={"_blank"} title="Link to author`s Linkedin Profile">{" "}<i class="fa-brands fa-linkedin"></i></a>
        <a href="#" target={"_blank"} title="Link to author`s Correo Profile">{" "}<i class="fa-solid fa-envelope"></i></a>
    </div>
  )
}
