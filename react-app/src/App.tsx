import { useState } from "react";
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
  return (
    <div>
      <Form />
    </div>
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
