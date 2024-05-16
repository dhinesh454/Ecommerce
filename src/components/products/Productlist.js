
import { Image,Button } from "react-bootstrap";
import classes  from './Productlist.module.css';
import CartContext from "../Store/CartContext";
import { useContext } from "react";


const Productlist = (props) => {

   const cartCtx = useContext(CartContext);

   const addToCartHandler = () => {
     cartCtx.addItem({
      id:props.id,
      title:props.title,
      amount:1,
      price:props.price,
      imageurl:props.imageUrl
     })
   }

   return (
    <div>
                <h4 className="text-center my-3 p-1 ">{props.title}</h4>
                <Image className={classes.image} width={160} height={160} src={props.imageUrl} rounded/>
            
                <div className="m-1 p-1">
                <div><p><span>Price </span>{`$${props.price}`}</p></div>
                <Button onClick={addToCartHandler}>Add to Cart</Button>
            </div>
    </div>
   )
};

export default Productlist;