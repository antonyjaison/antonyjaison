"use client"

import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from '@features/about/aboutSlice'
import contactReducer from '@features/contact/contactSlice'
import projectsReducer from '@features/projects/projectSlice'

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    contact:contactReducer,
    projects:projectsReducer
  },
})