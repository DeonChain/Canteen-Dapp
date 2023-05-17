import { createSlice } from '@reduxjs/toolkit'

export const contractDataSlice = createSlice({
    name:'contractData',
// Get Data from smart Contract when application initialises
    initialState: {
        total_users:0,
        registeredArray:[], //"All User Address Registered in Smart Contract"
        UserData:[], // in App.js run a loop to put all Data in userData array
        AddressData:[],
    },
    reducers: {
        registerUser: (state,action)=>{
            const exist = (state.registeredArray).filter((item,index)=>{
                    return ((item === action.payload))
            })
            if (!(exist.length > 0))
            {
                state.registeredArray.push(action.payload);
            }

        },

        addUserData:(state,action)=>{
        if (!(action.payload === null)){
            state.UserData.push(action.payload)
        }
        },


        AddAddressData:(state,action)=>{
            if(!(action.payload === undefined))
            {
                state.AddressData.push(action.payload);
            // const exist = (state.AddressData).filter((item,index)=>{
            //         return ((item === action.payload))
            // })
            // if (!(exist.length > 0))
            // {
            //     state.registeredArray.push(action.payload);
            // }

            }

        },



        setNoOfUsers:(state,action)=>{
            state.total_users=action.payload;
        },

    }
})

export const {registerUser} = contractDataSlice.actions;
export const {addUserData} = contractDataSlice.actions;
export const {AddAddressData} = contractDataSlice.actions;
export const {setNoOfUsers} = contractDataSlice.actions;
export default contractDataSlice.reducer;