import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <Container className='py-5'>
                <div className='text-center my-5'>
                    <h1>Blogs</h1>
                </div>
                <div className="row border m-2 my-5 p-2 shadow-lg">
                    <div className="col-md-4">
                        <div className="w-100">
                            <img src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            <h2>Difference between javascript and nodejs</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Javascript</h3>
                                    <p>1. Javascript is a programming language that is used for writing scripts on the website.</p>
                                    <p>2. 	Javascript can only be run in the browsers..</p>
                                    <p>3.Javascript is capable enough to add HTML and play with the DOM. </p>
                                </div>
                                <div className="col-md-6">
                                    <h3>Node js</h3>
                                    <p>1. NodeJS is a Javascript runtime environment.</p>
                                    <p>2. We can run Javascript outside the browser with the help of NodeJS.</p>
                                    <p>3.Nodejs does not have capability to add HTML tags.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border m-2 my-5 p-2 shadow-lg">
                    <div className="col-md-4">
                        <div className="w-100">
                            <img src="https://i.morioh.com/201229/f7ae98b5.webp" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            <h2>Differences between sql and nosql databases.</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>SQL</h3>
                                    <p>1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</p>
                                    <p>2.These databases have fixed or static or predefined schema</p>
                                    <p>3.These databases are not suited for hierarchical data storage. </p>
                                </div>
                                <div className="col-md-6">
                                    <h3>NoSQL</h3>
                                    <p>1.Non-relational or distributed database system..</p>
                                    <p>2.They have dynamic schema</p>
                                    <p>3. These databases are best suited for hierarchical data storage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border m-2 my-5 p-2 shadow-lg">
                    <div className="col-md-4">
                        <div className="w-100">
                            <img src="https://www.devonblog.com/wp-content/uploads/2018/08/jwt_05.jpg" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h3>What is the purpose of jwt and how does it work?</h3>
                        <p className="fs-5">
                        JWT ar chiefly used for authentication. when a user logs in to associate application, the appliance can produce a JWT and send it back to the user. consequent requests by the user can embody the JWT. The token tells the server what routes, services, and resources the user is allowed to access. JWT usually|will be|is|may be simply used across multiple domains in order that they ar often used for Single sign up.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;