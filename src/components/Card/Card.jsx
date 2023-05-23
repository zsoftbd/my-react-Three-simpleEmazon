import {} from 'react';
import './Card.css'
const Card = (props) => {
    const card=props.card;
    // using reduce total price
    // const total=card.reduce((total,proprty)=>total+proprty.price,0)


    // using for loop total price 
    let total=0;
    for(let i=0;i<card.length;i++){
            total+=card[i].price;
        }
        let shiping=0;
        if(total>35){
            shiping= 0;
        }
        else if(total>15){
            shiping= 4.99;
        }else if(total>0){
            shiping= 12;
        }

        const tax=(total / 10).toFixed(2);
        const grendTotal=(total+shiping+Number(tax)).toFixed(2);

        const formatnumber=(num)=>{
            const presetion=num.toFixed(2);
            return Number(presetion);
        }

    return (
        <div className='PriceCard'>
              <h3 className='gap'>Order Summary </h3>
              <p className='gap'>Items Ordered: {card.length} </p>
              <p>Items: {formatnumber(total)} </p>
              <p>Shipping & Handling: {shiping} </p>
              <p>Total before tax: {tax} </p>

              <h3 className='totalPrice'>Order Total: {grendTotal}</h3>
              <button className='reviewBtn'>Review your order</button>
        </div>
    );
};

export default Card;