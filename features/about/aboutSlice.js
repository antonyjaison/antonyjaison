"use client"

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  about:[]
}

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    addDetails:(state,action) => {
       state.about = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {addDetails} = aboutSlice.actions

export default aboutSlice.reducer