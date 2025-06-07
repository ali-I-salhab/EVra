import React from "react";

interface Expense {
  id: number;
  amount: number;
  category: string;
  description: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>description</th>
            <th>amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.description}</td>
                <td>{e.amount}</td>
                <td>{e.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(e.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            {" "}
            <td>Total</td>
            <td>
              {expenses.reduce((acc, e) => {
                return (acc += e.amount);
              }, 0)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
