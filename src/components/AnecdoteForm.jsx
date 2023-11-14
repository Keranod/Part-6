import { useDispatch } from 'react-redux'
import { createAnectode } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createAnectode(content))
    }

    return (
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    )
}

export default NewAnecdote