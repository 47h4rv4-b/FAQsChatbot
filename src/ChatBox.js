import React, {useState} from 'react'

function ChatBox(props) {

    const [state, setstate] = useState();
   

   const handleChange = (e) => {
       if (e.target.value) {
           setstate(e.target.value)
       }
   }

   const test = props.ques.find(q => {
      return q.question.toLowerCase().includes(state)
   })


    return (
        <div className="chat-box">
            <div className="questions">
               {test &&     <div  className="single-question">
                              <h1>Ques:- {test.question}</h1>
                        <h4>Ans:- {test.answer}</h4>
                     </div>}    

                {!test &&  <div  className="single-question">
                              <h1>Ques:- {props.ques[Math.floor(Math.random() * 5)].question}</h1>
                        <h4>Ans:- {props.ques[Math.floor(Math.random() * 5)].answer}</h4>
                     </div>}               
              
            </div>
            <input type="text" name="" onChange={handleChange} id="" />
        </div>
    )
}

export default ChatBox
