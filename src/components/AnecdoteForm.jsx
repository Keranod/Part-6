import { useDispatch } from 'react-redux'
import { createAnectode } from '../reducers/anecdoteReducer'
import { notificationReducer } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnectode(newAnecdote))
        dispatch(notificationReducer({ content: newAnecdote.content, type: 'created' }))
    }

    return (
        <div>
            <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
      </div>
    )
}

export default NewAnecdote