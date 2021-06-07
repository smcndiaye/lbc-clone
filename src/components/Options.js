import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height:40px;
  width:257px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  margin-top:4px;
  padding-left:5px;
  cursor:pointer;
  span{
    
`
const TitleDiv = styled.div`
    color:#1a1a1a;
    margin:0px;
    padding:7px 0px 5px 0px;
    font-size:16px;
    
   
  }
  :hover{
    background: #fef0e9;
  }
`

const Options = ({ title, Icon }) => {
  
  return (
    <Container >
      {Icon && <Icon style={{fill: 'rgb(168, 180, 192)',
                            color: 'rgb(168, 180, 192)'}}/>}
      <TitleDiv>{title}</TitleDiv>
    </Container>
 )
}

export default Options
