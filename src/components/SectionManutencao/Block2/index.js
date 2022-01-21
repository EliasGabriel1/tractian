import React from "react";
import {Block2,Box1,Box2,Box3} from "./styled";
import BoxBlock from "./BoxBlock";
import image1 from "../../Imagens/industry.svg";
import image2 from "../../Imagens/plataform.svg";
import image3 from "../../Imagens/interface.svg";

function index() {
  return (
      <Block2>
        <Box1>
          <BoxBlock src={image1} alt="industry" text="Tecnologia IoT avançada para conectar seus ativos"/>
        </Box1> 

        <Box2>
          <BoxBlock src={image2} alt="plataform" text="Plataforma que trabalha por você"/>
        </Box2>
        
        <Box3>
          <BoxBlock src={image3} alt="interface" text="O Software de manutenção dos seus sonhos"/>
        </Box3> 
      </Block2>
  );
}

export default index;