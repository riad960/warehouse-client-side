import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'

const Notfound = () => {
    return (
        <div className='notfound-section'>
            <div className='container mt-5'>
                <h1 className='display-1 md:display-4 text-black fw-bold text-center pt-5'><span className='text-info'>404</span> Not Found</h1>
                <p className='fs-4 text-center'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <div className="d-flex justify-content-center ">
                    <Link to='/' className='btn btn-outline-info btn-lg fw-bold w-25'>Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Notfound;