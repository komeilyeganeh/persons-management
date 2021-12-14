import React from "react";

const Person = ({ fullname, deleted, changed }) => {
  const divStyle = {
    width: "300px",
    padding: "1rem",
    borderRadius: "10px",
    backgroundColor: "rgb(203, 234, 228)",
    margin: "1rem auto",
  };
  const inputStyle = {
    padding: "3px 5px 3px 0",
    outLine: "none",
    borderRadius: "8px",
    border: "none",
    border: "1px solid #999",
    margin: "0.8rem 0",
  };
  const btnStyle = {
    margin: "0 0.5rem",
    padding: "0.2rem 0.8rem",
    cursor: "pointer",
    border: "none",
    backgroundColor: "rgb(143, 176, 170)",
    color: "#fff",
  };
  return (
    <div style={divStyle}>
      <p>{`${fullname}`}</p>
      <input type="text" value={fullname} style={inputStyle} onChange={changed}/>
      <br />
      <button style={btnStyle} onClick={deleted}>حذف</button>
    </div>
  );
};

export default Person;
