import {useEffect,useState} from 'react';
import product from './Pro.json';
import Product from '../Product/Product';
import './Shop.css'
import Card from '../Card/Card';



function Shop() {
  const first10= product.slice(0,10);
  const[products,setProducts]=useState(first10)
  useEffect(()=>{
    setProducts(product)
  }, [])
  
  const[card,setCard]=useState([])
  const handalAddCardBtn=(myProduct)=>{
    setCard([...card,myProduct])
  }
  return (
    <div className='shop-container'>
        <div className="product-container">
          {
              products.map(pd=> <Product handalAddCardBtn={handalAddCardBtn} myProduct={pd} key={'B002RL8IYK'} />)
            }
        </div>
        <div className="card-continer">
              <Card card={card} />
        </div>
    </div>
  )
}

export default Shop;