import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
class Formcerti extends Component{
    render(){
        return(
            <Row>
                <Form>

                <FormGroup>
                    <Label for="links">link</Label>
                    <Input id="links" name="link" />
                </FormGroup>  

                <FormGroup>
                    <Label for="taskid">Task ID</Label>
                    <Input id="taskid" name="taskid" />
                </FormGroup>

                <Button>ADD CERTIFICATION</Button> 
            </Form>
            </Row>
        );
    }
}


export default Formcerti;