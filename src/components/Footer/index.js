import React from 'react'
import {Rodape} from "./styled"
import FormFooter from '../FormFooter';
import ContentFooter from '../ContentFooter';


function Footer() {
  return (
    <Rodape>
        <FormFooter/>
        <ContentFooter/>
    </Rodape>
  );
}

export default Footer;