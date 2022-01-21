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

export const ContentWhy = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:100px;
    ${customMedia.lessThan("tablet")`
        gap: 50px;
        display: grid;
        margin: 0 7vw 100px 7vw;
        grid-template-columns: 1fr 1fr;
    `};
    ${customMedia.lessThan("mobile")`
        display:flex;
        align-items: center;
        gap: 40px;
        flex-direction:column;
    `};
`;

export const Title = styled.h4`
    font-weight: normal;
    font-size: 42px;
    line-height: 120%;
    text-align: center;
    margin-bottom: 84px;
}
`;
export const Strong = styled.span`
    font-weight: bold;
    font-size: 42px;
    line-height: 120%;
`;

export const Center = styled.span`
    display:flex;
    justify-content:center;
`;