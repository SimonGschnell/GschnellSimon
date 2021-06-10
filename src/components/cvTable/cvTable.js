import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let leftCevro = (
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
let rightCevro = (
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

let cvTable = (props) => {
  function returnObjectKeys(obj) {
    let res = [];
    for (const [key, value] of Object.entries(obj)) {
      res.push(<td key={key}>{value}</td>);
    }
    return res;
  }
  return (
    <>
      {props.data.map((data, i) => {
        return (
          <Row key={i} className={data.direction ?? null}>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <h2
                className='my-3'
                style={{ textAlign: data.direction ? "end" : "" }}
              >
                {data.direction ? "" : rightCevro}
                {data.category}
                {data.direction ? leftCevro : ""}
              </h2>

              <Table
                borderless
                style={{ background: "rgb(74,80,86)" }}
                variant='dark'
              >
                <thead className='table-dark'>
                  <tr>
                    {data.headers.map((ent, i) => {
                      return <th key={i}>{ent}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((data, i) => {
                    return <tr key={i}>{returnObjectKeys(data)}</tr>;
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default cvTable;
