"use client"

import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from '@features/about/aboutSlice'

export const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
})