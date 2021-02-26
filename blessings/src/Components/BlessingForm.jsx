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
                Title your blessing/Author your blessing
                <input type='text' name='name'/>
            </label>
            <textarea 
                id="message"
                cols="30"
                rows="15"
                onChange={handleChange}
                value={formState.message}
                >Blessing Here</textarea>
            <input type='submit' value='Submit'/>
        </form>

    )
}
