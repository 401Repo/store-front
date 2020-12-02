import React from 'react';

import { connect } from 'react-redux';
import { Paper, List, ListItem, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteItem } from '../store/cart_reducer';
import { makeStyles } from '@material-ui/core/styles';
import { incrementInventory } from '../store/inventory_reducer';
import CartCounter from './cart-counter';

const SimpleCart = props => {
    let { cart } = props;

    function removeFromCart(item) {
        props.deleteItem(item);
        props.incrementInventory(item);
    }

    const useStyles = makeStyles((theme) => ({

        title: {
            display: 'flex',
            paddingLeft: '24px'
        },

        list: {
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'space-between',
            paddingLeft: '10px'

        },

        listItem: {
            display: 'inline',
            // flexDirection: 'row'
        },

        mainCategory: {
            display: 'flex',
        }
    }));

    const classes = useStyles();
console.log("Hello from cart: ", cart.length);
    return (
        <Paper elevation={0} className="strecher" elementType="div">
            <Paper elementType="section">
                <Typography className={classes.title} variant="h4">Your shopping cart~!</Typography>
                <div className={classes.list}>

                    <Paper elevation={1} elementType="section">

                        <p>Your orders:</p>
                        <List>
                            {cart.map((item, idx) => {
                                return (
                                    <>
                                        <ListItem key={idx + '1'}><img className="sizor-item" alt={item.name} src={item.url} /></ListItem>

                                        <ListItem key={idx + '2'}>Product: {item.name}</ListItem>

                                        <ListItem key={idx + '3'}>Price: {item.price}</ListItem>
                                        <Button variant="contained" onClick={() => removeFromCart(item)} color="secondary" startIcon={<DeleteIcon />}
                                        >
                                            Remove</Button>
                                    </>
                                )
                            })}
                        </List>

                    </Paper>
                </div>
                <CartCounter/>
            </Paper>
            <div className={classes.mainCategory}>
                {/* <Paper elementType="main"> */}


                {/* </Paper> */}
            </div>
        </Paper>
    )
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = { deleteItem, incrementInventory };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimpleCart);