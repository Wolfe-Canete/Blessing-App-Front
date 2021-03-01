import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import './styles/ListStyle.css'

export default function BlessingList() {
  const [blessings, setBlessings] = useState([])

  const fetchBlessings = async () => {
    await fetch('http://127.0.0.1:8000/blessings/')
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
      <div className="cards">
          {blessings && blessings.map(blessing => {
              return (
                  <div>
                    <Card style={{ width: "20rem" }}>
                      <Card.Body>
                        <Card.Title>{blessing.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {blessing.author} (ID: {blessing.id})
                        </Card.Subtitle>
                        <Card.Text>
                          {blessing.content}
                        </Card.Text>
                        <Card.Link href={`/blessings/${blessing.id}`}>Comments</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
              )
          })}
      </div>
  )
}