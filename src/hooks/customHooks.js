import { useState, useEffect } from "react";

let useLocaleStorageState = (key, initValue, isObj) => {
  let [search, setSearch] = useState(
    isObj
      ? JSON.parse(localStorage.getItem(key)) || initValue
      : localStorage.getItem(key) || initValue
  );
  useEffect(() => {
    localStorage.setItem(key, isObj ? JSON.stringify(search) : search);
  }, [search, key, isObj]);
  return [search, setSearch];
};

export { useLocaleStorageState };
