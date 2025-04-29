import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './features/baseApi'
import issueSlice from './slice/issueSlice'
import categorySlice from './slice/categorySlice'

export const store = configureStore({
  reducer: {
   
    [baseApi.reducerPath]: baseApi.reducer,
    issueSlice: issueSlice,
    categorySlice : categorySlice
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})