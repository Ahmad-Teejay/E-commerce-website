import React, { useState } from 'react'
import "./Checkout.css";
import useCart from '../context/CartContext';

function Checkout() {
 const {cart,subTotal,shipping,discount,total} = useCart()
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
    })
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^0\d{10}$/;
    function handleChange(e){
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        setErrors({
            ...errors,
            [e.target.name]: "",
        })
    }
    function handleSubmit(e){
       e.preventDefault()

       console.log(formData);
       const newErrors = {}

       if(!formData.name){
        newErrors.name = "Name is required"
       }
       if (!formData.email) {
        newErrors.email = "Email is required"
       } else if(!emailPattern.test(formData.email)){
        newErrors.email = "Enter a valid email address"
       }
       if (!formData.phone) {
        newErrors.phone = "Phone is required"
       } else if(!phonePattern.test(formData.phone)){
        newErrors.phone = "Enter a valid phone number"
       }
       if (!formData.address) {
        newErrors.address = "Address is required"
       }
       if (!formData.city) {
        newErrors.city = "City is required"
       }
       if (!formData.country) {
        newErrors.country = "Country is required"       
       }
       
       if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
       }

       console.log("Form is Valid")
    }
  return (
    <div className="checkout-page">
    <div className="checkout-container">

    <section className="checkout-form-section">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit} className="checkout-form">

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="08012345678"
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter country"
            />
            {errors.country && <p className="error-message">{errors.country}</p>}
          </div>
        </div>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>

      </form>
    </section>


    <aside className="order-summary">
  <h2>Order Summary</h2>

  {/* Cart Items */}
  <div className="summary-items">
    {cart.map((item) => (
      <div className="summary-item" key={item.product.id}>

        <div className="summary-item-info">
          <img
            src={item.product.thumbnail}
            alt={item.product.title}
          />

          <div>
            <p className="summary-item-title">
              {item.product.title}
            </p>

            <p className="summary-item-quantity">
              Qty: {item.quantity}
            </p>
          </div>
        </div>

        <span className="summary-item-price">
          ${(item.product.price * item.quantity).toFixed(2)}
        </span>

      </div>
    ))}
  </div>

  {/* Price Summary */}
  <div className="summary-prices">

    <div className="summary-line">
      <span>Subtotal</span>
      <span>${subTotal.toFixed(2)}</span>
    </div>

    <div className="summary-line">
      <span>Shipping</span>
      <span>
        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
      </span>
    </div>

    <div className="summary-line">
      <span>Discount</span>
      <span className="discount-value">
        -${discount.toFixed(2)}
      </span>
    </div>

  </div>

  <div className="summary-divider"></div>

  {/* Total */}
  <div className="summary-total">
    <span>Total</span>

    <strong>
      ${total.toFixed(2)}
    </strong>
  </div>

</aside>
  </div>
</div>
  )
}

export default Checkout