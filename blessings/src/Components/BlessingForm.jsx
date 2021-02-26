import { useState } from 'react'

export default function BlessingForm() {
    const initialState = {
        author:'',
        title:'',
        cont:''
    } 

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        setFormState({ ...formState, [event.target.id]: event.target.value})
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Count Your Blessings:
                <input type='text' name='name'/>
            </label>
            <input type='submit' value='Submit'/>
        </form>

    )
}
