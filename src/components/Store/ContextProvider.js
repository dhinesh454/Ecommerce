import { useReducer,useEffect } from "react";
import CartContext from "./CartContext";
import { Alert } from "react-bootstrap";

const defaultCartState = {
    items:[],
    totalAmount:0,
    alertMessage:''
}


const cartReducer = (state,action)=> {

    if (action.type === 'ADD') {
      
        const updatedTotalAmount =
          state.totalAmount + action.item.price * 1;
    
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
    
        if (existingCartItem) {
      
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + 1,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }

    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          alertMessage:existingCartItem?'':`You Successfully Added the Product: ${action.item.title}`
        };
      }


      if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          alertMessage:`You Removed the Product: ${existingItem.title}`
        };
      }


      if (action.type === 'CLEAR_ALERT') {
        return {
            ...state,
            alertMessage: '' // Clear the alert message
        };
      }
      return defaultCartState;

}

const CartProvider = (props) => {

    const [cartState , dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    useEffect(() => {
      if (cartState.alertMessage !== '') {
          const timer = setTimeout(() => {
              dispatchCartAction({ type: 'CLEAR_ALERT' });
          }, 3000);
          return () => clearTimeout(timer);
      }
  }, [cartState.alertMessage]);

    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type:'ADD' , item : item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE' , id:id})
    }

    // const closeAlertHandler = ()=>{
    //   setShowAlert(false);
    //   setAlertMessage("");
    // }


    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }

    return(
      <>
      {cartState.alertMessage !== '' && 
      <Alert variant="danger" dismissible onClose={() => dispatchCartAction({ type: 'CLEAR_ALERT' })}>
          <Alert.Heading>{cartState.alertMessage}</Alert.Heading>
      </Alert>}
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
           

   

        </> 
    )


}


export default CartProvider;