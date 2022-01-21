import React from "react";
import {Container,Title,Strong,ContentWhy,Center} from "./styled";
import BoxWhy from "../BoxWhy";
import Button from "../Button1";

import image1 from "../Imagens/icon-maintence-plataform.svg";
import image2 from "../Imagens/icon-maintence-online.svg";
import image3 from "../Imagens/icon-maintence-pump.svg";
import image4 from "../Imagens/icon-maintence-horimeter.svg";

function index() {
  return (
      <Container>
        <Title>Por que escolher a <Strong>Tractian?</Strong></Title>
        <ContentWhy>
            <BoxWhy src={image1} alt="imagem1" title="Manutenção Preditiva" text="Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos."/>
            <BoxWhy src={image2} alt="imagem2" title="Monitoramento Online" text="Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real."/>
            <BoxWhy src={image3} alt="imagem3" title="Setup Instantâneo" text="Solução Plug & Play, sem necessidade de WiFi industrial, comunicação via 3G/4G independente."/>
            <BoxWhy src={image4} alt="imagem4" title="CMMS Integrado" text="Automatize processos, ordens de serviço e tenha total controle sobre seus ativos e equipe."/>
        </ContentWhy>
        <Center><Button text="Agendar uma demonstração"/></Center>
      </Container>
  );
}

export default index;