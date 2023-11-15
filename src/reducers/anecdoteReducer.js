import { createSlice } from "@reduxjs/toolkit"

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
export default anecdoteSlice.reducer