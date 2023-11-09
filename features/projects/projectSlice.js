"use client"

import { createSlice } from '@reduxjs/toolkit'
import projects from '@data/projects'

const initialState = {
    projects: projects,
    filteredProjects: projects,
    activeFilters: {
        react: false,
        'react-native': false,
        nextjs: false,
        vanilajs: false,
        flutter: false
    }
}

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        toggleFilter: (state, action) => {
            // Toggle the active filter
            state.activeFilters[action.payload] = !state.activeFilters[action.payload];
            
            // Check which filters are active and filter the projects
            state.filteredProjects = state.projects.filter(project => {
                for (let key in state.activeFilters) {
                    if (state.activeFilters[key] && key === project.type) {
                        return true;
                    }
                }
                return false;
            });
            
            // If no filters are active, display all projects
            if (Object.values(state.activeFilters).every(val => !val)) {
                state.filteredProjects = state.projects;
            }
        },
        resetFilters: (state) => {
            state.activeFilters = {
                react: false,
                'react-native': false,
                nextjs: false,
                vanilajs: false,
                flutter: false
            };
            state.filteredProjects = state.projects;
        }
    }
});

export const { toggleFilter, resetFilters } = projectSlice.actions

export default projectSlice.reducer
