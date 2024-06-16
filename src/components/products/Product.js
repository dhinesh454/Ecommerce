
import classes from './Product.module.css';
import Productlist from "./Productlist";

// const productsArr = [

//     {
    
//     title: 'Album 1',
    
//     price: 100,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
//     },
    
//     {
    
//     title: 'Album 2',
    
//     price: 50,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
//     },
    
//     {
    
//     title: 'Album 3',
    
//     price: 70,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     },
    
//     {
    
//     title: 'Album 4',
    
//     price: 150,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
//     },

//     {
//     title: 'Album 5',
    
//     price: 15.60,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     },

//     {
//     title: 'Album 6',
    
//     price: 25,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     }
    
//     ]


const Product = (props) => {

const Products = props.products.map((item)=>(
    <Productlist
        id={item.id}
        key = {item.id}
        title ={item.title}
        price ={item.price}
        imageUrl={item.imageUrl}

    />

   
))


    return (

        <div className={`${classes.container} text-unstyled mb-5 `}>
          {Products}
        </div>
             
                
               
        

    
    )
};

export default Product;



                       

// <div  className="m-2 p-2">
// <h3>Containerors</h3>
// <Image width={180} height={180} src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" rounded/>
// <div>
// <span>$<span>19.99</span></span>
// <Button>Add to cart</Button>
// </div>
// </div>

// <div  className="m-2 p-2">
// <h3>Containerors</h3>
// <Image width={180} height={180} src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" rounded/>
// <div>
// <span>$<span>19.99</span></span>
// <Button>Add to cart</Button>
// </div>
// </div>

// <div  className="m-2 p-2">
// <h3>Containerors</h3>
// <Image width={180} height={180} src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" rounded/>
// <div>
// <span>$<span>19.99</span></span>
// <Button>Add to cart</Button>
// </div>
// </div>

// <div  className="m-2 p-2">
// <h3>Containerors</h3>
// <Image width={180} height={180} src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" rounded/>
// <div>
// <span>$<span>19.99</span></span>
// <Button>Add to cart</Button>
// </div>
// </div>












// <Figure>
// <Figure.Caption>
// Nulla vitae elit libero, a pharetra augue mollis interdum.
// </Figure.Caption>
// <Figure.Image
//   width={171}
//   height={180}
//   alt="171x180"
//   src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
  
// />

// </Figure>

// <Figure>
// <Figure.Caption>
// Nulla vitae elit libero, a pharetra augue mollis interdum.
// </Figure.Caption>
// <Figure.Image
// width={171}
// height={180}
// alt="171x180"
// src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"

// />

// </Figure>

// <Figure>
// <Figure.Caption>
// Nulla vitae elit libero, a pharetra augue mollis interdum.
// </Figure.Caption>
// <Figure.Image
// width={171}
// height={180}
// alt="171x180"
// src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"

// />

// </Figure>

// <Figure>
// <Figure.Caption>
// Nulla vitae elit libero, a pharetra augue mollis interdum.
// </Figure.Caption>
// <Figure.Image
// width={171}
// height={180}
// alt="171x180"
// src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"

// />

// </Figure>

// <Figure>
// <Figure.Caption>
// Nulla vitae elit libero, a pharetra augue mollis interdum.
// </Figure.Caption>
// <Figure.Image
// width={171}
// height={180}
// alt="171x180"
// src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"

// />

// </Figure>