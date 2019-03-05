import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actionCreators from './Store/Actions/actionIndex';
import Products from './components/Products/Products';
import Navbar from './components/Navigation/Navbar/Navbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
  state = {
    showSideDrawer: false
  }
  showSideDrawer = () => {
    this.setState({showSideDrawer: true});
  }
  backdropClicked = () => {
    this.setState({showSideDrawer: false});
  }
  componentDidMount () {
    this.props.getProducts();
  }
  render() {
    let content = (
      <>
        <input type='text' placeholder='Search product' />
        <Spinner/>
      </>
    );
    if (!this.props.loading){
      content = (
        <>
          <input type='text' placeholder='Search product' />
          <Products  />
        </>
      );
    }
    if (this.props.showShoppingCart){
      content = <ShoppingCart />;
    }
    return (
      <div className="App">
        <Navbar clicked={this.showSideDrawer}/>
        <SideDrawer showSideDrawer={this.state.showSideDrawer} backdropClicked={this.backdropClicked}/>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showShoppingCart: state.showCart,
    loading: state.loading
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    getProducts: () => dispatch(actionCreators.getProducts())
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(App);
