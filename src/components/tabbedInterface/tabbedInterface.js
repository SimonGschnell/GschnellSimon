import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TabbedInt = () => {
  return (
    <Tab.Container
      variant='dark'
      id='list-group-tabs-example'
      defaultActiveKey='#link1'
    >
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href='#link1'>
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href='#link2'>
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey='#link1'>
              <p>some text</p>
            </Tab.Pane>
            <Tab.Pane eventKey='#link2'>
              <p>different text</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default TabbedInt;
