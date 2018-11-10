import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button} from 'reactstrap';
import FighterInput from './FighterInput.js'
class GetNewData extends React.Component {
    constructor(){
        super()
        this.state={
            nameValue: null,
            makeValue: null,
            topSpeedValue: null,
            weaponsValue: null,
        }
    }
    // handleSubmit(){
    //     addJet={
    //         name: document.getElementsByClassName('fighterName').value,
        
    //     };

    // };
    

    render() {
        console.log(this.state)
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText className="fighterName">Fighter Jet Name: </InputGroupText>
                    </InputGroupAddon>
                    <FighterInput />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Fighter Jet Make: </InputGroupText>
                    </InputGroupAddon>
                    <FighterInput />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Top Speed: </InputGroupText>
                    </InputGroupAddon>
                    <FighterInput />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Primary Weapon: </InputGroupText>
                    </InputGroupAddon>
                    <FighterInput />
                </InputGroup>
                <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>Submit Fighter Jet</Button></InputGroupAddon>
                </InputGroup>

            </div>
        )
    }
}

export default GetNewData 