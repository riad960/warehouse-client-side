import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useWatch from '../../Hooks/UseWatch';


const ManageWatch = () => {

    const { watchId } = useParams();
    const [watchs, setWatchs] = useWatch();
    const { title, price, quantity, image, description, supplier } = watchs;
    // const [watchDetails, setWatchDetails] = useState({});
    const url = `https://infinite-inlet-85185.herokuapp.com/watch/${watchId}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setWatchs(data));
    }, [watchs]);

    const handleDelivered = () => {
        const deliveredQuantity = parseFloat(watchs.quantity) - 1;
        const delivery = deliveredQuantity.toString();
        const newQuantity = { price, image, title, description, quantity: delivery, supplier };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuantity),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        setWatchs(newQuantity);
    }

    // addQuantity

    const handleAddQuantity = (e) => {
        e.preventDefault();
        const inputValue = e.target.quantity.value;
        const quantity = parseFloat(watchs.quantity) + parseInt(inputValue);
        const newItem = { price, image, title, description, quantity, supplier };
        setWatchs(newItem);

        console.log(newItem);
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                toast("Item addedquantiy successfully", { type: "success" });
            })
        e.target.reset();
    }


    return (
        <div className='py-5'>
            <Container className='py-5'>
                <h1 className='text-center display-3'>Watch Details and Deliver or Restore</h1>
                <div className="card rounded-3 border-0 shadow-lg my-5 py-5">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={image} className="img-fluid rounded-start object-fit" style={{ height: "100%" }} alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h2 className="card-title">{title}</h2>
                                <div className="card-text">
                                    <h3>Supplier: {supplier}</h3>
                                    <h3>Price: ${price}</h3>
                                    <h3>Quantity: {quantity}</h3>
                                    <p>Description: {description}</p>
                                </div>
                            </div>
                            <button onClick={() => handleDelivered()} className='btn btn-outline-info'>Deliver</button>
                            <br />
                            <div className="input-group mt-3 " style={{ width: "350px" }}>
                                <form onSubmit={handleAddQuantity}>
                                    <input type="number" name="quantity" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-info" type="submit" id="button-addon2">Restore</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default ManageWatch;