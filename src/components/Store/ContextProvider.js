import { useReducer,useEffect, useState ,useCallback } from "react";
import CartContext from "./CartContext";
import { Alert } from "react-bootstrap";


const defaultCartState = {
    items:[],
    totalAmount:0,
    alertMessage:''
}


const cartReducer =  (state,action)=> {
  

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

      if (action.type === 'CLEAR') {
        return defaultCartState;
      }


      if (action.type === 'CLEAR_ALERT') {
        return {
            ...state,
            alertMessage: '' // Clear the alert message
        };
      }


      if (action.type === 'SET_ITEMS') {
        const updatedTotalAmount = action.items.reduce(
            (sum, item) => sum + item.price * item.amount,
            0
        );

        return {
            items: action.items,
            totalAmount: updatedTotalAmount,
            alertMessage: ''
        };
    }
      return defaultCartState;

}

const CartProvider = (props) => {

    const [cartState , dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );
    const initialToken = localStorage.getItem('token')
    const [token , setToken] = useState(initialToken);
    const userLoggedIn = !!token; 

    const fetchCartItems = useCallback(async () => {
      const localid = localStorage.getItem('localId');

      try {
          const response = await fetch(`https://ecommerce-5696a-default-rtdb.firebaseio.com/items/${localid}.json`);
          if (!response.ok) {
              throw new Error('Fetching cart error, please check again');
          }
          const data = await response.json();
          const fetchedItems = [];

          for (const key in data) {
              fetchedItems.push({
                  key: key,
                  id: data[key].id,
                  title: data[key].title,
                  amount: data[key].amount,
                  price: data[key].price,
                  imageurl: data[key].imageurl,
              });
          }

          dispatchCartAction({ type: 'SET_ITEMS', items: fetchedItems });
      } catch (error) {
          console.log(error);
      }
  }, []);

  useEffect(() => {
      if (userLoggedIn) {
          fetchCartItems();
      }
  }, [userLoggedIn, fetchCartItems]);

    useEffect(() => {
      if (cartState.alertMessage !== '') {
          const timer = setTimeout(() => {
              dispatchCartAction({ type: 'CLEAR_ALERT' });
          }, 3000);
          return () => clearTimeout(timer);
      }
  }, [cartState.alertMessage]);

    const addItemToCartHandler = async(item) =>{

      const localid = localStorage.getItem('localId');
  
      
      const existingCartItemIndex = cartState.items.filter(
        (cartitem) => cartitem.id === item.id
      );


      //existing items 
      if(existingCartItemIndex.length>0){

        const itemKey = existingCartItemIndex[0].key;
        try {
          const response = await fetch(`https://ecommerce-5696a-default-rtdb.firebaseio.com/items/${localid}/${itemKey}.json`,{
            method:'PATCH',
            body:JSON.stringify({amount:existingCartItemIndex[0].amount+1}),
            headers: {
              'Content-Type': 'application/json'
          }
          });
  
          if(!response.ok){
            throw new Error('Error!..check again cart items not added')
          }
  
          const data = await response.json()
          console.log(data);
        } catch (error) {
          console.log(error)
        }
    


        
      }



      ///new items added in firebase
      else{
     
      try {
        const response = await fetch(`https://ecommerce-5696a-default-rtdb.firebaseio.com/items/${localid}.json`,{
          method:'POST',
          body:JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json'
        }
        });

        if(!response.ok){
          throw new Error('Error!..check again cart items not added')
        }

        const data = await response.json()
        console.log(data.name);
        item.key = data.name;
      } catch (error) {
        console.log(error)
      }
  
    }
       
        dispatchCartAction({type:'ADD' , item : item})
    }




    //remove items from cart
    const removeItemFromCartHandler = async (id) => {
      const localid = localStorage.getItem('localId');
      
      const existingCartItemIndex = cartState.items.findIndex(
        (item) => item.id === id
      );

      const itemKey = cartState.items[existingCartItemIndex].key;
      const amount = cartState.items[existingCartItemIndex].amount;


      if(amount>1){
        try {
          const response = await fetch(`https://ecommerce-5696a-default-rtdb.firebaseio.com/items/${localid}/${itemKey}.json`,{
            method:'PATCH',
            body:JSON.stringify({amount:amount-1}),
            headers: {
              'Content-Type': 'application/json'
          }
          });
  
          if(!response.ok){
            throw new Error('Error!..check again cart items not updated..when removes')
          }
  
          const data = await response.json()
          console.log(data);
        } catch (error) {
          console.log(error)
        }
      }

      else{
        try {
          const res =  await fetch(`https://ecommerce-5696a-default-rtdb.firebaseio.com/items/${localid}/${itemKey}.json`, {
              method: 'DELETE',
          });
          if (!res.ok) {
              throw new Error('Failed to delete cart item.');
          }
      } catch (error) {
          console.error(error);
      }
    }  

        dispatchCartAction({type:'REMOVE' , id:id})
    }

    const clearCartHandler = () => {
      dispatchCartAction({ type: 'CLEAR' });
    };

    const loginHandler = (token)=>{
      setToken(token);
      localStorage.setItem('token',token)

    };


    const logoutHandler = () => {
      setToken(null);
      localStorage.removeItem('token');
      localStorage.removeItem('localId');
    }



    const setItemsHandler = (items) => {
      dispatchCartAction({ type: 'SET_ITEMS', items: items });
    };

   
    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        clearCart: clearCartHandler,
        setItems: setItemsHandler,
        token:token,
        isLoggedIn:userLoggedIn,
        login:loginHandler,
        logout:logoutHandler,

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