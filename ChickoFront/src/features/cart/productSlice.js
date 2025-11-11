import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: {
      name: '',
      description: '',
      price: '',
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
    setNomenc: (state, data) => {
      let item = data.payload
      state.value.id = item.id;
      state.value.name = item.name;
      state.value.description = item.description;
      state.value.price = item.price;
      state.value.image = item.image;
      state.value.isHotOffer = item.isHotOffer;
      state.value.isDeleted = item.isDeleted;
    },
    clearNomenc: (state) => {
      state.value = {
        id: '',
        name: '',
        description: '',
        price: '',
        image: '',
        show: false,
        isHotOffer: false,
        isDeleted: false
      }
    },
    hidePopup: (state) => {
      state.value.show = false;
    }
  }
})

export const {
  setProduct, setNomenc, hidePopup, addProduct, updProduct, clearNomenc
} = productSlice.actions