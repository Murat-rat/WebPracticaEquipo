import React from 'react'

const StylesButtonPrimary = {
  backgroundColor: "#3e8db1",
  border: "none",
  borderRadius: "5px",
  widthMinimum: "10px",
  height: "30px",
  margin: "10px",
  color: "white",
}

const StylesButtonSecondary = {
  backgroundColor: "#6452ca",
  border: "none",
  borderRadius: "5px",
  widthMinimum: "10px",
  height: "30px",
  margin: "10px",
  color: "rgb(69, 69, 69)",
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
           {...StylesButtonSecondary,
            backgroundColor: "#d8d6d8",
            cursor: "pointer",
           }
        }

      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button