import React, { useEffect, useRef } from "react";

import ProductList from "./ProductList";
const TestData = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      {/* <input ref={ref} type="text" className="form-control mb-3" />
      <input type="text" className="form-control" /> */}
      {/* <ProductList /> */}
    </div>
  );
};

export default TestData;
