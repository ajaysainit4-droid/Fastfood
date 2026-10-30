import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart, RemoveFromWishlist } from '../features/cartSlice';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.AllCart.wishlist);
  const dispatch = useDispatch();

  return (
    <main className="container py-5">
      <h2 className="mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <div className="card p-4">
          <p className="mb-3">Your wishlist is empty.</p>
          <Link className="btn btn-danger align-self-start" to="/allproduct">Browse products</Link>
        </div>
      ) : (
        <div className="row g-3">
          {wishlist.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card h-100">
                <img src={item.img} className="card-img-top p-3" alt={item.title} style={{ height: 200, objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">₹{item.price}</p>
                  <button className="btn btn-danger me-2" onClick={() => dispatch(AddToCart(item))}>Add to cart</button>
                  <button className="btn btn-outline-secondary" onClick={() => dispatch(RemoveFromWishlist(item.id))}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Wishlist;
