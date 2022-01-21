import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  height: 650px;
  display: flex;
  align-items: center;
  background-size: 800px;
  background-repeat: no-repeat;
  background-position: right;
  ${customMedia.lessThan("mobile")`
    height: 800px;
    background-size: 350px;
    background-position: bottom right;
    padding: 0 20px;
  `};
  div {
    max-width: 687px;
    div {
      h1 {
        font-weight: 600;
        font-size: 50px;
        line-height: 75px;
        letter-spacing: 0.05em;
      }
      h5 {
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        color: #4f5665;
        margin: 5px 0 60px 0;
      }
    }
  }
`;
