import React from "react";

const SlideTwo = props => {
  let background = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1529047124961-9654f1f5df5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=685470eb896cc31d912ac0d8ebbf757d&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <div style={background} className="slide two">
      {" "}
    </div>
  );
};

export default SlideTwo;
