import React from 'react'
import ChatBox from './ChatBox'
import Navbar from './Navbar'
import AddQuestion from './AddQuestion'
import Admin from './Admin'
import {Route, Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'

const questions = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'A framework for building user Interfaces'
  },
  {
    id: 2,
    question: 'Is React The best framework?',
    answer: 'Yessss'
  },
  {
    id: 3,
    question: 'Can React give me a job',
    answer: 'OfCource'
  },
  {
    id: 4,
    question: 'What is a React Component?',
    answer: 'It is just a function returning JSX'
  },
  {
    id: 5,
    question: 'Why React?',
    answer: 'because it is the future'
  }
]

function App() {

  const state = useSelector(state => state)
  return (
    <div>
      
      <Navbar />
      
      <Switch>
      <Route exact path='/'>
     <ChatBox ques={state}/>
     </Route>

     <Route path='/admin'>
       <Admin />
     </Route>

     <Route path='/addQuestion'>
       <AddQuestion questions={state}/>
     </Route>

      </Switch>

    </div>
  )
}

export default App
