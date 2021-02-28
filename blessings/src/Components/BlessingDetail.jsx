import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'

export default function BlessingDetail({ match }) {
const [blessing, setBlessing] = useState(null);

    const fetchBlessings = async () => {
        await fetch(`https://nameless-citadel-52825.herokuapp.com/blessings/${match.params.id}`)
        .then(res => res.json())
        .then(res => {
            setBlessing(res)
            console.log(res)
        })
    }
    useEffect(() => {
        fetchBlessings()
    }, []);

    return(
        blessing && (
    <div>
        <Card style={{ width: "20rem" }}>
        <Card.Body>
            <Card.Title>{blessing.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            {blessing.author}
            </Card.Subtitle>
            <Card.Text>
            {blessing.content}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
        </Card>
    </div>
        )
)

}

