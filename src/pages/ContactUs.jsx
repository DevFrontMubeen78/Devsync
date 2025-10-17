import React from 'react'
import Contact from '../components/Contact'
import BreadCrum from '../components/BreadCrum'


const ContactUs = () => {
    return (
        <div className='paddingY-axis'>
            <BreadCrum exPage="Contact" HomePage="Home" MultipleColor="text-black" />
            <Contact />
        </div>
    )
}

export default ContactUs
