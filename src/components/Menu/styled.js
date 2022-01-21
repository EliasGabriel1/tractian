import styled from 'styled-components'
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

export const ContentMenu = styled.div`
max-width:1300px;
margin:0 auto;
padding: 15px 0;
    display:flex;
    justify-content: space-between;
    line-height: 50px;
    text-align: center;
        ${customMedia.lessThan("mobile")`
            display:none;
        `};            
`;

export const GroupButton = styled.div`
    display:flex;
    align-items:center;
    gap: 40px;
    a{
        cursor:pointer;
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color:#000;
        &:hover{
            color: #0B132A;
        }
    }
`;

export const GroupDivision = styled.div`
    display:flex;
    align-items:center;
    gap: 72px;
    nav{
                ul{
                    display:flex;
                    gap: 42px;
                    list-style:none;
                    li{
                        a{
                            font-weight: 300;
                            text-decoration: none;
                            font-weight: 300;
                            font-size: 16px;
                            line-height: 24px;
                            color: #4F5665;
                            &:hover{
                                color: #00000095
                            }
                        }
                    }
                }
            }
`;