import React from 'react'
type ContactProps = {
  contactEmail: string
  phone : string
  address: string
}
const contact = (props: ContactProps) => {
  return (
    <div>
       <h1>Contact Us</h1>
        <p>Have a question, comment, or suggestion? We're here to help!</p>
       
        <h2> Get in Touch:</h2>
        <p>Email: {props.contactEmail}
       <span>Mobile: {props.phone}</span> 
        Address:{props.address}</p>
    </div>
  )
}

export default contact
