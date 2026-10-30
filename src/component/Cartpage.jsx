import React, { useEffect } from "react";
import {
MDBBtn,
MDBCard,
MDBCardBody,
MDBCardHeader,
MDBCardImage,
MDBCol,
MDBContainer,
MDBIcon,
MDBInput,
MDBListGroup,
MDBListGroupItem,
MDBRipple,
MDBRow,
MDBTooltip,
MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, IncreaseItemQuantity, DecreaseItemQuantity, removeItem, AddToWishlist } from "../features/cartSlice";
import { Link } from "react-router-dom";


const Cartpage = () => {
 
//  console.log(cart);
//   console.log(totalQuantity);
//    console.log(totalprice);

   const dispatch = useDispatch();
const { cart, totalQuantity, totalprice } = useSelector( (state) => state.AllCart ); 
   useEffect(()=>{
    dispatch(getCartTotal())
   }, [cart])
  return (
    <div className="cart-page">
      <section className="h-100">
  <MDBContainer className="py-3 h-100 cart-layout">
    <MDBRow className="justify-content-center my-4">
      <MDBCol md="8">
        <MDBCard className="mb-4">
          <MDBCardHeader className="py-3">
            <MDBTypography tag="h5" className="mb-0">
              Cart - {cart.length} items
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
           {cart.length === 0 ? <div className="empty-cart">Your cart is empty. Add something delicious!</div> : cart.map((item) => (
               <MDBRow className="cart-item" key={item.id}>
              <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                <MDBRipple rippleTag="div" rippleColor="light"
                  className="cart-image-frame">
                  <img
                    src={item.img}
                    className="cart-image"
                    alt={item.title} />
                </MDBRipple>
              </MDBCol>

              <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                <p className="cart-item-title">
                  <strong>{item.title}</strong>
                </p>

                <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                  title="Remove item">
                  <MDBIcon className="cart-action" fas icon="trash" onClick={()=>dispatch(removeItem(item.id))}/>
                </MDBTooltip>

                <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
                  title="Move to the wish list">
                  <MDBIcon className="cart-action" fas icon="heart" onClick={()=>dispatch(AddToWishlist(item))} />
                </MDBTooltip>
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                <div className="d-flex mb-3 quantity-control">
                  <MDBBtn className="px-3 me-2" size="sm" onClick={()=>dispatch(DecreaseItemQuantity(item.id))}>
                    <MDBIcon fas icon="minus" />
                  </MDBBtn>

                  <MDBInput className="quantity-input" value={item.quantity} min={1} type="text" label="Qty" readOnly />

                  <MDBBtn className="px-3 ms-2" size="sm" onClick={()=>dispatch(IncreaseItemQuantity(item.id))}>
                    <MDBIcon fas icon="plus"  />
                  </MDBBtn>
                </div>

                <p className="text-start text-md-center">
                  <strong>{item.price * item.quantity}</strong>
                </p>
              </MDBCol>
            </MDBRow>
            ))
           
}
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mb-4">
          <MDBCardBody>
            <p>
              <strong>Expected shipping delivery</strong>
            </p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mb-4 mb-lg-0">
          <MDBCardBody>
            <p>
              <strong>We accept</strong>
            </p>
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
              alt="PayPal acceptance mark" />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard className="mb-4 summary-card">
          <MDBCardHeader>
            <MDBTypography tag="h5" className="mb-0">
              Summary
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBListGroup flush>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total Quantity
                <span>{totalQuantity}</span>
              </MDBListGroupItem>
              
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including TAX)</p>
                  </strong>
                </div>
                <span>
                  <strong>{totalprice}</strong>
                </span>
              </MDBListGroupItem>
            </MDBListGroup>

            <Link className="btn btn-danger btn-lg w-100" to="/checkout">Go to checkout</Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
    </div>
  )
}

export default Cartpage
