import { createSlice } from '@reduxjs/toolkit'

export const tempSlice = createSlice({
    name:'temp',
// Get Data from smart Contract when application initialises
    initialState: {
        mealRating:"9",
        timeRating:"9",
        staffRating:"9"
    },

    reducers: {
        setMealRating: (state,action)=>{
            state.mealRating=(action.payload);
        },
        setTimeRating: (state,action)=>{
            state.timeRating=(action.payload);
        },
        setStaffRating: (state,action)=>{
            state.staffRating=(action.payload);
        }
    }
})

export const {setMealRating} = tempSlice.actions;
export const {setTimeRating} = tempSlice.actions;
export const {setStaffRating} = tempSlice.actions;
export default tempSlice.reducer;