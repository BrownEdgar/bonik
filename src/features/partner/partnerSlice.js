import {createSlice} from '@reduxjs/toolkit'
const initialState = [
    {
        id: 1,
        title: "Partner up with Bonik Delivery Today",
        desc: "Signing up takes only 2 minutes"
    }
]
export  const partnerSlice = createSlice({
    name: "partner",
    initialState: initialState,
    reducers:{

    }
})
export default partnerSlice.reducer
