import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        content: '',
        timeout: null
    },
    reducers: {
        notificationReducer(state, action) {
            const { content, timeout } = action.payload
            const newState = {
                content: content,
                timeout: timeout * 1000
            }
            return newState
        },
        zeroTimeout(state, action) {
            const newState = {
                ...state,
                timeout: 0
            }
            return newState
        }
    }
})

export const { notificationReducer, zeroTimeout } = notificationSlice.actions
export default notificationSlice.reducer