import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useWatch from '../../Hooks/UseWatch';
import InventoryDetails from '../Inventory/InventoryDetails';
import RecentItem from '../RecentItems/RecentItem';
import './Home.css'

const Home = () => {
    const [watchs] = useWatch();
    const itemLimit = watchs.slice(0, 6);
    return (
        <>
            <section>
                <div className='hero-section bg-light d-flex align-items-center mt-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 order-md-last">
                                <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://i.ibb.co/P120LKh/Untitled-gfhjdesign.png"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://i.ibb.co/Hhf0GdX/Untitled-design.png"
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://i.ibb.co/bsRHfVc/Untitlezdfgd-design.png"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                {/* <img src="https://i.ibb.co/Hhf0GdX/Untitled-design.png" alt="" /> */}
                            </div>
                            <div className="col-md-7 mt-md-5">
                                <div className="mt-5 text-black header-text">
                                    <h1 className='display-1 md:display-4 text-black fw-bold'><span className='text-info'>Watch</span> World</h1>
                                    <p className='fs-5'>This is a ware House of branded smart and analog watch. You can find your watch here manage item add item and update quantity</p>
                                    <Link to='/inventory'>
                                    <button type="button" className="btn btn-info btn-lg fw-bold">Inventory</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container py-5'>
                    <h1 className='text-info text-center display-3 py-5 fw-bold'>Inventory</h1>
                    <div className='row g-5'>
                        {
                            itemLimit.map(watch => <InventoryDetails
                                key={watch._id}
                                watch={watch} />
                            )
                        }
                    </div>
                </div>
            </section>
            <RecentItem/>

        </>
    );
};

export default Home;