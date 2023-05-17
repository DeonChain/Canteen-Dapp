import { configureStore } from '@reduxjs/toolkit'
import userAddReducer from './reducers/userAdd'
import contractDataReducer from './reducers/contractData'
import tempReducer from './reducers/temp'



export default configureStore({
    reducer:{
        userAdd: userAddReducer,
        contractData: contractDataReducer,
        temp: tempReducer
    }
})

