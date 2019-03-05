import React, {useState} from 'react';
import Modal from '../../UI/Modal/Modal';
import Product from '../Product/Product';
import Ratings from '../../UI/Ratings';
import classes from './ProductsListItem.module.css';

const productsListItem = props => {
    const [showModal, updateModalState] = useState(false);
    let {name, price, ratings, image, leftInStock} = props.details;
    const showItemDetails = () => {
        updateModalState(true);
    }
    const backdropClicked = () => {
        updateModalState(false);
    }
    return (
        <>
        <div onClick={showItemDetails} className={classes.ProductsListItem}>
            <img src={image} alt={name} />
            <span className={classes.DetailBox}>
                <p className={classes.ProductName}>{name}</p>
                <p className={classes.ProductPrice}>${price}</p>
                <Ratings ratings={ratings} />
                <p className={leftInStock > 15 ? classes.InStock : classes.Hurry}> {leftInStock > 15 ? 'In stock': `Hurry up! ${leftInStock} left in stock`} </p>
            </span>
            </div>
            <Modal showModal={showModal} backdropClicked={backdropClicked}><Product details={props.details}/></Modal>
            </>
    )
}

export default productsListItem;