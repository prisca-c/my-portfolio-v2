import React, {useState} from 'react';

import Container from 'react-bootstrap/esm/Container';
import {Form, Button} from 'react-bootstrap';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const sendEmail = event => {
    event.preventDefault();

    console.log('We will fill this up shortly.');

  };

  const onInputChange = event => {
    const {name, value} = event.target;

    setState({
        ...state,
        [name]: value
    });
  };

  return (
    <Container id='contact'>
      <div className="col-md-6 offset-md-3">

        <form onSubmit={sendEmail}>
            <Form.Group controlId='name'>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={state.name}
                placeholder='Votre Nom'
                onChange={onInputChange}
              />
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={state.email}
                placeholder='Votre Email'
                onChange={onInputChange}
              />
            </Form.Group>

            <Form.Group controlId='subject'>
              <Form.Label>Objet</Form.Label>
              <Form.Control
                type='text'
                name='subject'
                value={state.subject}
                placeholder='Objet'
                onChange={onInputChange}
              />
            </Form.Group>

            <Form.Group controlId='message'>
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as='textarea'
                name='message'
                value={state.message}
                rows='3'
                placeholder='Votre Message'
                onChange={onInputChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Envoyer
            </Button>
        </form> 

      </div>
    </Container>
  );
};

export default ContactForm;
