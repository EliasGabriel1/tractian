import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

export const Rodape = styled.footer`
  color:#000;
  text-align:center;
    ${customMedia.lessThan("mobile")`
        padding-bottom: 5px;
    `};
    p{
        width:100vw;
        display:flex;
        justify-content:center;
    }

`;