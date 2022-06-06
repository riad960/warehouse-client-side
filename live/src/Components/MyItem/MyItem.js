import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import InventoryDetails from '../Inventory/InventoryDetails';

const MyItem = () => {

    const [user] = useAuthState(auth);
    const [userAddDetails, setUserAddDetails] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const email = user.email;
            const url = `https://infinite-inlet-85185.herokuapp.com/watch?email=${email}`;
            const { data } = await axios.get(url)
            setUserAddDetails(data);
        }
        fetchData();

    }, []);

    return (
        <div className='mt-5 py-5'>
            <Container>
                <h1 className='text-center'>My Items</h1>
                <div className="row g-5">
                    {
                        userAddDetails.map(watch => <InventoryDetails
                            key={watch._id}
                            watch={watch}
                        >
                        </InventoryDetails>)
                    }
                </div>
                <div className='row'>
                    <div className="col-md-4">

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyItem;