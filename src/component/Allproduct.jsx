import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, AddToWishlist } from '../features/cartSlice';

const Allproduct = () => {

  const dispatch = useDispatch()
  const data = useSelector((c)=>c.AllCart.items)
  console.log(data);
  
  return (
    
    <div className="product-grid">
      <MDBContainer>
        <MDBRow>
        { data.map((item , key)=>(
           <MDBCol size='md-4' key={item.id}>
            <MDBCard id=''>
              <MDBCardImage src={item.img} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>
                  {item.discription}
                </MDBCardText>
                <MDBCardTitle>{item.price}</MDBCardTitle>
                <MDBBtn onClick={()=>dispatch(AddToCart(item))}>Add to cart</MDBBtn>
                <MDBBtn color="light" className="ms-2" onClick={()=>dispatch(AddToWishlist(item))}>Add to wishlist</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
         ))}
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Allproduct
