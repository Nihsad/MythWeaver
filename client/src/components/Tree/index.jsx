import React from "react";
import { render } from "react-dom";
import Tree from "./Tree";
import data from "./data";

const App = () => {
  return (
    <div>
      <h2>My Tree Component Test</h2>
      <Tree data={data} width={600} height={500} />
    </div>
  );
};

render(<App />, document.getElementById("root"));


export default Tree;
