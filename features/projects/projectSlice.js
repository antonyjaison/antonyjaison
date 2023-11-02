"use client"

import { createSlice } from '@reduxjs/toolkit'
import projects from '@data/projects'

const initialState = {
    projects:projects,
    filteredProjects:projects,
    filterCategory:["react","react-native","nextjs","vanilajs","flutter"]
}

export const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers: {
        filterProject: (state, action) => {
            // state.filteredProjects = state.projects.filter(project => project.type === action.payload)
            // console.log(state.filteredProjects)

            let filteredProjects = []
            state.filterCategory.forEach(category => {
                filteredProjects = filteredProjects.concat(state.projects.filter(project => project.type === category))
            })
            state.filteredProjects = filteredProjects
        }
    }
})

export const { filterProject } = projectSlice.actions

export default projectSlice.reducer