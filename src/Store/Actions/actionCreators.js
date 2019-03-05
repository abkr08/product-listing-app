import * as actionTypes from './Actions';


const productsFetchSuccess = products => {
    return {
        type: actionTypes.PRODUCTS_FETCH_SUCCESS,
        products
    }
}
export const getProducts = () => {
    return dispatch => {
        fetch('https://product-list-fbbd6.firebaseio.com/.json')
            .then(response => {
                response.json()
                    .then(products => {
                        dispatch(productsFetchSuccess(products));
                    })
                    .catch(err => console.log(err));
            }).catch(err => console.log(err));
    }
} 