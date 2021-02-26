import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";

export default function BlessingList() {
    const [blessings, setBlessings] = useState([])

    const fetchBlessings = async () => {
        await fetch('http://localhost:8000/blessings/')
        .then(res => res.json())
        .then(res => {
            setBlessings(res)
            console.log(res)
        })
    }
    useEffect(() => {
        fetchBlessings()
    }, []);

    return(
        <div>
            {blessings && blessings.map(blessing => {
                return (
                    <div>
                      {/* <h1>PostCard</h1> */}
                      <Card style={{ width: "18rem" }}>
                        <Card.Body>
                          <Card.Title>{blessing.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            {blessing.author}
                          </Card.Subtitle>
                          <Card.Text>
                            {blessing.content}
                          </Card.Text>
                          <Card.Link href="#">Card Link</Card.Link>
                          {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                      </Card>
                    </div>
                )
            })}
        </div>
    )
}