/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export function cartReducers(state = { cart: [] }, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            };
        case 'UPDATE_CART':
            //Create a copy of the current cart array
            const currentBookToUpdate = [...state.cart];
            // Determine at which index in the books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
                return book._id === action._id;
            });
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                quantity:
                    currentBookToUpdate[indexToUpdate].quantity + action.unit
            };

            let cartUpdate = [
                ...currentBookToUpdate.slice(0, indexToUpdate),
                newBookToUpdate,
                ...currentBookToUpdate.slice(indexToUpdate + 1)
            ];

            return {
                ...state,
                cart: cartUpdate,
                totalAmount: totals(cartUpdate).amount,
                totalQty: totals(cartUpdate).qty
            };
        case 'DELETE_CART_ITEM':
            return {
                ...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            };
    }
    return state;
}
// { cart: [...state.cart, ...action.payload] }

// return { ...state, cart: action.payload };

// Calculate Totals
export function totals(payloadArr) {
    const totalAmount = payloadArr
        .map(function(cartArr) {
            return cartArr.price * cartArr.quantity;
        })
        .reduce(function(a, b) {
            return a + b;
        }, 0); // Start summing at 0
    const totalQty = payloadArr
        .map(function(qty) {
            return qty.quantity;
        })
        .reduce(function(a, b) {
            return a + b;
        }, 0); // Start summing at 0

    return { amount: totalAmount.toFixed(2), qty: totalQty };
}
