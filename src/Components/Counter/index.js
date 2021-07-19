import { React, useState } from 'react';
import './style.scss';

function Counter() {
  const [count, setCount] = useState(0);

  return <div className="counter">
      <div className="counter-container">
        {/* if count is divisible by 2 (even), the number is black; otherwise, it is gray */}
        <p className={count % 2 === 0 ? 'black' : 'gray'}>
          {count}
        </p>
        <button onClick={() => {
          setCount(count + 1)
        }}>
          Up
        </button>
      </div>
    </div>
}

export default Counter;