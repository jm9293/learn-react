import Counter from './Counter';
import { useState } from 'react';

export default function Main() {
  const [totalCount, setTotalCount] = useState(0);
  const [flag, setFlag] = useState(true);

  function addTotalCount(count) {
    setTotalCount(totalCount + count);
  }

  return (
    <main>
      <h2>totalCount : {totalCount}</h2>
      <h2>flag : {flag.toString()}</h2>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Toggle Flag
      </button>
      <hr />
      <Counter addTotalCount={addTotalCount} />
      <hr />
      <Counter addTotalCount={addTotalCount} />
      <hr />
      <Counter />
    </main>
  );
}
