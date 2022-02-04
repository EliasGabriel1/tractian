import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    color:#fff;
    max-width: 1300px;
    margin:0 auto;
    padding-top:60px;
    a{
        text-decoration:none;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        color: #FFFFFF;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    li:first-child{
        margin-bottom:10px;
    }
    li{
        text-align:start;
    }
    h6{
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
    }
    ${customMedia.lessThan("mobile")`
        flex-direction: column;
    `};
`;

export const Contenthref = styled.div`
    display:flex;
    justify-content: space-between;
    gap:100px;
    ${customMedia.lessThan("mobile")`
        gap:10px;
        flex-direction: column;
    `};
`;

export const ContentApresentation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export const ContentLogo = styled.div`
    text-align:start;
    margin-bottom:43px;
`;

export const Socials = styled.div`
    margin-bottom: 30px;
`;

export const Copy = styled.div`
${customMedia.lessThan("mobile")`
    margin-bottom: 40px;
`};
`;