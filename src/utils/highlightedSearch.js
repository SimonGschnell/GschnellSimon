let highlightedSearch = (name, search, color) => {
  let searchCheck = search.toLocaleLowerCase();

  function highlightCheck(s, i, name) {
    s = s.toLocaleLowerCase();

    if (searchCheck.length > 1) {
      for (let x = 0; x < searchCheck.length; x++) {
        if (
          searchCheck.charAt(x).toLowerCase() !==
          name.charAt(i + x).toLocaleLowerCase()
        ) {
          return false;
        }
      }
    }

    if (searchCheck.charAt(0) === s) {
      searchCheck = searchCheck.replace(s, "");
      return true;
    }
    return false;
  }

  return [...name].map((s, i) => (
    <span
      key={i}
      style={highlightCheck(s, i, name) ? { background: color } : {}}
    >
      {s}
    </span>
  ));
};

export default highlightedSearch;
