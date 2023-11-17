import { useContext, useEffect } from "react"
import NotificationContext from "../NotificationContext"

const Notification = () => {
  const [notification, dispatch] = useContext(NotificationContext)
  const message = notification.message
  const timeout = notification.timeout

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: 'HIDE' })
    }, timeout)

    return () => clearTimeout(timeoutId)
  }, [message])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  if (timeout > 0) {
    return (
      <div style={style}>
        {message}
      </div>
    )
  }
}

export default Notification
