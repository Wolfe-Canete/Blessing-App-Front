import axios from 'axios'

export default axios.create({
    baseURl: "https://nameless-citadel-52825.herokuapp.com/blessings/",
    headers : {
        "Content-type": "application/json"
    }
})