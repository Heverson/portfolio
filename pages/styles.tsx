import styled from 'styled-components';

export const Container = styled.div`
section{
  & > h2{
    color: #1AE8AA;
  }
}  
footer{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
`;
export const Header = styled.header`
  flex:1;
  justify-content: space-between;
  flex-direction: row;
  img{
    max-width: 200px;
  }
  h1{
    font-weight: 'bold';
    font-size: 50px;
  }
`;

export const Cards = styled.div`
  flex-direction: row;
  align-items: stretch;
  justify-content: start;
  flex-wrap: wrap;
  display: flex;
  & > div{
    color: #303030;
    background: #fff;
    max-width:310px;
    width:100%;
    padding:10px;
    margin:10px;
    align-items: inherit;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    span{
      background: #1AE8AA;
      padding:5px;
      font-size: 14px;
      border-radius: 4px;
      display: flex;
    }
  }
  
`;