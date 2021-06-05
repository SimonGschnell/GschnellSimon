
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'

const handleSelect = (eventKey) => alert(`selected ${eventKey}`);


let Navigation = ()=> {

let history = useHistory();

let changeRoute = (route) =>{
  console.log("history")
  history.push(route);
  console.log(history)
}

return (<Nav variant="pills" activeKey="1" className="p-3" >
      <Nav.Item>
      
        <Link to="/" className="nav-link" role="button">Home</Link>
     
      </Nav.Item>
      <Nav.Item>
     
      <Link to="/about" className="nav-link" role="button">About</Link>
     
      </Nav.Item>
      <Nav.Item>
     
     <Link to="/projects" className="nav-link" role="button">Projects</Link>
    
     </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>);
}
export default Navigation;
