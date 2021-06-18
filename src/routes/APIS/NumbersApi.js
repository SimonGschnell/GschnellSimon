import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useContext,
} from "react";
import Form from "react-bootstrap/Form";
import RenderComp from "../../utils/RenderHelper";
import { useLocaleStorageState } from "../../hooks/customHooks";
import Dropdown from "../../components/UI/dropdown/dropdown";
import ToastContext from "../../contexts/ToastContext";

const axios = require("axios");

const NumbersApi = memo((props) => {
  const { toastContent, setToastContent } = useContext(ToastContext);

  let rangeRef = useRef();

  function handleChange(event) {
    setRange(event.target.value);
  }

  const [type, setType] = useState("trivia");

  const [text, setText] = useState(
    localStorage.getItem("numbersApiRange") || ""
  );
  const [range, setRange] = useLocaleStorageState("numbersApiRange", 0, false);
  const [rangeCh, setRangeCh] = useState(range);
  useLayoutEffect(() => {
    rangeRef.current.value = range;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const apiRequest = useCallback(() => {
    axios({
      method: "get",
      url: `http://numbersapi.com/${range}/${type}`,
    })
      .then((res) => {
        setText(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [range, type]);

  useEffect(() => {
    apiRequest();
  }, [apiRequest]);
  return (
    <>
      <RenderComp name='numberApi'></RenderComp>
      <h1 className='mt-5 text-monospace font-italic'>{text}</h1>
      <Form.Group controlId='formBasicRange'>
        <Form.Label style={{ fontSize: "1.2rem" }} className='text-warning'>
          {rangeCh}
        </Form.Label>
        <Form.Control
          variant='warning'
          ref={rangeRef}
          type='range'
          onChange={(event) => {
            setRangeCh(event.target.value);
          }}
          onMouseUp={handleChange}
        />
      </Form.Group>
      <div className='d-flex align-items-center'>
        <h2 className='my-4 mr-4'>Category :</h2>
        <Dropdown
          title={type}
          routes={["trivia", "math", "year"]}
          itemHandler={setType}
        />
        <button
          onClick={() =>
            setToastContent([
              "this is",
              JSON.stringify({ test: "uno", foobar: "foo" }, null, 2),
            ])
          }
        >
          Change Toast
        </button>
      </div>
    </>
  );
});

export default NumbersApi;
