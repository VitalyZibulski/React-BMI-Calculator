import React, {useState} from 'react';

export default function Slider({min, max, value, title, onChange}) {
  return <div>
    <span>
      <label>
        <b>{title}</b><br/>
        <input type="range"
               min={min}
               max={max}
               value={value}
               onChange={e => onChange(parseInt(e.target.value))}
               style={{width: "15rem"}}
        />
        {" "}
        {value}
      </label>
    </span>
  </div>
}