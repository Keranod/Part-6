import { createContext, useReducer, useContext } from "react"

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'DISPLAY': {
            const newState = {
                message: action.payload.message,
                timeout: action.payload.timeout * 1000
            }
            return newState
        }
        case 'HIDE': {
            const newState = {
                ...state,
                timeout: 0
            }
            return newState
        }
        default:
            return state
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, { message: null, timeout: 0})

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext