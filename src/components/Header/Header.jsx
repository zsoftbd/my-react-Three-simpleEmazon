import {} from 'react';
import logo from '../../images/logo.png';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="./shop">Shop</a>
                <a href="./order">Order Review</a>
                <a href="./manage">Manage Inventory</a> 
            </nav>

        </div>
    );
};

export default Header;