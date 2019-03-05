import React, {useState} from 'react';
import ProductsListItem from './ProductsListItem/ProductsListItem';
import classes from './Products.module.css';
import { connect } from 'react-redux';

const products = props => {
    const [items, orderItems] = useState(props.products);
    let products = null; 
    if (props.products.length > 0){
        products = items.map((product, i) => {
            return <ProductsListItem key={i} details={product}/>
        });
    }
    const onChange = event => {
        let {value} = event.target;
        let itemsCopy = [...items];
        switch (value) {
            case '1':
                itemsCopy = itemsCopy.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
                orderItems(itemsCopy);
                break;
            case '2':
                itemsCopy.sort((a, b) => {
                    return a.price - b.price;
                });
                orderItems(itemsCopy);
                break;
            case '3':
                itemsCopy.sort((a, b) => {
                    return b.price - a.price;
                });
                orderItems(itemsCopy);
                break;
            case '4':
                itemsCopy.sort((a, b) => {
                    return b.ratings - a.ratings;
                });
                orderItems(itemsCopy);
                break;
            default:
                break;
        }
    }
    return (
        <div className={classes.Wrapper}>
        <label><i className="fas fa-sort"></i></label>
        <select defaultValue='0' onChange={onChange}>
            <option value='0'>--</option>
            <option value='1'>A-Z</option>
            <option value='2'>Price ascending</option>
            <option value='3'>Price descending</option>
            <option value='4'>Ratings</option>
        </select>
        <div className={classes.Products}>
            {products}
        </div>
        </div>
    )
}
const mapStateToProps = state => {
    return { 
        products: state.products
    }
}
export default connect(mapStateToProps)(products);