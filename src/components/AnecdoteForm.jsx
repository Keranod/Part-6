import { useContext } from "react"
import NotificationContext from "../NotificationContext"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdote } from '../requests'

const AnecdoteForm = () => {
  const [notification, dispatch] = useContext(NotificationContext)
  
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onError: () => {
      dispatch({ type: 'DISPLAY', payload: {message: 'too short anecdote, must have length 5 or more', timeout: 5}})
    },
    onSuccess: async (newAnecdote) => {
      // need to fetch anecdotes because id is assigned by the server and without id react misbehaves
      const updatedAnecdotes = await getAnecdotes()
      queryClient.setQueryData(['anecdotes'], updatedAnecdotes)
      dispatch({ type: 'DISPLAY', payload: {message: `'${newAnecdote.content}' was created`, timeout: 5}})
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
