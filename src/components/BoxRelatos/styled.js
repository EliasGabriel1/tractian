import styled from 'styled-components';


export const Box = styled.div`
  padding: 30px;
  background: #FFFFFF;
  box-shadow: -31px 52px 114px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 370px;
  height:200px;
  border: 1px solid #DDDDDD;

  &:hover{
    border: 1px solid #2563EB;
  }
`;

export const Person = styled.div`
  display:flex;
  img{
    border-radius: 50%
  }
  div{
    display:flex;
    flex-direcion:column;
  }
`;

export const HeaderBox = styled.div`
  display:flex;
  justify-content:space-between;
`;

export const Text = styled.p`
  margin-top: 20px;
  line-height: 25px;
`;

export const ContentStar = styled.div`
  span{
    margin-right:10px;
  }
`;
