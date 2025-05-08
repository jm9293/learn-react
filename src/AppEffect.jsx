import { useEffect, useState } from 'react';

function Courses() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');

  // const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`data/courses_${filter}.json`)
      .then(res => res.json())
      .then(data => {
        console.log('✅ 데이터 조회 성공 ');
        setList(data);
      });
  }, [filter]);

  return (
    <>
      <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === 'all'}
        onChange={e => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === 'favorite'}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default function AppEffect() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      <hr />
      {show && <Courses />}
    </>
  );
}
