import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
class Formadd extends Component{
    render()
    {
        return(
            <Row>
                <Form>
              <FormGroup>
                    <Label for="RollNo">RollNo</Label>
                    <Input id="RollNo" name="RollNo" />
                </FormGroup>  

                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input id="Name" name="Name" />
                </FormGroup>  

                <FormGroup>
                    <Label for="Address">Address</Label>
                    <Input id="Address" name="Address" />
                </FormGroup>  
                <Button>ADD MEMBER</Button>
            </Form>
            </Row>
        );
    }
}
export default Formadd;