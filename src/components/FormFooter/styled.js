import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

export const Form = styled.form`
    display:flex;
    justify-content: space-between;
    align-items:flex-end;
    margin-top: 30px;
    padding-bottom:20px;
    gap:10px;
    ${customMedia.lessThan("mobile")`
        flex-direction: column;
        align-items:start;
    `};
    button{
        align-self:end;
        width:200px;
        height:45px;
    }
`;

export const FormFooter = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 44px 41px;
    ${customMedia.lessThan("mobile")`
        padding: 0 20px;
    `};
`;

export const Text1 = styled.h3`
    font-weight: 500;
    font-size: 35px;
    line-height: 45px;
    color: #0B132A;
    text-align: start;
`;

export const Text2 = styled.h5`
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
    text-align: start;
`;