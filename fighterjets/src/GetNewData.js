import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button} from 'reactstrap';
import FighterInput from './FighterInput.js';
class GetNewData extends React.Component {
    constructor(){
        super()
        this.state={
            nameValue: "",
            makeValue: "",
            topSpeedValue: "",
            weaponsValue: "",
        }
    }
    updateInputValue(obj) {
        
        this.setState(obj)
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText className="fighterName">Fighter Jet Name: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.nameValue} onChange={(e)=>{this.updateInputValue({nameValue: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Fighter Jet Make: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.makeValue} onChange={(e)=>{this.updateInputValue({makeValue: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Top Speed: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.topSpeedValue} onChange={(e)=>{this.updateInputValue({topSpeedValue: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Primary Weapon: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.weaponsValue} onChange={(e)=>{this.updateInputValue({weaponsValue: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>Submit Fighter Jet</Button></InputGroupAddon>
                </InputGroup>

            </div>
        )
    }
}

export default GetNewData 