import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function BlessingDetail({ match }) {
  const [blessedDetails, setblessedDetails] = useState(null);
  const [comment, setComment] = useState([])

  useEffect(() => {
    fetchBlessingDetails();
    fetchComment();
  }, []);

  const fetchBlessingDetails = async (id) => {
    try {
      const url = `https://nameless-citadel-52825.herokuapp.com/blessings/${match.params.id}`;

      const response = await axios(url);
      setblessedDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const url = `https://nameless-citadel-52825.herokuapp.com/blessings/${match.params.id}`;
      await axios.delete(url);
      //   history.push("/blessings");
    } catch (error) {
      console.log(error);
    }
  };


  
      const fetchComment = async () => {
      try {
        const url = `http://nameless-citadel-52825.herokuapp.com/comment`;
  
        const response = await axios(url);
        setComment(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    



  console.log(comment)
  return (
    blessedDetails && (
      <div>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>{blessedDetails.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {blessedDetails.author}
            </Card.Subtitle>
            <Card.Text>{blessedDetails.content}</Card.Text>
            <Card.Link href={`/blessings/edit/${blessedDetails.id}`}>
              Edit Blessing
            </Card.Link>
          </Card.Body>
          <ListGroup variant="flush">
          {comment.map((b) => {
          return(
            <div>
             <ListGroup.Item>
               Posted by: {b.commenter} 
               <br/>
               {b.content}
             </ListGroup.Item> 
            </div>
          )
        })}
        </ListGroup>
        </Card>
        <Link to="/blessings">
          <Button className="btn btn-Success" onClick={handleDelete}>
            Delete
          </Button>
        </Link>

      </div>
    )
  );
}
