import { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./styles/FormStyle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios";
import APIDataService from "../Components/Services/blessed.service";

export default function BlessingForm(props) {
  const initialState = {
    author: "",
    title: "",
    content: "",
  };

  const [blessing, setBlessing] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  // const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlessing({ ...blessing, [name]: value });
  };

  const saveBlessing = () => {
    var data = {
      author: blessing.author,
      title: blessing.title,
      content: blessing.content,
    };

    APIDataService.create(data)
      .then((res) => {
        setBlessing({
          id: res.data.id,
          author: res.data.author,
          title: res.data.title,
          content: res.data.content,
        });
        setSubmitted(true);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
            Add
          </button>
        </div>
      ) : (
        <Form>
          <Form.Group className="input-author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="input"
              // value={blessing.author}
              placeholder="Author Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="input-title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="input"
              // value={blessing.title}
              placeholder="Blessing's Title"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="input-blessing">
            <Form.Label>Blessing</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              // value={blessing.content}
              placeholder="Count your blessings"
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="btn btn-Success" onClick={saveBlessing}>
            SUBMIT
          </Button>
        </Form>
      )}
    </div>
  );
}
