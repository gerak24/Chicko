import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: {
            name: '',
            description: '',
            price: 0,
            image: '',
            show: false
        },
    },
    reducers: {
        setProduct: (state, data) => {
            let item = data.payload
            state.value.name = item.name;
            state.value.description = item.description;
            state.value.price = item.price;
            state.value.image = item.image;
            state.value.show = true;
        },
        hidePopup: (state) => {
            state.value.show = false;
        }
    }
})

export const {
    setProduct, hidePopup, addProduct, updProduct
} = productSlice.actions

export default productSlice.reducer