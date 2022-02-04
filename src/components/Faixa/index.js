import React from "react";
import Container from "./styled";
import img1 from "./../Imagens/faixa-marcas/logo1.png";
import img2 from "./../Imagens/faixa-marcas/logo2.png";
import img3 from "./../Imagens/faixa-marcas/logo3.png";
import img4 from "./../Imagens/faixa-marcas/logo4.png";
import img5 from "./../Imagens/faixa-marcas/logo5.png";
import img6 from "./../Imagens/faixa-marcas/logo6.png";
import img7 from "./../Imagens/faixa-marcas/logo7.png";
import ImgTag from "./../ImgTag"

function index() {
  return (
    <Container>
      <ImgTag src={img1} alt="albras"/>
      <ImgTag src={img2} alt="albras"/>
      <ImgTag src={img3} alt="albras"/>
      <ImgTag src={img4} alt="albras"/>
      <ImgTag src={img5} alt="albras"/>
      <ImgTag src={img6} alt="albras"/>
      <ImgTag src={img7} alt="albras"/>
    </Container>
  );
}

export default index;