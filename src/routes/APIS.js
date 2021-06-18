import Dropdown from "../components/UI/dropdown/dropdown";
import CustomDropdownHeader from "../components/UI/dropdown/customDropdown";
import { useRouteMatch, useHistory } from "react-router-dom";
import apiRoutes from "../json/apiRoutes.json";
import { lazy, Suspense, memo, useState, useCallback, useMemo } from "react";
import { useLocaleStorageState } from "../hooks/customHooks";
import DynamicComponent from "../utils/dynamicCompRender";

const NumbersApi = lazy(() => import("./APIS/NumbersApi"));
const OpenDataHub = lazy(() => import("./APIS/OpenDataHub"));

const setObjEntriesFalse = (obj) => {
  let newObj = {};
  for (const [key, enty] of Object.entries(obj)) {
    newObj[key] = false;
  }
  return newObj;
};

let APIS = memo((props) => {
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const componentMapping = useMemo(
    () => ({
      NumbersApi,
      OpenDataHub,
    }),
    []
  );

  const initShowState = useCallback(() => {
    let res = {};
    for (const key of Object.keys(componentMapping)) {
      if (key == "NumbersApi") {
        res[key] = true;
      } else {
        res[key] = false;
      }
    }
    return res;
  }, [componentMapping]);

  let [apiSearch, setApiSearch] = useState("");
  let [showState, setShowState] = useLocaleStorageState(
    "api",
    initShowState,
    true
  );

  let handleApiSearch = (event) => {
    setApiSearch(event.target.value);
  };

  const changeRoute = (route) => {
    setShowState((old) => {
      return {
        ...setObjEntriesFalse(old),

        [route]: true,
      };
    });
  };

  return (
    <>
      <h1>some API's</h1>
      <Dropdown
        routes={apiRoutes}
        title="api's"
        menu={{
          as: CustomDropdownHeader,
          search: apiSearch,
          handle: handleApiSearch,
        }}
        itemHandler={changeRoute}
      />
      {JSON.stringify(showState, null, 2)}
      <Suspense fallback={<h1>loading..</h1>}>
        {apiRoutes.map((route) => {
          return showState[route] ? (
            <DynamicComponent
              key={route}
              list={componentMapping}
              selected={route}
            />
          ) : (
            ""
          );
        })}
      </Suspense>
    </>
  );
});

export default APIS;
