import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import './styles/ListStyle.css'

export default function BlessingList() {
  const [blessings, setBlessings] = useState([])

  const fetchBlessings = async () => {
    await fetch('https://nameless-citadel-52825.herokuapp.com/blessings/')
    .then(res => res.json())
    .then(res => {
      setBlessings(res)
      console.log(res)
    })
  }
  useEffect(() => {
    fetchBlessings()
  }, []);

  const sortBlessing = [].concat(blessings)
  .sort((item1, item2) => item1._id > item2._id ? 1 : -1 )
  .map((blessing, id) => {
    return (
      <div key={blessing.id}>
        <Card style={{ width: "20rem" }} >
          <Card.Body>
            <Card.Title>{blessing.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {blessing.author}
            </Card.Subtitle>
            <Card.Text>
              {blessing.content}
            </Card.Text>
            <Card.Link href={`/blessings/${blessing.id}`}>Share Your Thoughts</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  })


  return(
      <div className="cards">
         {sortBlessing}
      </div>
  )
}