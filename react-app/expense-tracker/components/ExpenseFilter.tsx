import React from "react";
import categories from "../categories";
interface Props {
  onFilter: (cat: String) => void;
}
const ExpenseFilter = ({ onFilter }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onFilter(event.target.value)}
      >
        <option value="">all categories</option>
        {categories.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpenseFilter;
