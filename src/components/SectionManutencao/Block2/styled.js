import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "68em",
    mobile: "46em"
  });

export const Box1 = styled.div`
    position: relative;
    top: 50px;
    right: 400px;
    ${customMedia.lessThan("tablet")`
    position: unset;
        `};
`;
export const Box2 = styled.div`
    position: relative;
    left: 0px;
        
    ${customMedia.lessThan("tablet")`
    position: unset;
        `};
`;
export const Box3 = styled.div`
    position: relative;
    right: 250px;
    bottom: 32px;
    ${customMedia.lessThan("tablet")`
    position: unset;
        `};
`;

export const Block2 = styled.div`
    
`;