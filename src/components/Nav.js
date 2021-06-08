
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

//const handleSelect = (eventKey) => alert(`selected ${eventKey}`);


let Navigation = ()=> {



return (<Nav variant="pills"  activeKey="1" className="p-3 " >
      <Nav.Item>
      
        <Link to="/" className="nav-link text-white" role="button">Home</Link>
     
      </Nav.Item>
      <Nav.Item>
     
      <Link to="/about" className="nav-link text-white" role="button">About</Link>
     
      </Nav.Item>
      <Nav.Item>
     
     <Link to="/projects" className="nav-link text-white" role="button">Projects</Link>
    
     </Nav.Item>
     <Nav.Item>
     
     <Link to="/api" className="nav-link text-white" role="button">Api's</Link>
    
     </Nav.Item>
      
    </Nav>);
}
export default Navigation;
