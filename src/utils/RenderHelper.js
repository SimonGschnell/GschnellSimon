import { useRef, useEffect } from "react";

const RenderHelper = ({ name }) => {
  const value = useRef(0);
  useEffect(() => {
    value.current += 1;
    console.log(name + ", has been redered " + value.current + " times!");
  });

  return <div></div>;
};

export default RenderHelper;
