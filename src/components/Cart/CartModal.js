

import { Button, Image } from 'react-bootstrap';
import classes from './CartModal.module.css';




const CartModal = props =>{

    const price = `$${props.price.toFixed(2)}`
       return (
         <li className={ `list-unstyled  p-5 mb-1 border-bottom border-dark ${classes['cart-item']}`}>

         <section className='d-flex  justify-content-between  align-items-center'>

            <div className='d-flex flex-column'>
            <Image width={80} height={80} src={props.imageUrl} rounded/>
            <span className='fw-bold'>{props.title}</span>
            </div>
    
            <div className='fw-bold mx-3'>
                {price}
            </div>
            <div>
            <span  className='fw-bold '>{`x ${props.quantity}`} </span> 
            </div>

            <div className={`d-flex gap-2 justify-content-centre ${classes.actions}`}>

                <Button onClick={props.onAdd} variant='primary'>+</Button>
                <Button onClick={props.onRemove} variant='danger'>-</Button>
            </div>

            </section>
         </li>   

    )    
};

export default CartModal;