import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'

export default function BlessingDetail({ match }) {
    const [blessedDetails, setblessedDetails] = useState(null);

    const fetchBlessingedDetails = async () => {
        await fetch(`https://nameless-citadel-52825.herokuapp.com/blessings/${match.params.id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setblessedDetails(res)
        })
    }
    useEffect(() => {
        fetchBlessingedDetails()
    },);

    return(
        blessedDetails && (
            <div>
                <Card style={{ width: "20rem" }}>
                    <Card.Body>
                        <Card.Title>{blessedDetails.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {blessedDetails.author}
                    </Card.Subtitle>
                    <Card.Text>
                        {blessedDetails.content}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    )
}

