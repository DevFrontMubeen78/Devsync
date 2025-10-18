import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrum = ({ exPage, HomePage, MultipleColor }) => {
    return (
        <div className="container flex gap-2 text-sm uppercase">
            <Link to="/" className={`hover:underline ${MultipleColor}`}>{HomePage}</Link>
            <span>/</span>
            <p className="text-gray-500">{exPage}</p>
        </div>
    )
}

export default BreadCrum
