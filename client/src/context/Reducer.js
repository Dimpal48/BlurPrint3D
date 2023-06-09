export const actionType = {
    SET_USER: "SET_USER",
    SET_SHOP_ITEMS: "SET_SHOP_ITEMS",
    SET_SERVICES_ITEMS: "SET_SERVICES_ITEMS",
    SET_BLOGS_ITEMS: "SET_BLOGS_ITEMS",
    SET_CART_SHOW: "SET_CART_SHOW",
    SET_CARTITEMS: "SET_CARTITEMS",

  };//
  
  const reducer = (state, action) => {
    // console.log(action);
  
    switch (action.type) {
      case actionType.SET_USER:
        return {
          ...state,
          user: action.user,
        };
  
      case actionType.SET_SHOP_ITEMS:
        return {
          ...state,
          shopItems: action.shopItems,
        };

        case actionType.SET_SERVICES_ITEMS:
          return {
            ...state,
            servicesItems: action.servicesItems,
          };
          case actionType.SET_BLOGS_ITEMS:
          return {
            ...state,
            blogsItems: action.blogsItems,
          };
  
      case actionType.SET_CART_SHOW:
        return {
          ...state,
          cartShow: action.cartShow,
        };
  
      case actionType.SET_CARTITEMS:
        return {
          ...state,
          cartItems: action.cartItems,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;