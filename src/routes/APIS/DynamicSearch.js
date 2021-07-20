import { useState, useCallback, useEffect } from "react";

function DynamicSearch() {
  const [rows, setRows] = useState(12);
  const [cols, setCols] = useState(20);
  const [goal, setGoal] = useState({ position: null });
  const [start, setStart] = useState({ position: null });
  const [path, setPath] = useState([]);
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    setPath([]);
  }, [start, goal]);

  const [draw, setDraw] = useState(null);

  const field = [
    ...[...Array(rows).keys()].map((row) => {
      return [...[...Array(cols).keys()].map((col) => row + "-" + col)];
    }),
  ];

  const computeAPath = useCallback((start, goal) => {
    if (goal.position != null && start.position != null) {
      let newPath = [];
      let start_row = Number(start.position.split("-")[0]);
      let start_col = Number(start.position.split("-")[1]);
      let goal_row = Number(goal.position.split("-")[0]);
      let goal_col = Number(goal.position.split("-")[1]);

      while (start_row !== goal_row || start_col !== goal_col) {
        console.log(
          `start_row: ${start_row}, start_col: ${start_col}, goal_row: ${goal_row}, goal_col: ${goal_col}, `
        );
        let random = Math.floor(Math.random() * 100 + 1);
        if (random <= 50) {
          if (start_row < goal_row) {
            start_row += 1;
          } else if (start_row > goal_row) {
            start_row -= 1;
          }
          newPath.push(`${start_row}-${start_col}`);
        } else {
          if (start_col < goal_col) {
            start_col += 1;
          } else if (start_col > goal_col) {
            start_col -= 1;
          }
          newPath.push(`${start_row}-${start_col}`);
        }
      }
      setPath(newPath);
    } else {
      alert(
        "please define a start & a goal node before computing a path between"
      );
    }
  }, []);

  const checkOnDrag = useCallback(
    (event) => {
      if (draw === "obstacle") {
        setObstacles((old) => [...old, event.target.childNodes[0].nodeValue]);
      }
    },
    [draw]
  );
  const check = useCallback(
    (event) => {
      switch (draw) {
        case "start":
          setStart((old) => ({
            ...old,
            position: event.target.childNodes[0].nodeValue,
          }));
          break;
        case "goal":
          setGoal((old) => ({
            ...old,
            position: event.target.childNodes[0].nodeValue,
          }));

          break;
        case "obstacle":
          setObstacles((old) => [...old, event.target.childNodes[0].nodeValue]);

          break;
        default:
          alert("please chose a node, you want to draw");
      }
    },
    [draw]
  );

  return (
    <>
      <div class='d-flex justify-content-around'>
        <InputField value={rows} handleClick={setRows} />
        <InputField value={cols} handleClick={setCols} />
      </div>
      <pre className='text-white'>{JSON.stringify(field)}</pre>
      <p>draw : {draw}</p>

      <NodeDisplay
        handleClick={setDraw}
        color='yellow'
        state={start}
        nodeName='start'
      ></NodeDisplay>

      <NodeDisplay
        stringifySpace={0}
        handleClick={setDraw}
        color='blue'
        state={obstacles}
        nodeName='obstacle'
      ></NodeDisplay>

      <NodeDisplay
        handleClick={setDraw}
        color='green'
        state={goal}
        nodeName='goal'
      ></NodeDisplay>

      <button
        onClick={() => setObstacles([])}
        type='button'
        className='btn btn-secondary mb-3 mr-3'
      >
        clear obstacles
      </button>

      <button
        onClick={() => computeAPath(start, goal)}
        type='button'
        className='btn btn-primary mb-3'
      >
        compute path
      </button>
      {field.map((row) => {
        return (
          <div className='m-0 p-0 d-flex'>
            {row.map((col) => {
              return (
                <div
                  draggable={true}
                  onClick={(event) => check(event)}
                  onDragEnter={(event) => checkOnDrag(event)}
                  onDragStart={(event) => checkOnDrag(event)}
                  className={`d-inline-block border ${
                    col === start.position
                      ? "bg-warning"
                      : col === goal.position
                      ? "bg-success"
                      : obstacles.includes(col)
                      ? "bg-primary"
                      : path.includes(col)
                      ? "bg-dark"
                      : "bg-danger"
                  }`}
                  style={{
                    color: "transparent",
                    paddingLeft: "1px",
                    fontSize: "10px",
                    height: "25px",
                    width: "25px",
                  }}
                >
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

function NodeDisplay({
  handleClick,
  color,
  state,
  nodeName,
  stringifySpace = 2,
}) {
  return (
    <div className='d-flex align-items-center'>
      <div
        onClick={() => handleClick(nodeName)}
        className='d-inline-block border'
        style={{
          cursor: "pointer",
          height: "30px",
          width: "30px",
          background: color,
        }}
      ></div>
      <p className='mx-5'>{nodeName} node</p>
      <pre className='text-white'>
        {JSON.stringify(state, null, stringifySpace)}
      </pre>
    </div>
  );
}

function InputField({ value, handleClick }) {
  return (
    <>
      <div className='input-group my-3 ' style={{ width: "10rem" }}>
        <span className='input-group-text' id='basic-addon1'>
          rows
        </span>
        <input
          value={value}
          type='number'
          onChange={(event) => handleClick(Number(event.target.value))}
          className='form-control'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
        />
      </div>
    </>
  );
}

export default DynamicSearch;
