import React from 'react';
import useWatch from '../../Hooks/UseWatch';
import InventoryDetails from './InventoryDetails';

const Inventory = () => {
    const [watchs] = useWatch();
    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-6'>
                        <h1 className='text-info text-start display-3 py-5 fw-bold'>Inventory</h1>
                    </div>
                    <div className='col-6 mt-4'>
                        <h2 className='text-dark text-end display-6 py-5 fw-bold'>Total Item: {watchs.length}</h2>
                    </div>
                </div>
                <div className="row g-5">
                    {
                        watchs.map(watch => <InventoryDetails
                            key={watch._id}
                            watch={watch}
                        >
                        </InventoryDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;