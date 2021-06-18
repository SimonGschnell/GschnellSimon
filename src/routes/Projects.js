import projects from "../json/proj.json";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import Input from "../components/UI/input";
import { useLocaleStorageState } from "../hooks/customHooks";
import highlight from "../utils/highlightedSearch";
import { useEffect } from "react";

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
    .map(({ name, size, id }) => {
      return (
        <div className='m-3' key={id}>
          <h1>
            Project:{" "}
            <Link className='text-warning' to={`${url}/${id}`}>
              {highlight(name, search, "grey")}
            </Link>
          </h1>
          <p>size: {size}</p>
        </div>
      );
    });
  return (
    <>
      <Input value={search} prepend={searchSVG} onChange={handleSearch} />
      {filteredItems}
    </>
  );
};

export default Projects;
