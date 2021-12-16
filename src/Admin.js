import React from 'react'
import {useHistory} from 'react-router-dom'

function Admin() {

    const history = useHistory()

    const handleSubmit = (e) => {
     e.preventDefault();
     history.push('/addQuestion')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="" id="" required placeholder="Email"/>
            <input type="password" name="" placeholder="Password" required id="" />
            <button>Submit</button>
        </form>
    )
}

export default Admin
