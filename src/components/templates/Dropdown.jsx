import React from 'react'

const Dropdown = ({title,options,func}) => {
  return (
    <div className="select">
      <select defaultValue="0" name="format" id="format" onChange={func}>
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option value={o} key={i}>
            {o.toUpperCase()}
          </option>

          // This line dynamically maps through each item in the options array and generates an <option> element for it.
        ))}
      </select>
    </div>
  );
}

export default Dropdown