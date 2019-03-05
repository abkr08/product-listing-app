import React from 'react';
import classes from './Navbar.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/Actions/Actions';

const navbar = props => {
    return (
        <div className={classes.Navbar}>
            <span onClick={props.clicked} className={classes.Hamburger}><i className="fas fa-bars"></i></span>
            <nav className={classes.NavItems}>
                <li>Schu:Maker</li>
            </nav>
            <span>
            <span className={classes.Cart}>
                {props.itemsCount > 0 && <span className={classes.itemsCount}>{props.itemsCount}</span> }
                <i onClick={props.showShoppingCart} className="fas fa-shopping-cart"></i>
            </span>
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        showShoppingCart: () => dispatch({type: actionTypes.SHOW_CART})
    }
}
const mapStateToProps = state => {
    return {
        itemsCount: state.shoppingCart.length
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(navbar);