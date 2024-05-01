import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id : 1,
        img : "../public/images/1.png",
        bcColor : "rgba(255, 243, 235, 1)", 
        title : "Industry-leading tech",
        desc : "Delivery is process of transporting from source point to predefined destination."
    },
    {
        id : 2,
        img : "../public/images/2.png",
        bcColor : "rgba(236, 237, 255, 1)", 
        title : "Nationwide coverage",
        desc : "Delivery is process of transporting from source point to predefined destination."
    },
    {
        id : 3,
        img : "../public/images/3.png",
        bcColor : "rgba(255, 236, 241, 1)", 
        title : "Fastest Delivery",
        desc : "Delivery is process of transporting from source point to predefined destination."
    },
    {
        id : 4,
        img : "../public/images/4.png",
        bcColor : "rgba(246, 246, 246, 1)", 
        title : "Next day payment",
        desc : "Delivery is process of transporting from source point to predefined destination."
    },
    {
        id : 5,
        img : "../public/images/5.png",
        bcColor : "rgba(255, 250, 236, 1)", 
        title : "Industry-leading tech",
        desc : "Delivery is process of transporting from source point to predefined destination."
    },
    {
        id : 6,
        img : "../public/images/6.png",
        bcColor : "rgba(255, 243, 235, 1)", 
        title : "Industry-leading tech",
        desc : "Delivery is process of transporting from source point to predefined destination."
    },
    {
        id : 7,
        img : "../public/images/7.png",
        bcColor : "rgba(238, 255, 243, 1)", 
        title : "Industry-leading tech",
        desc : "Delivery is process of transporting from source point to predefined destination."
    },
    {
        id : 8,
        img : "../public/images/8.png",
        bcColor : "rgba(255, 236, 241, 1)", 
        title : "Industry-leading tech",
        desc : "Delivery is process of transporting from source point to predefined destination."
    },
    {
        id : 9,
        img : "../public/images/9.png",
        bcColor : "rgba(236, 237, 255, 1)", 
        title : "Industry-leading tech",
        desc : "Delivery is process of transporting from source point to predefined destination."
    }
    
]

export const whyChooseUsSlice = createSlice({
    name : "WhyChooseUs",
    initialState : initialState,
    reducers : {}
})

export default whyChooseUsSlice.reducer