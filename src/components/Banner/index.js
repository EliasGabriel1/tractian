import React from 'react'
import {Container,Banner} from "./styled"
import Button2 from "../Button2"
import image from "../Imagens/SVGBANNER.svg";

function index() {
  return (
    <Container>
      <Banner style={{backgroundImage: `url(${image})`}}>
          <div>
              <div>
                  <h1>Monitoramento Online e Gestão de Ativos em um só lugar.</h1>
                  <h5>Reduza todos problemas com manutenção corretiva com um <br/> sisitema preditivo TRACTIAN.</h5>
              </div>
          <Button2 text="Demonstração"/>
          </div>
      </Banner>
    </Container>
  );
}

export default index;