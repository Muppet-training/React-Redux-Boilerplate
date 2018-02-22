/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export function cartReducers(state = { cart: [] }, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { cart: [...state.cart, ...action.payload] };
    }
    return state;
}
