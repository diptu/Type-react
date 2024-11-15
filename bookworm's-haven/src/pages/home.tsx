import React from 'react'
import Logo from '../assets/logo.png'
type HomeProps = {
  title : string
}
const home = (props : HomeProps) => {
  return (
    <div>
        <a href="https://github.com/diptu/Type-react" target="_blank">
          <img src={Logo} alt="logo" />
        </a>
      <h1>{props.title}</h1>
        <p>
          {props.title} is a dynamic and user-friendly online bookstore built with React and 
            TypeScript. This web application offers a seamless shopping experience for book lovers,
            allowing them to browse through a vast collection of books, search for specific titles,
            and make purchases with ease.
        </p>
    </div>
  )
}

export default home
