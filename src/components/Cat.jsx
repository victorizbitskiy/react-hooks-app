import React from "react";
import { memo } from "react";

const Cat = memo(({ name, meow = f => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
}, () => true);

export default Cat;
