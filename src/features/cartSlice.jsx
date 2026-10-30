import { createSlice } from '@reduxjs/toolkit'
import ProductData from '../../ProductData'

const initialState = {
    cart: [],
    wishlist: [],
    items: ProductData,
    totalQuantity: 0,
    totalprice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart : (state , action)=>{
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if(find >= 0){
        state.cart[find].quantity += 1;
      }
      else{
        state.cart.push(action.payload);
      }
    } ,

    AddToWishlist: (state, action) => {
      if (!state.wishlist.some((item) => item.id === action.payload.id)) {
        state.wishlist.push(action.payload);
      }
    },

    RemoveFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
    },
    
    getCartTotal: (state)=>{
      let {totalQuantity , totalprice} = state.cart.reduce(
        (cartTotal , cartItem) =>{
          console.log("cartTotal" , cartTotal);
          console.log("cartItem", cartItem);
          const {price , quantity} = cartItem;
          console.log(price , quantity);
          const itemTotal = price * quantity;
          cartTotal.totalprice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalprice : 0,
          totalQuantity : 0,
        }
      );
      state.totalprice = parseInt(totalprice.toFixed(2));
      state.totalQuantity = totalQuantity;
    } ,

    
      IncreaseItemQuantity :(state , action) => {
        state.cart = state.cart.map((item)=>{
          if(item.id === action.payload){
            return{...item , quantity: item.quantity +1};
          }
          return item;
        });
      },

        DecreaseItemQuantity :(state , action) => {
        state.cart = state.cart.map((item)=>{
          if(item.id === action.payload){
            return{...item , quantity: item.quantity -1};
          }
          return item;
        });
      },

      removeItem : (state , action) =>{
        state.cart = state.cart.filter((item)=> item.id !== action.payload);
      },
   }
})

// Action creators are generated for each case reducer function
export const { AddToCart, AddToWishlist, RemoveFromWishlist, getCartTotal, IncreaseItemQuantity, DecreaseItemQuantity, removeItem } = cartSlice.actions

export default cartSlice.reducer
