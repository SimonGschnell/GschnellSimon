
import Nav from 'react-bootstrap/Nav';


let Navigation = ()=>


<Nav  style={{width: "max-content"}} variant="pills" defaultActiveKey="/home"  className="rounded flex-column border">
  <Nav.Item>
    <Nav.Link className="rounded-0" href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="rounded-0" eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="rounded-0" eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

export default Navigation;
