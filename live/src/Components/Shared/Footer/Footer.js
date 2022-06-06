import React from 'react';

const Footer = () => {
    return (
        <div className='bg-light text-black'>
            <div className="container">
                <footer className="py-5">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-2">
                            <h5>Quick links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Home</p></li>
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Myitems</p></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <h5>Products</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">G-Shok</p></li>
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">samsang</p></li>
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">xiaomi</p></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <h5>Othera</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">About</p></li>
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Blogs</p></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <form>
                                <h5>Watch World</h5>
                                <p>For monthly updated services in future</p>
                                <div className="d-flex w-100 gap-2">
                                    <label className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-info" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end py-4 my-4 border-top">
                        <p>&copy; 2022 waych World. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;