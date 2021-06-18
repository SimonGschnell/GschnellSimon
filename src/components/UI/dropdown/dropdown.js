import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import highlight from "../../../utils/highlightedSearch";

let Drop = (props) => {
  let color = "yellow";

  return (
    <Dropdown size='lg' className={props.display ?? ""}>
      <Dropdown.Toggle id='dropdown-custom-components'>
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu {...props.menu}>
        {props.routes.map((route) => {
          return (
            <Dropdown.Item
              onClick={() => props.itemHandler(route)}
              value={route}
              key={route}
            >
              {props.menu ? highlight(route, props.menu.search, color) : route}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Drop;
