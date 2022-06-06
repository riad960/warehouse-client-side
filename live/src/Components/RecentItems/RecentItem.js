import React from 'react';
import { Container } from 'react-bootstrap';

const RecentItem = () => {
    return (
        <div className='add-item-section py-5'>
            <h1 className='text-center py-5'>Recent product added</h1>
            <Container>
                <div className='row'>
                    <div className="col-md-4">
                        <div className="card bg-light text-black p-2">
                            <img className="card-img" src="https://i.ibb.co/P120LKh/Untitled-gfhjdesign.png" alt="Card image" />
                            <div className="card-img-overlay">
                                <h5 className="card-title text-info">Apple watch</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light text-black p-2">
                            <img className="card-img" src="https://i.ibb.co/bsRHfVc/Untitlezdfgd-design.png" />
                            <div className="card-img-overlay">
                                <h5 className="card-title text-info">G-Shockk</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light text-black p-2">
                            <img className="card-img" src="https://i.ibb.co/Hhf0GdX/Untitled-design.png" alt="Card image" />
                            <div className="card-img-overlay">
                                <h5 className="card-title text-info">Samsang Watches</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RecentItem;