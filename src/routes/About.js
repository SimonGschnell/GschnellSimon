import CvTable from "../components/cvTable/cvTable";
import cv from "../cv.json";
import SimonG from "../images/SimonG.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { useEffect } from "react";

const hashtagSvg = (
  <svg
    width='33'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
      clipRule='evenodd'
    />
  </svg>
);

let About = ({ location }) => {
  const inheritColors = {
    backgroundColor: "inherit",
    color: "inherit",
    border: "inherit",
  };

  return (
    <>
      <Badge pill className='mb-5 px-4' variant='warning'>
        <h1 className=' font-italic'>{hashtagSvg} Who I am</h1>
      </Badge>

      <Container className='px-5 mb-5'>
        <Row
          style={{
            borderRadius: "100px",
            background: "rgba(255,255,255,0.1)",
            fontSize: "1.4rem",
          }}
          className=' align-content-center justify-content-center'
        >
          <Col className='my-3 d-flex align-items-center ' xs={"auto"}>
            <Image
              height='200px'
              className='mx-5 '
              style={{ border: "5px solid white" }}
              src={SimonG}
              alt='profile'
              roundedCircle
            />
          </Col>
          <Col className='my-3 d-flex align-items-center' xs={"auto"}>
            <Row className='justify-content-center'>
              <Col className=' d-flex align-items-center' xs={"auto"}>
                <ListGroup>
                  <ListGroup.Item action style={inheritColors}>
                    <span className='text-warning text-monospace font-weight-bold'>
                      Name
                    </span>{" "}
                    |{" "}
                    <span className='font-weight-light font-italic'>
                      Simon Gschnell
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item action style={inheritColors}>
                    <span className='text-warning text-monospace font-weight-bold'>
                      Birthdate
                    </span>{" "}
                    |{" "}
                    <span className='font-weight-light font-italic'>
                      01.06.1997
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item action style={inheritColors}>
                    <span className='text-warning text-monospace font-weight-bold'>
                      Occupation
                    </span>{" "}
                    |{" "}
                    <span className='font-weight-light font-italic'>UniBz</span>
                  </ListGroup.Item>
                  <ListGroup.Item action style={inheritColors}>
                    <span className='text-warning text-monospace font-weight-bold'>
                      Passions & hobbies
                    </span>{" "}
                    |
                    <ul>
                      <li>
                        <span className='font-weight-light font-italic'>
                          coding
                        </span>
                      </li>
                      <li>
                        <span className='font-weight-light font-italic'>
                          fitness
                        </span>
                      </li>
                      <li>
                        <span className='font-weight-light font-italic'>
                          gaming
                        </span>
                      </li>
                    </ul>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={"auto"}>
                <ListGroup>
                  <ListGroup.Item action style={inheritColors}>
                    <span className='text-warning text-monospace font-weight-bold'>
                      Strengths
                    </span>{" "}
                    {"--> "}
                    <ul>
                      <li>
                        <span className='font-weight-light font-italic'>
                          highly motivated to learn
                        </span>
                      </li>
                      <li>
                        <span className='font-weight-light font-italic'>
                          inspired to code
                        </span>
                      </li>
                      <li>
                        <span className='font-weight-light font-italic'>
                          curious
                        </span>
                      </li>
                      <li>
                        <span className='font-weight-light font-italic'>
                          free spirit
                        </span>
                      </li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item action style={inheritColors}>
                    <span className='text-warning text-monospace font-weight-bold'>
                      Weakness
                    </span>{" "}
                    {"--> "}
                    <ul>
                      <li>
                        <span className='font-weight-light font-italic'>
                          unstable mood
                        </span>
                      </li>
                      <li>
                        <span className='font-weight-light font-italic'>
                          eager at times
                        </span>
                      </li>
                      <li>
                        <span className='font-weight-light font-italic'>
                          little lazy
                        </span>
                      </li>
                    </ul>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <CvTable data={cv}></CvTable>
    </>
  );
};

export default About;
