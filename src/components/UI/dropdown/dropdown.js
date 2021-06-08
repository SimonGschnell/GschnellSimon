import Dropdown from 'react-bootstrap/Dropdown'
import  {useState} from 'react'
import highlight from '../../../utils/highlightedSearch'

let Drop = (props) => {

  let [apiSearch, setApiSearch] = useState("")

        let handleApiSearch = (event) => {
            setApiSearch(event.target.value)
        }

    return ( <Dropdown>
        <Dropdown.Toggle id="dropdown-custom-components">
          {props.title}
        </Dropdown.Toggle>
    
        <Dropdown.Menu search={apiSearch} handle={handleApiSearch} as={props.header ?? null}>
          <Dropdown.Item eventKey="1" value="Red">{highlight("Red",apiSearch)}</Dropdown.Item>
          <Dropdown.Item eventKey="2" value="Blue">{highlight("Blue",apiSearch)}</Dropdown.Item>
          <Dropdown.Item eventKey="3" value="Orange" >
          {highlight("Orange",apiSearch)}
          </Dropdown.Item>
          <Dropdown.Item value="Red-Orange" eventKey="1">{highlight("Red-Orange",apiSearch)}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>)
}

export default Drop;