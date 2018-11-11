import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input, ListGroup, ListGroupItem} from 'reactstrap';

class ModalEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
      render() {
        return (
          <div>
            <Button color="primary" size="lg" onClick={this.toggle}>Edit 🤯</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Update Fighter Jet Info:</ModalHeader>
              <ListGroup>
              <ModalBody>
              <InputGroup>
              <ListGroupItem> <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                <Input placeholder="name" /></ListGroupItem>
                    
                <ListGroupItem><InputGroupAddon addonType="prepend">Make</InputGroupAddon>
                        <Input placeholder="make" /></ListGroupItem>
                    
                        <ListGroupItem><InputGroupAddon addonType="prepend">Top Speed</InputGroupAddon>
                        <Input placeholder="top speed" /></ListGroupItem>
                   
                        <ListGroupItem><InputGroupAddon addonType="prepend">Primary Weapon</InputGroupAddon>
                         <Input placeholder="username" /></ListGroupItem>
                    </InputGroup>
              </ModalBody>
              </ListGroup>
              <ModalFooter>
                <Button  color="primary" onClick={this.toggle} onClick={(e)=>{this.props.update(this.props.name)}}>Update</Button>{' '}
                {/* onClick={(e)=>{props.delete(element.name)}}>Delete</Button> */}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    }


export default ModalEditor