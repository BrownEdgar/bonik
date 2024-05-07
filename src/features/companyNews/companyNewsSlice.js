import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        img: './images/1.png',
        title: "UI/UX Design",
        view: "12450",
        desc: "Our UX studio digitally transforms business through design",
        text: "All of these problems are addressable through UX and gamification in particular. That's not to say that it's a cure-all."
    },
    {
        id: 2,
        img: './images/2.png',
        title: "Apps Design",
        view: "2953",
        desc: "Your customer do need comprehensive course to learn how to use your app.",
        text: "Let's be honest. Finance isn't exactly pinnacle fun.Online companies introduced gamification elements to their products reach up to a 700% increase in conversion rates."
    },
    {
        id: 3,
        img: './images/3.png',
        title: "Product Experience",
        view: "7980",
        desc: "Scale your startup through exceptional product experience",
        text: "Our UX design agency creates solutions to address product usability conversion rates an the ever-present challenges of user-retention & engagement."
    }

]
const copmpanyNewsSlice = createSlice({
    name: "companyNews",
    initialState: initialState,
    reducers:{

    }
})

export default copmpanyNewsSlice.reducer
