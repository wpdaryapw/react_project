const defaultState = []

const CATEGORIES_CARDS = 'CATEGORIES_CARDS'

export const categoriesCardsReducer = (state = defaultState, action) => {
    switch(action.type){
        case CATEGORIES_CARDS:
            return action.payload
        default:
            return state
    }

}

export const categoriesCardsAction = (payload) => ({type: CATEGORIES_CARDS, payload})