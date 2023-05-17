import { createSlice } from '@reduxjs/toolkit'

export const userAddSlice = createSlice({
    name:'userAdd',
    initialState: [],
    reducers: {
        setAdd: (state,action)=>{
            if (!(action.payload===null))
            {
                state.push(action.payload);
            }
        },
    }
})
export const {setAdd} = userAddSlice.actions;
export default userAddSlice.reducer;