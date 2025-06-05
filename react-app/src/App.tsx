import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import "./App.css";
function App() {
  const [showingState, onShowingState] = useState(false);
  let items = ["aa", "dd", "bb"];
  const handleSelectItem = (items: String) => {
    console.log(items, "from app component");
  };
  return (
    <div>
      {showingState && (
        <Alert
          onClose={function (): void {
            onShowingState(!showingState);
          }}
        >
          helleo <span>world</span>
        </Alert>
      )}
      <Button
        text={"click me"}
        color={"secondary"}
        onClick={function (i): void {
          console.log("clicked", i);
          onShowingState(!showingState);
        }}
      />

      <ListGroup
        items={items}
        heading="names"
        onSelectItem={function (item: String): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
export default App;
