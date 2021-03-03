import { useState } from "react";
import axios from 'axios'
import "./styles/FormStyle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"

export default function BlessingForm({ match }) {
  const initialState = {
    id: null,
    author: "",
    title: "",
    content: "",
  };
  const [blessing, setBlessing] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (event) => {
    setBlessing({ ...blessing, [event.target.id]: event.target.value });
  };

  const saveBlessing = async () => {
    const url = "https://nameless-citadel-52825.herokuapp.com/blessings/"
    const headers = { 'Content-Type': 'application/json' };
    try {
      const res = await axios.post(url, blessing, {
        headers: headers
      });
      console.log(res.data)
      return res.data._id;
    } catch (error) {
      console.error(error);
    }
  };

  const newBlessing = () => {
    setBlessing(initialState);
    setSubmitted(false);
  };
  
  return (
    <div className="new-blessing">
      {submitted ? (
        <div>
          <h4>Youre blessing has been shared!</h4>
          <button className="btn btn-success" onClick={newBlessing}>
            Add New Blessing
          </button>
        </div>
      ) : (
        <Form>
          <Form.Group className="input-author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              id='author'
              type="input"
              placeholder="Author Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="input-title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              id='title'
              type="input"
              placeholder="Blessing's Title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="input-blessing">
            <Form.Label>Blessing</Form.Label>
            <Form.Control
              id='content'
              as="textarea"
              rows={4}
              placeholder="Count your blessings"
              onChange={handleChange}
            />
          </Form.Group>
          <Link to={`/blessings`}>
          <Button className="btn btn-Success" onClick={saveBlessing}>
            SUBMIT
          </Button>
          </Link>
        </Form>
      )}
    </div>
  );
}