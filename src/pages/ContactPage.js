import React , {useState} from 'react';
import Content from '../components/content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { database } from '../firebase';
import emailjs from 'emailjs-com';

class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',
            disabled: false,
            emailSent:null
        }
    }

    sendEmail =(event) => {
        event.preventDefault();
    
        emailjs.sendForm('gmail', 'template_pr4v1yv', event.target, 'user_Sxnj17gpr1eMNmOa2XmAu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

   handleuserchanges = (event)=>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]:value
    })
    }

    handleUserSubmission = (event) =>{
        this.setState={
            disabled:true
        }
        
        database.collection('mysitecontactform').add({
            name : this.state.name,
            email : this.state.email,
            message : this.state.message,
        }).then( () => {
            alert('Thank you for contacting me. Message Submited');
        }).catch( (error) => {
            alert(error.message);
        });

        this.sendEmail(event);

       event.target.reset();
    }
    
    render(){
        return(
            <div className="contact-style">
                <Content>
                    <h1>CONTACT ME</h1>
                    <Form onSubmit={this.handleUserSubmission}>
                        <Form.Group>
                            <Form.Label htmlFor="full_name">Full Name</Form.Label>
                            <Form.Control id="full_name" name="name" type="text" value={this.state.name} onChange={this.handleuserchanges} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleuserchanges} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"  rows="3" value={this.state.message} onChange={this.handleuserchanges}/>
                        </Form.Group>

                        <Button className="submitButton" type="submit">
                            Send
                        </Button>

                        </Form>

                </Content>
            </div>
        );
    }

}

export default ContactPage;