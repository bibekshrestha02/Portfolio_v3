import React, { useState } from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
export default function MyTextInput({ label, value, name, submitHandler }) {
  const [colorValue, setValue] = useState(value);
  const colors = useSelector((state) => state.colors);
  return (
    <div className={style.myColorInputContainer} style={{ color: colors.text }}>
      {label && <span>{label}</span>}
      <div>
        <input
          style={{ borderColor: 'gray' }}
          type='color'
          value={colorValue}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => submitHandler(name, colorValue)}>Change</button>
      </div>
    </div>
  );
}
