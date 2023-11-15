import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnectode(state, action) {
      const content = action.payload
      state.push(action.payload)
    },
    voteAnectode(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(n => n.id === id)
      const votedAnectode = {
          ...anecdoteToVote,
          votes: anecdoteToVote.votes + 1
      }
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : votedAnectode
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnectode, voteAnectode, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer