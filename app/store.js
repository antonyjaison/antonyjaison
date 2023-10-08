"use client"

import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from '@features/about/aboutSlice'
import contactReducer from '@features/contact/contactSlice'

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    contact:contactReducer,
  },
})