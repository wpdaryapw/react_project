
const storedItems = JSON.parse(localStorage.getItem('items')) || []



const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const CHANGE_COUNT = 'CHANGE_COUNT'
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'


function changeCountItem(array, id, count) {
    return array.map((elem) => {
      if (elem.id === id) {
        elem.count += count
      }
      return elem
    })
  }
  
  export const cartReducer = (state = { items: storedItems, count: 1 }, action)  => {
    switch (action.type) {
    case ADD_NEW_ITEM:
        let { id, title, image, price, count, discont_price } = action.payload
        if (state.items.find((elem) => elem.id === id)) {
          return {
            ...state,
            items: changeCountItem(state.items, id, count)
          }
        } else {
          let new_item = {
            id,
            title,
            image,
            price,
            count,
            discont_price
          }
          return {
            ...state,
            items: [...state.items, new_item]
          }
        }
    case CHANGE_COUNT:
        let findItem = state.items.find((elem) => elem.id === action.payload.id)
        if (action.payload.count === -1 && findItem.count === 1) {
          return {
            ...state,
            items: state.items.filter((elem) => elem.id !== action.payload.id)
          }
        } else {
          return {
            ...state,
            items: changeCountItem(state.items, action.payload.id, action.payload.count)
          }
        }
    case REMOVE_FROM_BASKET:
      return { ...state,
                items: state.items.filter(item => item.id !== action.payload.id)}
      default:
        return state
    }
  }


export const addNEwItemAction = (payload) => ({type: ADD_NEW_ITEM, payload}) 
export const changeCountAction = (payload) => ({type: CHANGE_COUNT, payload}) 
export const removeFromBasketAction = (payload) => ({type: REMOVE_FROM_BASKET, payload})