import React from "react";
import {Container,ContentBox} from "./styled";
import BoxRelatos  from "../BoxRelatos"
import Person1 from "./../Imagens/clientes/Person1.png";
import Person2 from "./../Imagens/clientes/Person2.png";
import Person3 from "./../Imagens/clientes/Person3.png";

function index() {
  return (
    <Container>
        <h3>Relatos dos clientes:</h3>

        <ContentBox>
          <BoxRelatos src={Person1} alt="Cliente 1"  name="Viezh Robert"  city="Warsaw, Poland" 
          points="4.5" text="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."/>
          <BoxRelatos src={Person2} alt="Cliente 2"  name="Yessica Christy"  city="Shanxi, China" 
          points="4.5" text="“I like it because I like to travel far and still can connect with high speed.”."/>
          <BoxRelatos src={Person3} alt="Cliente 3"  name="Kim Young Jou"  city="Seoul, South Korea" 
          points="4.5" text="“This is very unusual for my business that currently requires a virtual private network that has high security.”."/>
        </ContentBox>
    </Container>
  );
}

export default index;