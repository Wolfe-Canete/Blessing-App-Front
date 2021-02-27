import { useState } from "react";
import './styles/FormStyle.css'
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

export default function BlessingForm() {
  const initialState = {
    author: "",
    title: "",
    cont: "",
  };

  const [blessing, setBlessing] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(blessing);
    setBlessing({ ...blessing, [event.target.id]: event.target.value });
  };

  const handleChange = (event) => {
    setBlessing({ ...blessing, [event.target.id]: event.target.value });
  };


  /*
  axios.post('https://nameless-citadel-52825.herokuapp.com/blessings/', {
    author,
    title,
    blessing
  }).then((resp) => {
    addBlessing(resp.data)
  })

  function addPictures (gifData) {
  // Adds all of the gifs to the dom
  gifs.innerHTML = ''
  gifData.forEach(gif => {
    if (!gif.url) return

    const imageNode = document.createElement('img')
    imageNode.setAttribute('src', gif.url)
    imageNode.classList.add('gif')

    imageNode.addEventListener('click', () => { editModal(gif) })

    gifs.appendChild(imageNode)
  })
  }

//*----= OR =----*\\

   const postBlessing = async () => {
      const url =
         process.env.NODE_ENV === 'production'
            ? 'https://nameless-citadel-52825.herokuapp.com/blessings/'
            : 'http://localhost:8000/blessings';
      const headers = { 'Content-Type': 'application/json' };

      try {
         const response = await axios.post(url, blessing, {
            headers: headers
         });
         return response.data._id;
      } catch (error) {
         console.error(error);
      }
   };
  */

  return (
    <Form className='new-blessing' onSubmit={handleSubmit}>

      <Form.Group className='input-author' controlId="exampleForm.ControlInput1">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="input"
          value={blessing.author}
          placeholder="Author Name"
          onChange={handleChange}
          />
      </Form.Group>

      <Form.Group className='input-title' controlId="exampleForm.ControlInput2">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="input"
          value={blessing.title}
          placeholder="Blessing's Title"
          onChange={handleChange}
          />
      </Form.Group>

      <Form.Group className='input-blessing' controlId="exampleForm.ControlTextarea3">
        <Form.Label>Blessing</Form.Label>
        <Form.Control
          as="textarea"
          value={blessing.content}
          rows={3}
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
