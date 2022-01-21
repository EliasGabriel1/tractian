import React from 'react';
import {Box,TitleBox,Text} from "./styled";

function index(props) {
  return (
    <Box>
        <img src={props.src} alt={props.alt}/>
        <TitleBox>{props.title}</TitleBox>
        <Text>{props.text}</Text>
    </Box>
  );
}

export default index;