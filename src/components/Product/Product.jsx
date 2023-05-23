import {} from 'react';
import './Product.css'

const Product = (props) => {
    const{img,name,seller,price,stock}=props.myProduct;
    return (
        <div className='myproduct'>
            <div>
            <h4>
                <img src={img} alt="" /></h4>
            </div>
            <div className='content-container'>
            <h3 className='product-name'>{name}</h3>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p><small>only {stock} left in stock --Order soon</small></p>
            <br/>
            <button onClick={()=>props.handalAddCardBtn(props.myProduct)} className='main-button'>add to card</button>
            </div>
        </div>
        );
    
};

export default Product;