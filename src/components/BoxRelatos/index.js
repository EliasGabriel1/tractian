import React from "react";
import {Box, Person, HeaderBox, Text,ContentStar} from "./styled";
import Star from "../Star"

function index(props) {
  return (
    <Box>
        <HeaderBox>
            <Person>
              <img src={props.src} alt={props.alt}/>
              <div>
                <h4>{props.name}</h4>
                <h5>{props.city}</h5>
              </div>
            </Person>
            <ContentStar>
              <span>{props.points}</span>
              <Star/>
            </ContentStar>
        </HeaderBox>
        <Text>
          {props.text}
        </Text>
    </Box>
  );
}

export default index;