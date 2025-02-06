import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            // state.items.pop()
            // or
            state.items = state.items.slice(0, -1);
        },
        clearCart: (state) => {
            // state.items.length = 0; 
            // or
            state.items = []
        }
    }
})


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;