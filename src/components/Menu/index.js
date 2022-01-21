import React from 'react'
import {ContentMenu,GroupButton,GroupDivision} from "./styled"
import Logo from "../Logo"
import Button1 from "../Button1"


function index() {
  return (
    <ContentMenu>
      <GroupDivision>
      <Logo/>
        <nav>
          <ul>
            <li><a  href="/some/valid/uri" rel="nofollow" >Solução</a></li>
            <li><a  href="/some/valid/uri" rel="nofollow">Sobre nós</a></li>
            <li><a  href="/some/valid/uri" rel="nofollow">Matérial</a></li>
            <li><a  href="/some/valid/uri" rel="nofollow">Blog</a></li>
          </ul>
        </nav>
      </GroupDivision>
      <GroupButton>
        <a  href="/some/valid/uri" rel="nofollow">Área do Cliente</a>
        <Button1 text="Demonstração"/>
      </GroupButton>
    </ContentMenu>
  );
}

export default index;