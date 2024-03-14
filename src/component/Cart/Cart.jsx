/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({carts, remainingHour , addCredit}) => {
    // console.log(carts)
    return (
        <div className='border p-4 shadow-2xl rounded-lg'>
            <h3 className='text-2xl font-bold text-center'>Credit Hour Remaining {remainingHour} hr</h3>
            <div className='divider'></div>
            <div>
                <p className='font-bold text-2xl'>Course Name:</p>
               <ul className='text-xl font-bold'>
                    {
                        carts.map(cart=><li>{cart.name}</li>)
                    }
               </ul>
            </div> 
            <div className='divider'></div>
            <div>
                <p className='font-bold text-xl'>Total credit Hour:{addCredit}</p>
            </div>
            <div className='divider'></div>
            <div>
                <p className='font-bold text-xl'>Total Price: {carts.reduce((p,c)=>p+c.price,0)} USD</p>
            </div>
        </div>
    );
};

export default Cart;