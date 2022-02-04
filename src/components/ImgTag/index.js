import React from "react";

function App(props) {
  return (
    <figure>
        <img src={props.src} width="100%" alt={props.alt}/>
    </figure>
  );
}

export default App;