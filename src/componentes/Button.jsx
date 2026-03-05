import React from 'react'

const StylesButtonPrimary = {
  backgroundColor: "#3e8db1",
  border: "none",
  borderRadius: "5px",
  widthMinimum: "10px",
  height: "40px",
  margin: "10px",
  color: "white",
  cursor: "pointer",
  padding: "0 15px"
}

const StylesButtonSecondary = {
  backgroundColor: "#d8d6d8",
  border: "none",
  borderRadius: "5px",
  widthMinimum: "10px",
  height: "40px",
  margin: "10px",
  color: "rgb(69, 69, 69)",
  cursor: "pointer"
}


function Button({
  type = "primary", 
  text = "Not defined", 
  action = () => alert("NO ACTION DEFINED")}
) {
  
  return (
    <button
        style={
          type === "primary" ?
           StylesButtonPrimary :
           StylesButtonSecondary
        }

      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button