import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

export const Rodape = styled.footer`
  background: rgb(29,74,201);
  background: linear-gradient(360deg, rgba(29,74,201,1) 75%, rgba(255,255,255,1) 75%);
  color:#000;
  text-align:center;
  padding-bottom: 60px;
    ${customMedia.lessThan("mobile")`
        padding: 0 20px 10px 20px;
    `};
`;