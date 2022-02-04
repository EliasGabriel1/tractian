import styled from 'styled-components'

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label`
    font-weight: 300;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.49);
    text-align: start;
`;

export const Input = styled.input`
    background: rgba(241, 241, 241, 0.31);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 8px;
    width: 300px;
    height: 45px;

    &::placeholder{
        color: rgba(0, 0, 0, 0.21);
        font-weight: 500;
        font-size: 16px;
        line-height: 45px;
    }
`;
