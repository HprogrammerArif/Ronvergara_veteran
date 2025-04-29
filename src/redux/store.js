import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './features/baseApi'
import issueSlice from './slice/issueSlice'

export const store = configureStore({
  reducer: {
   
    [baseApi.reducerPath]: baseApi.reducer,
    issueSlice: issueSlice
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})