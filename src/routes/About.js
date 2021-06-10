import CvTable from "../components/cvTable/cvTable";
import cv from "../cv.json";

let About = () => {
  return (
    <>
      <CvTable data={cv}></CvTable>
    </>
  );
};

export default About;
