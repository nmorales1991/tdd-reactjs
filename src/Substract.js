// eslint-disable-next-line react/prop-types
function Substract({ count, setCount }) {
  return (
    <button type="button" onClick={() => setCount(count - 1)}>SUBSTRACT</button>
  );
}

export default Substract;
