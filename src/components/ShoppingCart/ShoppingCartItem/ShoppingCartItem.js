import React from 'react';
import classes from './ShoppingCartItem.module.css'
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/Actions/Actions';

const shoppingCartItem = props => {
    const removeItem = event => {
        event.stopPropagation();
        props.delete({id: props.id, price: props.price});
    }
    return (
        <div className={classes.ShoppingCartItem} onClick={props.edit}>
                       <img src={props.image} alt={props.name} />
            <span className={classes.Details}>
                <p className={classes.ProductName}>{props.name}</p>
                <p className={classes.ProductPrice}>${props.price}</p>
                <span className={classes.SelectionsBox}>
                    <div style={{ backgroundColor: props.color }}></div>
                    <span>{props.size}</span>
                </span>
            </span>
            <span onClick={removeItem} className={classes.Remove}><i className="far fa-trash-alt"></i></span>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        delete: (details) => dispatch({type: actionTypes.REMOVE_FROM_CART, details})
    }
}
export default connect(null, mapDispatchToProps)(shoppingCartItem);