import { useEffect ,useState } from "react";
import { Image,Button, Badge } from "react-bootstrap";
import Navigation from "../Navigation";
import classes from './ProductDetail.module.css'
import { useParams } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { TiAttachmentOutline } from "react-icons/ti";
import { FaMapLocation } from "react-icons/fa6";


// import { useContext } from "react";
// import classes from './ProductDetail.module.css';
// import CartContext from "../Store/CartContext";
// import { useContext } from "react";

const ProductDetail = (props) => {
    const [product,setProduct]= useState(null);
    
    
    const {productId} = useParams();

    const fetchproduct = async() => {
    try {
            const response = await fetch(`https://ecommerce-5696a-default-rtdb.firebaseio.com/product/${productId}.json`);
            if(!response.ok) throw new Error('Product  not fetched ..Check Again Error!!!');
    
            const data = await response.json();

            setProduct(data);

    } catch (error) {
        console.log(error)
    }
    }

    useEffect(()=>{
        fetchproduct();
    })

   if(!product) return <p className={classes.loading}>Loading....</p>

    return(
           
        
        <div>
        <Navigation onshow={props.onshow}/>
    
       <div className={`"m-1 p-2 float-start hv-100" ${classes.float}`}>
        <Image width={250} height={1050} src={product.imageUrl} thumbnail/>

        <div className="d-flex  m-2 p-2 gap-2">
        <Button variant="warning">Add To Cart</Button>
        <Button variant="danger">BuyNow</Button>
        </div>
       
       </div>

       <div>
        <h3 className="fst-italic">{product.title}</h3>
        <p className="fs-6 fw-bold text-success">Special price</p>

        <div className=" d-flex fs-5 fw-bold align-items-center gap-3">
        <p className="mb-0.5"><span><FaIndianRupeeSign /></span>{product.price}</p>
        <p  className="fw-normal"><s>{product.price+300}</s></p>
        <p className="fw-bold fs-6 text-success">73% off</p>
        </div>

        <div className="d-flex  align-items-center gap-2 m-0">
            <Badge pill  className="fs-6 p-0.5" bg="success">3.8<span className="m-1"><MdStars /></span></Badge>
            <p className="fs-6 fw-ligher pt-1">17,567 ratings and 1596 reviews</p>
        </div>

        <div className="d-flex flex-wrap gap-5 my-5">
            <p>Size</p>
            <div className={classes.span}>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>

        </div>
        </div>

        <div className={classes.offers}>
            <h4>Available offers</h4>
            <div>
                <p><TiAttachmentOutline /><span> Bank Offer</span> Get ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above <span>T&C</span></p>
                <p><TiAttachmentOutline /><span> Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card <span>T&C</span></p>
                <p><TiAttachmentOutline /><span> Special Price</span>Get extra 8% off (price inclusive of cashback/coupon) <span>T&C</span></p>
                <p><TiAttachmentOutline /> Buy for 2000 get ₹500 off your Next Buy <span>T&C</span></p>
                <p><TiAttachmentOutline /><span> Partner Offer</span> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000* <span>Know More</span></p>
            </div>
        </div>
        
       

        <div className={`${classes.deliver} my-5 d-flex flex-wrap gap-4 align-items-end`}>
        <div>
        <p><span><FaMapLocation /></span> Deliver to</p>
        <input placeholder="Enter delivery pincode" type="text" />
        </div>
        <div>
        Delivery by Tuesday|<span>Free</span><FaIndianRupeeSign /><s>40</s>
        </div>
        
        </div>
        
       
       </div>  
       
     

        </div>

    )

};


export default ProductDetail;