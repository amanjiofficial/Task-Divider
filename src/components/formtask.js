import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
class FormTask extends Component{
    render(){
        return(
            <Row>
                <Form>
              <FormGroup>
                    <Label for="tid">Task ID</Label>
                    <Input id="tid" name="tid" />
                </FormGroup>  

                <FormGroup>
                    <Label for="Tname">Task Name</Label>
                    <Input id="Tname" name="Tname" />
                </FormGroup>  

                <FormGroup>
                    <Label for="tag">Tag</Label>
                    <Input id="tag" name="tag" />
                </FormGroup>

                
                <FormGroup>
                    <Label for="weight">Weight</Label>
                    <Input id="weight" name="weight" />
                </FormGroup>  

                <Button>ADD TASK</Button> 
            </Form>
            </Row>
        );
    }
}
export default FormTask;