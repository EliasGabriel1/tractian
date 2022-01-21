import React from "react";
import {Container,ContentManutencao} from "./styled";
import Block1 from "./Block1"
import Block2 from "./Block2"

function index() {
  return (
      <Container>
        <ContentManutencao>
            <Block1/>
            <Block2/>
        </ContentManutencao>
      </Container>
  );
}

export default index;