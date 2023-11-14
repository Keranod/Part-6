import { useSelector, useDispatch } from 'react-redux'
import { voteAnectode } from '../reducers/anecdoteReducer'
import Filter from './Filter'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAnectode(id))
      }

      const anecdotesSortedByVotes = anecdotes.slice().sort((a, b) => b.votes - a.votes)

      const anecdotesToShow = anecdotesSortedByVotes
          .filter(anecdote => filter === '' || anecdote.content.includes(filter))

    return (
        <div>
          <Filter />
      {anecdotesToShow.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      </div>
    )
}

export default AnecdoteList