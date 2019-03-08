import * as actionTypes from '../Actions/Actions';

const initialState = {
    shoppingCart: [],
    counter: 0,
    showCart: false,
    totalPrice: 0,
    products: [],
    loading: true
};
const generateUniqueId = (item, state) => {
    let id = item.id + item.color + item.size + state.counter;
    return id;
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            let uniqueId = generateUniqueId(action.choice, state);
            console.log(uniqueId);
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, {...action.choice, id: uniqueId}],
                totalPrice: state.totalPrice + +action.choice.price,
                counter: state.counter + 1
            } 
        case actionTypes.SHOW_CART:
            return  {
                ...state, showCart: true
            }
        case actionTypes.HIDE_CART:
            return {
                ...state, showCart: false
            }
        case actionTypes.REMOVE_FROM_CART: 
            let cartCopy = [...state.shoppingCart];
            cartCopy = cartCopy.filter(item => item.id !== action.details.id);
            return {
                ...state, shoppingCart: cartCopy,
                totalPrice: state.totalPrice - +action.details.price
            }
        case actionTypes.UPDATE_CART:
            let shoppingCartCopy = [...state.shoppingCart];
            shoppingCartCopy = shoppingCartCopy.filter(item => item.id !== action.choices.oldChoiceId);
            uniqueId = generateUniqueId(action.choices.choice, state);
            shoppingCartCopy.push({...action.choices.choice, id: uniqueId});
            return {
                ...state, shoppingCart: shoppingCartCopy, counter: state.counter + 1
            }
        case actionTypes.CLEAR_CART: 
            return {
                ...state, shoppingCart: [], totalPrice: 0
            }
        case actionTypes.PRODUCTS_FETCH_SUCCESS: 
            return {
                ...state, products: action.products, loading: false
            }
        default:
            return state;
    }
}

export default reducer;