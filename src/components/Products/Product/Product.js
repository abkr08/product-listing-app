import React, {useState, useEffect} from 'react';
import classes from './Product.module.css';
import * as actionTypes from '../../../Store/Actions/Actions';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import Ratings from '../../UI/Ratings';

const product = props => {
    let {name, id, price, ratings, availableColors, availableSizes, image} = props.details;
    const [selectedSize, setSize] = useState('');
    const [selectedColor, setColor] = useState('');
    const [currentSelectedId, updateSelectedId] = useState('');
    let timer;
    useEffect(() => {
        if(props.selection){
            setSize(props.selection.size);
            setColor(props.selection.color);
            updateSelectedId(props.selection.id);
        }
    }, [])
    const sizeSelectedHandler = size => {
        setSize(size);
        setErrorText('');
    }
    const colorSelectedHandler = color => {
        setColor(color);
        setErrorText('');
    }
    
    let sizes = null;
    if(availableSizes){
        sizes = availableSizes.map((size, i) => {
            return <li onClick={() => sizeSelectedHandler(size)} className={selectedSize === size ? classes.SelectedSize : null} key={i}>{size}</li>
        })
    }
    let colors = null;
    if (availableColors){
        colors = availableColors.map((color, i) => {
            return <li onClick={() => colorSelectedHandler(color)} 
                    className={selectedColor === color ? classes.SelectedColor : null} 
                    key={i} style={{backgroundColor: color}}></li>
        })
    }
    const [errorText, setErrorText] = useState('');
    const [successText, setSuccessText] = useState('');
    const addToCartHandler = () => {
        if (selectedColor === '' || selectedSize === ''){
            setErrorText('Make sure you choose size and color first');
        } else {
            setSuccessText('Added to cart');
            timer = setTimeout(() => {
                setSuccessText('')
                setColor('');
                setSize('');
            }, 2000);
            let choice = {
                name, id, color: selectedColor, price, size: selectedSize,
                image
            };
            props.addToCart(choice);
            
        }
    }
    const updateItemHandler = () => {
            let choice = {
                name, id, color: selectedColor, price, size: selectedSize,
                image
            };
            props.updateCart({choice, oldChoiceId: currentSelectedId});
            props.hideModal();
    }
    useEffect(() => {
        return () => {
            clearTimeout(timer);
        }
    }, [])
    return (
        <div className={classes.Product}>
        <img src={image} alt={name}/>
            <p className={classes.ProductName}>{name}</p>
            <p className={classes.ProductPrice}>${price}</p>
            <Ratings ratings={ratings}/>
            <span className={classes.SizeBox}>
                <p>SIZE</p>
                <ul>
                    {sizes}
                </ul>
            </span>
            <span className={classes.ColorBox}>
                <p>COLOR</p>
                <ul>
                    {colors}
                </ul>
            </span>
            {errorText !== '' && <span style={{color: 'red', marginBottom: '5px'}}>{errorText}</span>}
            {successText !== '' && <span style={{color: 'green', marginBottom: '5px'}}>{successText}</span>}
            <span style={{padding: '0 20px'}} onClick={props.inShoppingCart ? updateItemHandler : addToCartHandler}><Button>{props.inShoppingCart ? 'Save' : 'Add to cart'}</Button></span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        addToCart: choice => dispatch({type: actionTypes.ADD_TO_CART, choice}),
        updateCart: choices => dispatch({type: actionTypes.UPDATE_CART, choices})
    }
}
export default connect(null, mapDispatchToProps)(product);