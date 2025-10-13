import React from 'react';
import { Link } from 'react-router-dom';

const GetAQuote = () => {
    return (
        <div>
            <Link
                to="/"
                className="bg-blue-600 text-white font-semibold px-7 py-3 rounded-full border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-300"
            >
                Get a Quote
            </Link>
        </div>
    );
};

export default GetAQuote;
