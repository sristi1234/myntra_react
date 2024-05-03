import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../state/store/cartSlice' 
import {getProducts } from '../state/store/productSlice'
import { Alert } from 'react-bootstrap';

const Product = () =>{
  const dispatch = useDispatch();
  const {data :products, status} = useSelector(state => state.products)
  useEffect(() =>{
       

          dispatch(getProducts());
          console.log(getProducts())
   
  }, [])

  if(status === 'loading')
  {
     return <h1>Loading....</h1>

  }

  if(status === 'error')
  {
    return <Alert variant='Danger'> Something went wrong !!! Please try again later</Alert>
  }
    
  const addToCart = (product) =>{
      dispatch(add(product))

  }
    console.log(products)

    const cards = products.map((product)  => (
       
    
       <div className='col-md-3' style={{marginBottom: '18px'}}>
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.images} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        INR:{product.price}
         
        
      </Card.Text>
      
    </Card.Body>
    <Card.Footer style={{background: 'white'}}>
    <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
    </Card.Footer>
  </Card>
  </div>

) ) 
    return (
        <>
        <div className="row">

        {  cards}
     
    </div>

        </>
    )
}

export default Product;