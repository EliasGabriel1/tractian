import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "70em",
    tablet: "60em",
    mobile: "46em"
  });

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 90px 0;
  h3{
    text-align:center;
    margin-bottom:56px;
    font-size: 42px;
    line-height: 120%;
    font-style: normal;
    font-weight: normal;
  }
`;

export const ContentBox = styled.div`
  display:flex;
  justify-content: space-between;
  gap: 50px;
  ${customMedia.lessThan("mobile")`
    gap: 20px;
    flex-direction:column;
    align-items:center;
  `};
`;

    // ${customMedia.lessThan("mobile")`
    //     padding-bottom: 5px;
    // `};
    // p{
    //     display:flex;
    //     justify-content:center;
    // }

