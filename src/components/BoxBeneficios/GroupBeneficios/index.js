import React from 'react';
import {Box,LetterBig} from "./styled";

function index(props) {
  return (
    <Box>
              <p>
        <LetterBig>
        {props.porcent}
        </LetterBig>
        {props.text}
        </p>
    </Box>
  );
}

export default index;