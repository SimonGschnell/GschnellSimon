import CvTable from "../components/cvTable/cvTable";
import cv from "../cv.json";

let About = () => {
  return (
    <>
      <h1 className='font-italic'>Curriculum vitae</h1>
      <CvTable data={cv}></CvTable>
    </>
  );
};

export default About;
