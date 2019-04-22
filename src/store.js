import {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const NAME = 'NAME'
export const CATEGORY = 'CATEGORY'
export const FIRST = 'FIRST'
export const LAST = 'LAST'
export const INGREDIENTS = 'INGREDIENTS'
export const INSTRUCTIONS = 'INSTRUCTIONS'
export const RECIPES = 'RECIPES'

function reducer(state = initialState, action){
    switch(action.type){
        case NAME:
            return {...state, name: action.payload}
        case CATEGORY:
            return {...state, category: action.payload}
        case FIRST:
            return {...state, authorFirst: action.payload}
        case LAST:
            return {...state, authorLast: action.payload}
        case INGREDIENTS:
            const newIngredients = [...state.ingredients, action.payload]
            return {...state, ingredients: newIngredients}
        case INSTRUCTIONS:
            const newInstructions = [...state.instructions, action.payload]
            return {...state, instructions: newInstructions}
        case RECIPES:
            const {name, category, authorFirst, authorLast, ingredients, instructions} = state
            const recipe = {name, category, authorFirst, authorLast, ingredients, instructions}
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        default:
            return state
    }
}

export default createStore(reducer)