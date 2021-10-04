import { useCounter } from "../../Providers/Counter";
import { useName } from "../../Providers/Name";

const Display = () => {
  const { counter } = useCounter();
  const { name } = useName();
  return (
    <>
      <div>{counter}</div>
      <div>{name}</div>
    </>
  );
};

export default Display;
