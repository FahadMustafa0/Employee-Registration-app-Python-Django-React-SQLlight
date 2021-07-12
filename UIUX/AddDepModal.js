import React, { Component } from 'react';

import { Modal,Button,Row,Col,Form } from 'react-bootstrap';
export class AddDepModal extends Component {

    // calling constructor with super props so that components constructor mayget call 
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        // POST API CAll
        fetch('http://127.0.0.1:8000/department/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentId:null,
                DepartmentName:event.target.DepartmentName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Department
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <div className="container">
              <Row>
                  <Col sm={6}> 
                  {/* on form submitting method call */}
                      <Form onSubmit={this.handleSubmit}>
                          {/* field Group */}
                            <Form.Group controlId="DepartmentName">
                                {/* Text field */}
                                <Form.Control type="text" name="DepartmentName" required placeholder="Department Name"/> 
                            </Form.Group>   
                            <Form.Group controlId="DepartmentName">
                                <Button variant="primary" type="submit" >
                                    Save
                                    </Button> 
                            </Form.Group>                     
                      </Form>
                  </Col>
              </Row>
             </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='danger' onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>


        );

    }

}
