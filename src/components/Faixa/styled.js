import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    gap: 15px;
    ${customMedia.lessThan("mobile")`
        flex-direction: column;
        align-items:center;
        img{
            max-width:250px;
        }
    `};
`;
 export default Container