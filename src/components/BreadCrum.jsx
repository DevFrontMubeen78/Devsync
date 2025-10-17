import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrum = ({ exPage, HomePage, MultipleColor }) => {
    return (
        <div className="container flex gap-2 pb-20 text-sm">
            <Link to="/" className={`hover:underline ${MultipleColor}`}>{HomePage}</Link>
            <span>/</span>
            <p className="paragraph">{exPage}</p>
        </div>
    )
}

export default BreadCrum
