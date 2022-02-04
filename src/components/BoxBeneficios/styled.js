import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1250px;
    margin: 0 auto;
    min-height: 500px;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
`;

export const ContentBeneficios = styled.div`
    display:flex;
    justify: space-around;
    ${customMedia.lessThan("mobile")`
        flex-direction:column;
    `};
`;

export const BoxContent = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 20px;
    p{
        text-align: unset;
    }
    svg{
        margin-right: 20px;
        width: 100px;
        height: 70px;
    }
`;

export const TracoHr = styled.hr`
    background:#00000095;
`;