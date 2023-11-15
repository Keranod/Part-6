import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNotificationVisibility } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const type = notification.type
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (type !== null) {
      setTimeout(() => {
        dispatch(toggleNotificationVisibility(null))
      }, 5000)}
  }, [notification.content])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (type !== null) {
    let notificationMessage = null

    if (type === 'vote') {
      notificationMessage = `you voted '${notification.content}'`
    }
    else if (type === 'created') {
      notificationMessage = `'${notification.content}' anecdote was created`
    }

    return (
      <div style={style}>

        {notificationMessage}
      </div>
    )}
}

export default Notification
