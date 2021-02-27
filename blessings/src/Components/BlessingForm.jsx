import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './styles/FormStyle.css';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import axios from 'axios';

export default function BlessingForm() {
  const initialState = {
    author: "",
    title: "",
    content: "",
  };

  const [blessing, setBlessing] = useState({
    author: "",
    title: "",
    content: "",
  });
  const history = useHistory();
  
  const handleChange = (event) => {
    setBlessing({ ...blessing, [event.target.id]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(blessing);
    postBlessing().then(id => history.push(`/blessings/${id}`))
  };

  const postBlessing = async (addBlessing) => {

    // try {
    //     const response = await axios.post(url, blessing, {
    //       headers: headers
    //     });
    //     return response.data._id;
    // } catch (error) {
    //     console.error(`posting error${error}`);
    // }

    try {
      const url = 'https://nameless-citadel-52825.herokuapp.com/blessings/'
      const headers = { 'Content-Type': 'application/json' };
      console.log(url)
      console.log(addBlessing, "addBlessing")
      const newBlessing = await fetch (url, {
        // credentials: 'include', 
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          author: blessing.author,
          title: blessing.title,
          content: blessing.content
        })
      })
      const newBlessingJson = await newBlessing.json()
      console.log(newBlessingJson)
    } catch (error){
      console.log(error)
    }
  };

  return (
    <Form className='new-blessing' onSubmit={handleSubmit}>

      <Form.Group className='input-author'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="input"
          // value={blessing.author}
          placeholder="Author Name"
          onChange={handleChange}
          />
      </Form.Group>

      <Form.Group className='input-title'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="input"
          // value={blessing.title}
          placeholder="Blessing's Title"
          onChange={handleChange}
          />
      </Form.Group>

      <Form.Group className='input-blessing'>
        <Form.Label>Blessing</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={blessing.content}
          placeholder="Count your blessings"
          onChange={handleChange}
        />
      </Form.Group>

      <Button className='submit-blessing' type='submit' variant='success'>
          SUBMIT
      </Button>
    </Form>
  );
}
