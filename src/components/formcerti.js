import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
class Formcerti extends Component{
    render(){
        return(
            <Row>
                <Form>
              <FormGroup>
                    <Label for="cid">Certification ID</Label>
                    <Input id="cid" name="cid" />
                </FormGroup>  

                <FormGroup>
                    <Label for="links">link</Label>
                    <Input id="links" name="link" />
                </FormGroup>  

                <FormGroup>
                    <Label for="taskid">Task ID</Label>
                    <Input id="taskid" name="taskid" />
                </FormGroup>

                
                <FormGroup>
                    <Label for="srno">Srno</Label>
                    <Input id="srno" name="srno" />
                </FormGroup>  

                <Button>ADD CERTIFICATION</Button> 
            </Form>
            </Row>
        );
    }
}


export default Formcerti;