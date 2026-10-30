import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { cart, totalQuantity, totalprice } = useSelector((state) => state.AllCart);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <main className="container py-5">
        <div className="card p-4">
          <h2>Order placed!</h2>
          <p className="mb-3">Thank you. Your order is confirmed.</p>
          <Link className="btn btn-danger align-self-start" to="/allproduct">Back to products</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <div className="card p-4">
          <p>Your cart is empty. Add a product before checkout.</p>
          <Link className="btn btn-danger align-self-start" to="/allproduct">Browse products</Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-md-7">
            <form className="card p-4" onSubmit={handleSubmit}>
              <h5 className="mb-3">Delivery details</h5>
              <label className="form-label" htmlFor="customer-name">Full name</label>
              <input className="form-control mb-3" id="customer-name" type="text" required />

              <label className="form-label" htmlFor="customer-phone">Phone number</label>
              <input className="form-control mb-3" id="customer-phone" type="tel" required />

              <label className="form-label" htmlFor="delivery-address">Delivery address</label>
              <textarea className="form-control mb-3" id="delivery-address" rows="3" required />

              <label className="form-label" htmlFor="payment-method">Payment method</label>
              <select className="form-select mb-4" id="payment-method" defaultValue="cash">
                <option value="cash">Cash on delivery</option>
                <option value="online">Pay online (demo)</option>
              </select>
              <button className="btn btn-danger" type="submit">Place order</button>
            </form>
          </div>

          <div className="col-md-5">
            <div className="card p-4">
              <h5 className="mb-3">Order summary</h5>
              {cart.map((item) => (
                <div className="d-flex justify-content-between mb-2" key={item.id}>
                  <span>{item.title} × {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Total items</span><span>{totalQuantity}</span>
              </div>
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span><span>₹{totalprice}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Checkout;
