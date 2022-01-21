import React from "react";
import {Box,Text} from "./styled";

function index(props) {
  return (
      <Box>
          <img src={props.src} alt={props.alt}/>
          <Text>{props.text}</Text>
      </Box>
  );
}

export default index;