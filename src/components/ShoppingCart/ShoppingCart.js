import React, {useState} from 'react';
import { connect } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';
import classes from './ShoppingCart.module.css';
import Modal from '../UI/Modal/Modal';
import Product from '../Products/Product/Product';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';
import * as actionTypes from '../../Store/Actions/Actions';


const shoppingCart = props => {
    const [showModal, updateModalState] = useState(false);
    const [item, setItem] = useState({});
    const [selected, setSelected] = useState({});
    let content = <Spinner />;
    const backdropClicked = () => {
        updateModalState(false);
    }
    const editSelection = item => {
       let id = item.id[0];
       let prod = props.products.filter(product => product.id === +id);
        setItem(prod[0]);
        setSelected(item);
        updateModalState(true);
    }
    const checkoutHandler = () => {
        alert('Thanks for shopping with us. Your purchase will be delivered soon.');
        props.clearCart();
    }
    
    if (props.shoppingCart.length > 0){
        let items = props.shoppingCart.map((item, i) => {
            return <ShoppingCartItem key={i} name={item.name}
                    price={item.price} id={item.id} image={item.image} 
                    edit={() => editSelection(item)}
                    color={item.color} size={item.size}
                    />
        })
        content = (
            <div>
                <Button clicked={props.hideCart}>Continue Shopping</Button>
                <div className={classes.Items}>{items}</div>
                <p className={classes.Total}>Total: ${props.totalPrice}</p>
                <Button clicked={checkoutHandler}>Checkout</Button>
                <Modal showModal={showModal} backdropClicked={backdropClicked}><Product inShoppingCart='true' selection={selected} hideModal={backdropClicked} details={item}/></Modal>
                
            </div>
        );
    } else {
        content = (
            <>
                <p style={{marginBottom: '10px'}}>Shopping cart empty</p>
                <Button clicked={props.hideCart}>Browse Store</Button>
            </>
        );
    }
    return (
        <div className={classes.ShoppingCart}>{content}</div>
    )
}
const MapStateToProps = state => {
    return {
        shoppingCart : state.shoppingCart,
        products: state.products,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hideCart: () => dispatch({type: actionTypes.HIDE_CART}),
        clearCart: () => dispatch({type: actionTypes.CLEAR_CART})
    }
}
export default connect(MapStateToProps, mapDispatchToProps)(shoppingCart);