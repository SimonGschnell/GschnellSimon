import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


let Input = (props) => 
    <InputGroup className="mb-3">

        { props.prepend && <InputGroup.Prepend>
            <InputGroup.Text id="prepend" >{props.prepend}</InputGroup.Text>
        </InputGroup.Prepend>}

        <FormControl
            value={props.value}
            onChange={props.onChange??function(){}}
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby={props.prepend?"prepend":props.append?"append":""}
        />

        {props.append && <InputGroup.Append>
        <InputGroup.Text id="append" >{props.append}</InputGroup.Text>
        </InputGroup.Append>}

  </InputGroup>

  export default Input