import React from "react";
import {Title,Text,Strong,Division} from "./styled";
import Button from "../../Button2"

function index() {
  return (
      <Division>
          <Title>MANUTENÇÃO PREDITIVA <br/>DESCOMPLICADA</Title>
          <Text>Mantenha a sua equipe e seus <br/>ativos com o <Strong>melhor desempenho.</Strong></Text>
            <Button text="Agendar uma demonstração"/>
      </Division>
  );
}

export default index;