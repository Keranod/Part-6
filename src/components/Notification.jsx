import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { zeroTimeout } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const timeout = notification.timeout
  console.log(timeout)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(zeroTimeout())
    }, timeout);
  
    return () => clearTimeout(timeoutId)
  }, [notification.content])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (timeout > 0) {
    return (
      <div style={style}>

        {notification.content}
      </div>
    )}
}

export default Notification
