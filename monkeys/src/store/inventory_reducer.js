/** 
 * Products store
 * @component store
 */

import axios from 'axios';

// STORE
const initialState = [
  {"name":"Mushroom",
  "price": 200,
  "url": "https://www.mariowiki.com/images/e/e1/Red_Mushroom.png",
  "description": "Heal 20HP",
  "category": "Items"
},
{"name":"Mid Mushroom",
"price": 400,
"url": "https://www.mariowiki.com/images/d/d0/Green_Mushroom.png",
"description": "Heal 40HP",
"category": "Items"
},
{"name":"Polka Dress",
"price": 800,
"url": "https://www.mariowiki.com/images/3/33/SMRPG_Polkadress.png",
"description": "A flashy dress.",
"category": "Armor"
},
{"name":"Fire Shell",
"price": 900,
"url": "https://www.mariowiki.com/images/b/b0/SMRPG_Fireshell.png",
"description": "Determined person's shell.",
"category": "Armor"
},
{"name":"Star Cape",
"price": 800,
"url": "https://www.mariowiki.com/images/d/d9/StarCape.png",
"description": "A legendary cape.",
"category": "Armor"
},
{"name":"Hammer",
"price": 1400,
"url": "https://www.mariowiki.com/images/e/e8/SMRPG_Hammer.png",
"description": "A lucky hammer.",
"category": "Weapons"
},
{"name":"Chain Chomp",
"price": 1300,
"url": "https://www.mariowiki.com/images/9/90/SMRPG_Chomp.png",
"description": "Just spin me at an enemy!",
"category": "Weapons"
},
{"name":"Sonic Cymbals",
"price": 1100,
"url": "https://www.mariowiki.com/images/3/38/SMRPG_SonicCymbals.png",
"description": "Puts noise to work for you!",
"category": "Weapons"
},
{"name":"Power Star",
"price": 2400,
"url": "https://www.mariowiki.com/images/d/d6/Captain_toad_powerstar.png",
"description": "Power Star!",
"category": "Accessories"
},
{"name":"Silver Star",
"price": 2600,
"url": "https://www.mariowiki.com/images/8/8f/Silver_Star_Artwork_-_Super_Mario_Galaxy_2.png",
"description": "Secret star!",
"category": "Accessories"
},
{"name":"Green Star",
"price": 1400,
"url": "https://www.mariowiki.com/images/3/31/Green_Star_Artwork_-_Super_Mario_3D_World.png",
"description": "Rare star!",
"category": "Accessories"
},
{"name":"Shine Sprite",
"price": 1700,
"url": "https://www.mariowiki.com/images/b/be/SMS_Shine_Sprite_Artwork.png",
"description": "One of a kind star!",
"category": "Accessories"
},
{"name":"Grand Star",
"price": 2700,
"url": "https://www.mariowiki.com/images/4/4d/MKT_Icon_GrandStar.png",
"description": "Cosmic star!",
"category": "Accessories"
}


];

// REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER': // 'CHANGE'
      let filteredProducts = [];
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].category === payload) {
          filteredProducts.push(state.products[i]);
        }
        return { ...state, products: filteredProducts }
      }
    case 'FETCH_PRODUCTS':
      return payload;
    case 'INCREMENT_INVENTORY':
      //TODO: get this functioning

      // from class
      // case 'INCREMENT_VOTES':
      //   return state.map(candidate => candidate.id === payload.id ? payload : candidate);


      console.log('In the increment inventory');
      return state;
    case 'LOWER_INVENTORY':
      console.log('In the lower inventory case');
      // TODO: Get this functioning
      return state;
    default:
      return state;
  }
}

// ACTIONS

export const fetchProducts = () => async (dispatch, getState) => {
  const response = await axios.get('http://localhost:3001/products');
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data,
  });
}

export const filter = (categoryName) => {
  return {
    type: 'FILTER',
    payload: categoryName,
  }
}

export const incrementInventory = (id) => {
  return {
    type: 'INCREMENT_INVENTORY',
    payload: id,
  }
}

export const lowerInventory = (product) => {
  return {
    type: 'LOWER_INVENTORY',
    payload: product,
  }
}