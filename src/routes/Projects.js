import projects from "../json/proj.json";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import Input from "../components/UI/input";
import { useLocaleStorageState } from "../hooks/customHooks";
import highlight from "../utils/highlightedSearch";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/image";
import Profile from "../images/SimonG.png";

let searchSVG = (
  <svg
    width='23'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);

let Projects = () => {
  let location = useLocation();

  let { url } = useRouteMatch();

  let [search, setSearch] = useLocaleStorageState("search", "", false);

  let handleSearch = (event) => {
    setSearch(event.target.value);
  };

  let filteredItems = projects
    .filter((proj) =>
      proj.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .map(({ name, description, image_src, id }) => {
      return (
        <div className='m-3' key={id}>
          <Card style={{ backgroundColor: "rgba(57, 60, 64, 0.65)" }}>
            <a
              href='/'
              style={{
                top: "10px",
                right: "15px",
                fontStyle: "monospace",
                zIndex: 3,
                color: "#FDE290",
              }}
              className=' position-absolute'
            >
              open on github
            </a>
            <Container fluid>
              <Row>
                <Col xs={"auto"} className=' d-flex p-0'>
                  <Image
                    className='align-self-center'
                    style={{
                      height: "150px",

                      borderTopRightRadius: "0 !important",
                      borderTopLeftRadius: "0 !important",
                    }}
                    src={image_src}
                    rounded
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>
                      <h3>
                        <Link className='text-warning' to={`${url}/${id}`}>
                          {highlight(name, search, "grey")}
                        </Link>
                      </h3>
                    </Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </div>
      );
    });
  return (
    <>
      <Input
        value={search}
        prepend={searchSVG}
        append={
          <svg
            height='17px'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        }
        appendAction={(e) => {
          setSearch("");
        }}
        onChange={handleSearch}
      />
      {filteredItems}
    </>
  );
};

export default Projects;
