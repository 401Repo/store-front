/** 
 * Products
 * @component products
 */

import React, { useEffect } from 'react';

// connect let's us opt-in to the store
import { connect } from 'react-redux';
import { Avatar, Paper, List, ListItem, Button, Card, Typography } from '@material-ui/core';

// we need some actions that can be run against our reducer
import { filter, lowerInventory, fetchProducts } from '../store/inventory_reducer';


const Products = props => {
  let { categories, products } = props;

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const If = (props) => {
    return props.condition ? props.children : null;
  }

console.log("Here in props ", products); 

  return (
    <Paper elevation={2} elementType="div">
       <List className='flexor'>

{products.map((product, idx) => {
    console.log('The loop', product.name);
    console.log("looking for active", props.categories.activeCategory.name)

  return (
    
    <If condition={product.category === props.categories.activeCategory.name}>

      <Card   variant="outlined">

        <ListItem key={idx + '1'}><img className="sizor-item" alt={product.name} src={product.url} /></ListItem>

        <ListItem key={idx + '2'}>Product: {product.name}</ListItem>

        <ListItem key={idx + '3'}>Price: {product.price}</ListItem>

        <ListItem key={idx + '4'}>Description: {product.description}</ListItem>

        <ListItem key={idx + '5'}></ListItem>    

      </Card>

</If>

  )
})}
</List>
    </Paper>
  )
}

// tell our connect function add to component props whatever we need from the redux store / state 
// what does MY component need?
const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
    cart: state.cart
  }
}

const mapDispatchToProps = {  filter, lowerInventory, fetchProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);