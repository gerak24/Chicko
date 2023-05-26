import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },
    reducers: {
        addToCart: (state, data) => {
            state.value = JSON.parse(localStorage.getItem('Cart'));
            let item = data.payload
            if (state.value.some(i => i.id === item.id)) {
                let itemInCart = state.value.find(i => i.id === item.id);
                itemInCart.amount++;
            } else
                state.value.push({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    image: item.image,
                    amount: 1
                })
            localStorage.setItem('Cart', JSON.stringify(state.value));
        },

        checkCartStorage: (state) => {
            state.value = JSON.parse(localStorage.getItem('Cart'));
        },

        sendOrder: (state, data) => {
            let order = data.payload
            if (order.name !== '' && order.phone !== '' && order.items.length !== 0) {
                state.value = [];
                localStorage.setItem('Cart', JSON.stringify(state.value));
            }
        }
    },
})

export const {addToCart, sendOrder, checkCartStorage} = cartSlice.actions

export default cartSlice.reducer