import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

export default function BlessingDetail({ match }) {
  const [blessedDetails, setblessedDetails] = useState(null);
  const [comment, setComment] = useState(null)

  useEffect(() => {
    fetchBlessingDetails();
  }, []);
  
  const handleDelete = async (id) => {
    try {
      const url = `https://nameless-citadel-52825.herokuapp.com/blessings/${match.params.id}`;
      await axios.delete(url);
      //   history.push("/blessings");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setComment({ ...comment, [event.target.id]: event.target.value });
  };
  
  const fetchBlessingDetails = async (id) => {
    try {
      const url = `https://nameless-citadel-52825.herokuapp.com/blessings/${match.params.id}`;
      
      const response = await axios(url);
      setblessedDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
    
  const saveComment = async () => {
    const url = `https://nameless-citadel-52825.herokuapp.com/comment/`
    const headers = { 'Content-Type': 'application/json' };
    try {
    //   var comment2 = {
    //     commenter: "me",
    //     blessing:"32",
    //     content: "This and Things"
    // }
      const res = await axios.post(url, comment, {
      // const res = await axios.post(url, comment2, {
        headers: headers
      });
      console.log(res.data)
      return res.data._id;
    } catch (error) {
      console.error(error);
    }
  };

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

            <Form.Group>
              
              <Form.Label>
                Write a Comment
              </Form.Label>

              <Form.Control
                id="commenter"
                type="text"
                placeholder="Name"
                onChange={handleChange}
              />
              
              {/* setComment = ${blessedDetails.id}*/}

              <Form.Control
                id="blessing"
                type="text"
                placeholder="ID"
                onChange={handleChange}
              />

              <Form.Control
                id="content"
                type="text"
                placeholder="Comment"
                onChange={handleChange}
              />

            </Form.Group>

            <Link to={`/blessings/${blessedDetails.id}`}>
              <Button className="btn btn-Success" onClick={saveComment}>
                  Share
              </Button>
            </Link>
            
            {blessedDetails.comments.map((b) => {
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
  )
}
