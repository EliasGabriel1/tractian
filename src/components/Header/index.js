import React from 'react';
import ContentHeader from "./styled";
import image from "../Imagens/image1.svg";
import Menu from "../Menu";
import Banner from "../Banner";

function index() {
  return (
    <ContentHeader style={{backgroundImage: `url(${image})`,backgroundSize: "248px 186px"}}>
      <Menu/>
      <Banner/>
    </ContentHeader>
  );
}

export default index;