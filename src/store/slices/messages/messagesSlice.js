import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: 'messages',
    initialState : [] ,
    reducers : {
        addNewMess(state, {payload}){
            console.log(payload);
            let user
            if (state.length === 0) {
                user = true
                
            } else {
                user = !state[state.length-1].user
                
            }
            return[
                ...state,
                {
                    id: new Date().getTime().toString(),
                    message: payload,
                    user: user,
                    isDeleted: false
                }
            ]
        },
        delMess(state, {payload}){
            return [
                ...state.map(el => {
                    if (el.id === payload) {
                        return {
                            ...el,
                            isDeleted: true,
                            message: 'Deleted Message :('

                        }
                        
                    }
                    return el
                })
            ]

        }
    }
})

export const {addNewMess, delMess} = messagesSlice.actions

export const messagesReduser = messagesSlice.reducer

export const selectMessages = state => state.messages




// export const initialMessages = []

// export const messagesReduser = (state=initialMessages, action) =>{
//     switch (action.type) {
//         case 'add-new-message' :
            // let user
            // if (state.length === 0) {
            //     user = true
                
            // } else {
            //     user = !state[state.length-1].user
                
            // }
            // return[
            //     ...state,
            //     {
            //         id: new Date().getTime().toString(),
            //         message: action.payload,
            //         user: user
            //     }
            // ]
//          default:
//             return state
//     }
// }

// export function selectMessages(state){
//     return state.messages
// } 

// export function addMess(payload){
//     return {
//         type:'add-new-message',
//         payload 
//     }

// }