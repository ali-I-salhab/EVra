import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import "./App.css";
import LikeButton from "./components/LikeButton";
import ExpandableText from "./components/ExpandableText";
import Object from "./components/Object";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import ExpenseFilter from "./../expense-tracker/components/ExpenseFilter";
import ExpenseList from "./../expense-tracker/components/ExpenseList";
import ExpenseForm from "./../expense-tracker/components/ExpenseForm";
import axios from "axios";
import TestData from "./../Backend-services/TestData";
import ProductList from "../Backend-services/ProductList";

function App() {
  const [showingState, onShowingState] = useState(false);
  const [cartItems, setCartItems] = useState(["product1 ", "product2"]);
  let items = ["aa", "dd", "bb"];
  const handleSelectItem = (items: String) => {
    console.log(items, "from app component");
  };
  const handleAddItem = () => {
    const a = [...cartItems, `product${cartItems.length + 1}`];
    setCartItems(a);
  };
  const [expenses, setExpenses] = useState([
    { id: 1, description: "all description ", amount: 23, category: "tar" },
    { id: 2, description: "all description ", amount: 2, category: "lat" },
    { id: 3, description: "all description ", amount: 3, category: "hom" },
    { id: 4, description: "all description ", amount: 3, category: "dam" },
  ]);
  const [selectedCategory, SetSelectedCategory] = useState("");
  const visiblesxpense = selectedCategory
    ? expenses.filter((e) => {
        return e.category === selectedCategory;
      })
    : expenses;
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [users, Setusers] = useState<User[]>([]);
  interface User {
    id: number;
    name: String;
  }
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        Setusers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);
  return (
    <>
      {error || (
        <ul className="list-group">
          {users.map((user) => {
            return (
              <li
                key={user.id}
                className="list-group-item list-group-item-primary"
              >
                {user.name} {user.id}
                <button className="btn btn-outline-danger mx-3 my-2">
                  {" "}
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {/* <select
        name=""
        id=""
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="ali">ali</option>
        <option value="salhab">salhab</option>
      </select>{" "}
      <ProductList category={category} /> */}
    </>
    // <div>
    //   <ExpenseForm
    //     onSubmit={(data) => {
    //       console.log(data);
    //       // console.log("---------------");

    //       setExpenses([{ ...data, id: expenses.length + 1 }, ...expenses]);
    //     }}
    //   />
    //   <div className="mb-3">
    //     <ExpenseFilter
    //       onFilter={function (cat: String): void {
    //         SetSelectedCategory(cat.toString());
    //       }}
    //     />
    //   </div>
    //   <ExpenseList
    //     expenses={visiblesxpense}
    //     onDelete={function (id: number): void {
    //       console.log(id);
    //       setExpenses(expenses.filter((e) => e.id != id));
    //     }}
    //   />
    // </div>
    // <div>
    //   <NavBar cartItemsCount={cartItems.length} />
    //   <Cart cartItems={cartItems} />
    //   <button onClick={handleAddItem} className="btn btn-primary">
    //     add
    //   </button>
    //   <button
    //     onClick={() => {
    //       setCartItems([]);
    //     }}
    //     className="btn btn-primary mr-3 my-2"
    //   >
    //     clear
    //   </button>
    // </div>
    //   <div>
    //     <div>
    //       <Object />
    //     </div>
    //     <ExpandableText>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fuga
    //       voluptatum ipsam, soluta perferendis distinctio beatae cupiditate
    //       placeat expedita amet magnam ab reiciendis animi aliquam quae,
    //       consequatur impedit possimus nesciunt.
    //     </ExpandableText>
    //     {showingState && (
    //       <Alert
    //         onClose={function (): void {
    //           onShowingState(!showingState);
    //         }}
    //       >
    //         helleo <span>world</span>
    //       </Alert>
    //     )}{" "}
    //     <LikeButton
    //       onClick={function (): void {
    //         console.log("clicked");
    //       }}
    //     />
    //     <Button
    //       text={"click me"}
    //       color={"secondary"}
    //       onClick={function (i): void {
    //         console.log("clicked", i);
    //         onShowingState(!showingState);
    //       }}
    //     />
    //     <ListGroup
    //       items={items}
    //       heading="names"
    //       onSelectItem={function (item: String): void {
    //         throw new Error("Function not implemented.");
    //       }}
    //     />
    //   </div>
  );
}
export default App;
