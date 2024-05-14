

import { Button, Image } from 'react-bootstrap';
import classes from './CartModal.module.css'



const CartModal = props =>{

    const price = `$${props.price.toFixed(2)}`
       return (
         <li className={ `list-unstyled  p-5 mb-1 border-bottom border-dark ${classes['cart-item']}`}>

         <section className='d-flex  justify-content-between  align-items-center'>

            <div className='d-flex flex-column'>
            <Image width={80} height={80} src={props.imageUrl} rounded/>
            <span className='fw-bold m-2'>{props.title}</span>
            </div>
    
            <div className='fw-bold mx-5'>
                {price}
            </div>
            

            <div className={`d-flex gap-3 justify-content-centre ${classes.actions}`}>
               <span  className='fw-bold mx-5'>{`x ${props.quantity}`} </span> 
                <Button variant='primary'>+</Button>
                <Button variant='danger'>-</Button>
            </div>

            </section>
         </li>   

    )    
};

export default CartModal;