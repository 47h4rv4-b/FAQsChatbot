import React, {useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {actions} from './Store'

function AddQuestion(props) {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const questionRef = useRef()
    const answerRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
     dispatch(actions.addItemHandler({question: questionRef.current.value, answer: answerRef.current.value}))
    }
    

    return (
        <React.Fragment>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" ref={questionRef} id="" required placeholder="Enter Your Question"/>
            <input type="text" name="" ref={answerRef} placeholder="Enter Your Answer" required id="" />
            <button>Submit</button>
        </form>
 
        <div className="questions">
              {state.map(ques => {
                  return (
                      <div className="single-question">
                            <h1>Ques:- {ques.question}</h1>
                           <h4>Ans:- {ques.answer}</h4>
                      </div>
                  )
              })}
            </div>

        </React.Fragment>
    )
}

export default AddQuestion
