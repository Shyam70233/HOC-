import React, { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <C1 />
      <C2 />
      <C3 />
    </div>
  );
}

function C1() {
  const [x, setx] = useState(0);
  return <h1 onClick={() => setx(x + 1)}>counter : {x}</h1>;
}
function C2() {
  const [y, sety] = useState(0);
  return <h1 onMouseOver={() => sety(y + 1)}>counter : {y}</h1>;
}
function C3() {
  const [z, setz] = useState(0);
  return <h1 onDoubleClick={() => setz(z + 1)}>counter : {z}</h1>;
}
