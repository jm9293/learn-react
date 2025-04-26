// 일반적으로 사용
// 함수표현식
// 바로 export default 가능
import {useState} from "react";

export default function Counter({addTotalCount}) {
  const [counter, setCounter] = useState(0)

  function handleCounter() {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    if (addTotalCount) {
      addTotalCount(1)
    }
  }
  // 상태, 로직
  return (
    <button onClick={handleCounter}>Counter : {counter}</button>
  )
}

// 상태가 없고 UI만 표시할 때 단축형으로 쓰면 좋음
// 함수선언식
// 바로 export default 불가능
// export만 가능

// export const Counter = () => (
//   <button>Counter</button>
// )
//
// export default Counter

