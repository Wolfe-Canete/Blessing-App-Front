import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function BlessingForm() {
  const initialState = {
    author: "",
    title: "",
    cont: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Author</Form.Label>
        <Form.Control type="input" placeholder="Author Name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Count your blessings"
        />
      </Form.Group>
    </Form>
  );
}
