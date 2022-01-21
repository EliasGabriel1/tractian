import React from 'react';
import {TrustSystem,TracoTrusSystem,GrupoTextoBeneficios} from "./styled";
import BoxBeneficios from "../BoxBeneficios";

function index() {
  return (
    <TrustSystem>
        <GrupoTextoBeneficios>
          <h2>A confiança do nosso <br/> sistema</h2>
          <TracoTrusSystem/>
          <p>Suas máquinas mais seguras.</p>
        </GrupoTextoBeneficios>
        <BoxBeneficios/>
    </TrustSystem>
  );
}

export default index;