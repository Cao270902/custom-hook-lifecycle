import { useState } from "react";
import useDidMount from "../hooks/useDidMount";
import useUnmount from "../hooks/useUnmount";
import useFirstMountState from "../hooks/useFirstMountState";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useDidMount(() => {
    console.log("Component đã mount");
  });

  useUnmount(() => {
    console.log("Component sắp bị unmount");
  });

  const isFirstMount = useFirstMountState();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {isFirstMount && <p>Đây là lần render đầu tiên của component!</p>}
    </div>
  );
};

export default MyComponent;
