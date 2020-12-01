/** Categories
 * @component Categories
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Paper, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { changeCategory, fetchCategories } from '../store/category_reducer';

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

const Categories = props => {
  
  useEffect(() => {
    props.fetchCategories();
    props.changeCategory({name: props.category})
  }, []);
  
  let categoriesArr = props.categories.categories;
  console.log(categoriesArr, 'cat array');
  const classes = useStyles();

  return (
    <Paper elevation={0} elementType="div">
      <Paper elementType="section">
  <Typography className={classes.title} variant="h4">Browse Our {props.categories.activeCategory.name}</Typography>
        <div className={classes.list}>

          <List>
            {categoriesArr.map((category, idx) => {
              return (
              <ListItem  key={idx} onClick={() => props.changeCategory({name: category})}>{category} </ListItem>
              )
            })}
            {/* <p onClick={() => props.changeCategory({name: props.category})}>Hello </p> */}
          </List>

        </div>
      </Paper>
      <div className={classes.mainCategory}>
        {/* <Paper elementType="main"> */}
        <Typography variant="h5">{props.categories.activeCategory.name}</Typography>
        

        {/* </Paper> */}
      </div>
    </Paper>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = { changeCategory, fetchCategories };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);