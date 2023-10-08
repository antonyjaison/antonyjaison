"use client"

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
    text: "",
    date: Date.now(),
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        onchangeName: (state, action) => {
            state.name = action.payload
        },
        onchangeEmail: (state, action) => {
            state.email = action.payload
        },
        onchangetext: (state, action) => {
            state.text = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { onchangeEmail, onchangeName, onchangetext } = contactSlice.actions

export default contactSlice.reducer