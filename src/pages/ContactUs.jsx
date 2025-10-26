import React from 'react'
import Contact from '../components/Contact'
import BreadCrum from '../components/BreadCrum'


const ContactUs = () => {
    return (
        <div className='paddingY-axis'>
            <BreadCrum pages={[{ name: 'Contact' }]} />
            <Contact />
        </div>
    )
}

export default ContactUs
