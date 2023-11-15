import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        content: '',
        type: null
    },
    reducers: {
        notificationReducer(state, action) {
            const { content , type } = action.payload
            const newState = {
                content: content,
                type: type
            }
            return newState
        },
        toggleNotificationVisibility(state, action) {
            const type = action.payload
            const newState = {
                ...state,
                type: type
            }
            return newState
        }
    }
})

export const { notificationReducer, toggleNotificationVisibility } = notificationSlice.actions
export default notificationSlice.reducer