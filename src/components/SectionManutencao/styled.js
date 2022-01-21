import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "68em",
    mobile: "46em"
  });


export const Container = styled.div`
    max-width:1300px;
    margin:0 auto;
`;

export const ContentManutencao = styled.div`
    height:800px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:100px;
    ${customMedia.lessThan("tablet")`
        height: auto;
        gap: 20px;
        flex-direction:column;
    `};
`;
