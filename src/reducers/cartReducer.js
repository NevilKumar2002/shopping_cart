const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Add item to cart and handle duplicates here
        const newItem = action.payload;
        const existingItem = state.cart.find((item) => item.id === newItem.id);
        if (!existingItem) {
          return { ...state, cart: [...state.cart, newItem] };
        } else {
          return state;
        }
      case 'REMOVE_FROM_CART':
        // Remove item from cart
        const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
        return { ...state, cart: updatedCart };
        case 'CLEAR_CART':
            return { ...state, cart: [] };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  