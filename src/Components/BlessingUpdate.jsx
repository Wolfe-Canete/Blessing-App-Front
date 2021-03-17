import { useState, useEffect } from "react";
import axios from 'axios'
import "./styles/FormStyle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function BlessingForm({ match }) {
  const initialState = {
    author: "",
    title: "",
    content: "",
  };
  const [blessedDetails, setblessedDetails] = useState(initialState);
  
  const handleChange = (event) => {
    setblessedDetails({ ...blessedDetails, [event.target.id]: event.target.value });
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
  useEffect(() => {
    fetchBlessingDetails()
  }, );

  const saveBlessing = async () => {
    const url = `https://nameless-citadel-52825.herokuapp.com/blessings/${match.params.id}`
    const headers = { 'Content-Type': 'application/json' };
    console.log(url)
    try {
       const res = await axios.put(url, blessedDetails, {
          headers: headers
        });
        console.log(res.data)
       return res.data._id;
    } catch (error) {
       console.error(error);
    }
 };

//   const newBlessing = () => {
//     setblessedDetails(initialState);
//     setSubmitted(false);
//   };
  
  return (
    <div className="new-blessing">
        <Form>
          <Form.Group className="input-author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              id='author'
              type="input"
              placeholder="Author Name"
              value={blessedDetails && blessedDetails.author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="input-title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              id='title'
              type="input"
              placeholder="Blessing's Title"
              value={blessedDetails && blessedDetails.title}
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
              value={blessedDetails && blessedDetails.content}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="btn btn-Success" onClick={saveBlessing}>
            SUBMIT
          </Button>
        </Form>
    </div>
  );
}