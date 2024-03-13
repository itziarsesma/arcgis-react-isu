import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  layers: [],
}

export const addLayerSlice = createSlice({
  name: 'addLayer',
  initialState,
  reducers: {
    addLayer: (state, action) => {
      // const newLayer = new FeatureLayer({url: action.payload});
      // state.layers = [newLayer]
      state.layers = [...state.layers, action.payload]
    },
    removeLayers: (state) => {
      state.layers = []
    }
  },
})

export const { addLayer, removeLayers } = addLayerSlice.actions

export default addLayerSlice.reducer