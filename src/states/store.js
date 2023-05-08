import { configureStore } from '@reduxjs/toolkit'
import userAddReducer from './reducers/userAdd'


export default configureStore({
    reducer:{
        userAdd: userAddReducer
    }
})

