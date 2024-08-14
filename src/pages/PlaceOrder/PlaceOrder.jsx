/* eslint-disable no-unused-vars */
import React, { useContext,useState } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phone: ''
    });

     // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
   // Handle form submission
   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('https://food-store-backend-omega.vercel.app/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Form submitted successfully');
      } else {
        // Handle error response
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <form className="place-order" onSubmit={handleSubmit}>
        <div className="place-order-left">
           <p className="title">Delivery Information</p>
           <div className="multifields">
            <input type="text" placeholder='First Name' 
            name="firstName" value={formData.firstName} 
            onChange={handleChange} />
            <input type="text" placeholder='Last Name' name="lastName" value={formData.lastName} 
            onChange={handleChange}/>
           </div>
           <input type="email" placeholder='Email Address'name="email" 
          value={formData.email} 
          onChange={handleChange}/>
            <input type="text" placeholder='Street' name="street" 
          value={formData.street} 
          onChange={handleChange} />
            <div className="multifields">
            <input type="text" placeholder='City' name="city" 
            value={formData.city} 
            onChange={handleChange} />
            <input type="text" placeholder='State'name="state" 
            value={formData.state} 
            onChange={handleChange}/>
           </div>
           <div className="multifields">
            <input type="text" placeholder='Zip code'name="zipCode" 
            value={formData.zipCode} 
            onChange={handleChange} />
            <input type="text" placeholder='Country'name="country" 
            value={formData.country} 
            onChange={handleChange}/>
           </div>
           <input type="text" placeholder='Phone'  name="phone" 
          value={formData.phone} 
          onChange={handleChange}/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b className="total">₹{getTotalCartAmount()===0?0:getTotalCartAmount()+ 40}</b>
            </div>
          </div>
          <button type='submit' >PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder