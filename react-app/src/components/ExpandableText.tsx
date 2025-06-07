import React, { useState } from "react";
interface ExpandableTextProps {
  children: String;
  maxChars?: number;
}
function ExpandableText({ children, maxChars = 100 }: ExpandableTextProps) {
  const [expand, setExpand] = useState(false);
  console.log(children.length);
  if (children.length <= maxChars) return <div>{children}</div>;
  else {
    return (
      <div>
        {expand ? children.substring(0, maxChars) : children}{" "}
        <button
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "show more" : "show less"}
        </button>
      </div>
    );
  }
}
export default ExpandableText;
