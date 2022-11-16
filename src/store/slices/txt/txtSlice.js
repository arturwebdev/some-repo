import { createSlice } from "@reduxjs/toolkit";


const txtSlice = createSlice({
    name : 'txt',
    initialState : '',
    reducers : {
        toggleTxt(state ,{payload}){
            return  payload
        },
        resetTxt(){
            return ''
        }
            
    }
})

export const {toggleTxt, resetTxt} = txtSlice.actions

export const selectTxt = state => state.txt

export const txtReduser = txtSlice.reducer





// export const initialTxt = ''

// export const txtReduser = (state=initialTxt, action) =>{
//     switch (action.type) {
//         case 'toggle-txt':
//             return action.payload           
//         case 'reset-txt':
//             return ''           
    
//         default:
//             return state            
//     }
// }

// export function setTxt(payload) {
//     return {
//         type: 'toggle-txt',
//         payload

//     }
// }

// export function resetTxt() {
//     return{
//         type: 'reset-txt'
        
//     }
// }
// export function selectTxt(state) {
//     return state.txt
// }