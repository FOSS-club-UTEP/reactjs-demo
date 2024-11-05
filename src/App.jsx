import { useState } from "react";
import "./App.css";
import Item from "./Item";

function App() {
	const [firstItemCount, setFirstItemCount] = useState(0);
	const [secondItemCount, setSecondItemCount] = useState(0);
	const [thirdItemCount, setThirdItemCount] = useState(0);

  const firstItem = {
    name: "Banana",
    price: 2,
    count: firstItemCount,
    setCount: setFirstItemCount,
  };
  const secondItem = {
    name: "Milk",
    price: 1,
    count: secondItemCount,
    setCount: setSecondItemCount,
  };
  const thirdItem = {
    name: "Used Monitor",
    price: 82.3,
    count: thirdItemCount,
    setCount: setThirdItemCount,
  };

  const items = [firstItem, secondItem, thirdItem]

  const total = items.reduce((acc, item) => acc + item.price * item.count, 0)

	return (
		<>
			<h1>Shopping cart!</h1>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
      <br />
      <p>Total: ${total}</p>
		</>
	);
}

export default App;
