import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { getCartTotal } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const{cart , totalQuantity} = useSelector((state)=>(state.AllCart))
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCartTotal())
    }, [cart])
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg" id='nav'>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/allproduct" id='brandname'><span id='logo'><i className="fa-solid fa-utensils"></i></span>FastFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/allproduct">All Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cartpage">Cart <span className="badge rounded-pill bg-danger ms-1">{totalQuantity}</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Wishlist">Wishlist</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">North india</a></li>
                                    <li><a class="dropdown-item" href="#">south india</a></li>
                                       <li><a class="dropdown-item" href="#">chinese</a></li>
                                     <li><a class="dropdown-item" href="#">italian</a></li>
                                        <li><a class="dropdown-item" href="#">Korean</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
