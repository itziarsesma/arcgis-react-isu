import { configureStore } from '@reduxjs/toolkit'
import addLayerSlice from './addLayerSlice'

export const store = configureStore({
  reducer: {
    addLayer: addLayerSlice
  },
})