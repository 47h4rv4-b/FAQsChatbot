import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        question: 'What is Redux?',
        answer: 'A framework for building user Interfaces'
      },
      {
        id: 2,
        question: 'Is Redux The best framework?',
        answer: 'Yessss'
      },
      {
        id: 3,
        question: 'Can Redux give me a job',
        answer: 'OfCource'
      },
      {
        id: 4,
        question: 'What is a Redux Component?',
        answer: 'It is just a function returning JSX'
      },
      {
        id: 5,
        question: 'Why Redux?',
        answer: 'because it is the future'
      }
]

const reducer = createSlice({
name: 'Questions',
initialState,
reducers: {
    addItemHandler(state, action) {
     state.push(action.payload)
    }
}
})

export const actions = reducer.actions
const Store = configureStore(reducer)
export default Store
