import React from "react";
import CartModal from "./CartModal";
import { Button, Modal } from "react-bootstrap";
import classes from './Cart.module.css'


const cartElements = [

    {
    
    title: 'Album 1',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Album 2',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Album 3',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    } ,

    {
    
        title: 'Album 4',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        },

        {
    
            title: 'Album 5',
            
            price: 70,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            
            quantity: 1,
            
            },


            {
    
                title: 'Album 6',
                
                price: 70,
                
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
                
                quantity: 1,
                
                },


                {
    
                    title: 'Album 7',
                    
                    price: 70,
                    
                    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
                    
                    quantity: 1,
                    
                    },

                    {
    
                        title: 'Album 8',
                        
                        price: 70,
                        
                        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
                        
                        quantity: 1,
                        
                        }
    
    ]

const Cart = (props) => {



       const cartList = (<ul className={classes['cart-item']}>
       
      { cartElements.map(item => <CartModal
        key={item.title}
        title={item.title}
        imageUrl={item.imageUrl}
        price={item.price}
        quantity={item.quantity}
    
    />)}
        
        </ul>);
       


        return (
            <Modal size='lg' show={props.show} onHide={props.onhideCart}>
            <Modal.Header closeButton>
                <Modal.Title className={`${classes['modal-title']}`}>Cart</Modal.Title>

            </Modal.Header> 
            <Modal.Body>
            <div className="d-flex justify-content-evenly" >
                <span>ITEM</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
                
            </div>
            
                {cartList}
                <div className="m-3 p-2 fs-3 fw-bold d-flex flex-row-reverse gap-4">
                    <span>$200.00</span>
                    <span> Total Amount</span>
                </div>
            
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onhideCart}>Close</Button>
                <Button variant='primary'>Purchase</Button> 
            </Modal.Footer>
        </Modal>

        )
       
};

export default Cart;