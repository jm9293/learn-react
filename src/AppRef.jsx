import { useRef } from 'react';

export default function AppRef() {
  const countRef = useRef(0);
  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
  };
  return (
    <>
      <h2>Count</h2>
      <button onClick={handleClick}>Count</button>
    </>
  );
}
