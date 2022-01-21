import styled from 'styled-components'
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

  const ContentHeader = styled.header`
    max-width: 1400px;
    margin: 0 auto;
    background-repeat: no-repeat;
    ${customMedia.lessThan("mobile")`
      background-size: cover;
    `};
`;

export default ContentHeader;