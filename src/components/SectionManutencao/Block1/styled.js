import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

export const Title = styled.h4`
    font-weight: 600;
    font-size: 42px;
    line-height: 63px;
    color: #1E40AF;
`;

export const Text = styled.p`
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 60px;
`;

export const Strong = styled.span`
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
`;

export const Division = styled.div`
    max-width:530px;
    ${customMedia.lessThan("mobile")`
    margin: 0 20px;
    `};
`;