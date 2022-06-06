import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryDetails = ({ watch }) => {
    const {_id, title, price, image, description, quantity, supplier } = watch;
    const navigate = useNavigate();

    const handleNavigateClick = id => {
        navigate(`/watch/${id}`);
    }

    return (
        <div className="col-md-4">
            <div className="card border-0 shadow-lg rounded-3">
                <img src={image} className="w-75 mx-auto card-img-top fit-img img-fluid" alt="" />
                <div className="card-body">
                    <h3 className="card-title fw-bold">{title}</h3>
                    <table className="table table-bordered border-info table-striped table-hover">
                        <thead className='bg-info'>
                            <tr>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Supplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${price}</td>
                                <td>{quantity}</td>
                                <td>{supplier}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="card-text">{description}</p>
                    <button onClick={()=>handleNavigateClick(_id)} className='btn btn-outline-info shadow'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;