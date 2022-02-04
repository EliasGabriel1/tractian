import React from 'react';
import {Content, Input, Label} from "./styled";


function index(props) {
  return (
      <Content>
        <Label>{props.input}:</Label>
        <Input type={props.type}id={props.input} name={props.input} placeholder={props.placeholder} />
      </Content>
  );
}

export default index;