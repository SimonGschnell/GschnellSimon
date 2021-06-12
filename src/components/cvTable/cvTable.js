import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";

const cvLogo = (
  <svg
    width='28'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z' />
    <path
      fillRule='evenodd'
      d='M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
      clipRule='evenodd'
    />
  </svg>
);

const upChevro = (
  <svg
    className='mx-4'
    width='23'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z'
      clipRule='evenodd'
    />
  </svg>
);

let leftChevro = (
  <svg
    className='mx-4'
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
      d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
    />
  </svg>
);
let rightChevro = (
  <svg
    width='23'
    className='mx-4'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13 5l7 7-7 7M5 5l7 7-7 7'
    />
  </svg>
);

let CvTable = (props) => {
  function returnObjectKeys(obj) {
    let res = [];
    for (const [key, value] of Object.entries(obj)) {
      res.push(
        <td className='py-3' key={key}>
          {value}
        </td>
      );
    }
    return res;
  }

  function createInitCollapses() {
    let res = {};
    for (const [key, value] of Object.entries(props.data)) {
      res[key] = true;
    }
    return res;
  }

  const [collapses, setCollapses] = useState(() => createInitCollapses());

  return (
    <>
      <Badge pill className=' px-4' variant='warning'>
        <h1 className='font-italic'>{cvLogo} Curriculum vitae</h1>
      </Badge>

      {props.data.map((data, i) => {
        return (
          <Row key={i} className={`my-5 ${data.direction ?? ""}`}>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <h1
                onClick={() =>
                  setCollapses((e) => {
                    return { ...e, [i]: !e[i] };
                  })
                }
                className='font-italic my-3 text-warning hoverAboutTable user-select-none'
                style={{ textAlign: data.direction ? "end" : "" }}
              >
                {data.direction ? "" : collapses[i] ? rightChevro : upChevro}
                {data.category}
                {data.direction ? (collapses[i] ? leftChevro : upChevro) : ""}
              </h1>
              <Collapse in={collapses[i]}>
                <div
                  className='py-2 px-4'
                  style={{
                    borderRadius: "80px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <Table
                    style={{ fontSize: "1.2rem" }}
                    borderless
                    className='text-monospace -2 bg-transparent'
                    variant='dark'
                  >
                    <thead className='font-italic '>
                      <tr>
                        {data.headers.map((ent, i) => {
                          return (
                            <th className='text-center text-nowrap' key={i}>
                              {ent}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>

                    <tbody>
                      {data.data.map((data, i) => {
                        return <tr key={i}>{returnObjectKeys(data)}</tr>;
                      })}
                    </tbody>
                  </Table>
                </div>
              </Collapse>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default CvTable;
