import { useCounter } from "../../Providers/Counter";
import { useName } from "../../Providers/Name";

const Counter = () => {
  const { counter, setCounter } = useCounter();
  const {setName} = useName();
  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={(e) => setCounter(counter + 1)}>Add +</button>
      <button onClick={(e) => setCounter(counter - 1)}>Sub -</button>
    </>
  );
};

export default Counter;
