import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Profile from "../../images/SimonG.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

let headline = (props) => (
  <Jumbotron
    className=' text-white '
    style={{
      backgroundSize: "cover",
      backgroundImage: props.background ? `url(${props.background})` : "",
      textAlign: "center",
    }}
  >
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <Image
            height='200px'
            style={{ border: "5px solid white" }}
            src={Profile}
            alt='profile'
            roundedCircle
          />
        </Col>
        <Col xs={12} sm={6}>
          <div style={{ background: "rgba(18,18,20,0.2)" }}>
            <h1>Hello, world!</h1>
            <p>
              My name is Simon Gschnell and this is my personal webpage. I am a
              CS student in the university of Bolzano and I am looking forward
              to learn a bunch of things
            </p>
          </div>
          <p>
            <Button className='text-dark ' variant='light'>
              Contact me
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default headline;
