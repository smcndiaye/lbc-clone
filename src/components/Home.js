import React from 'react'
import styled from 'styled-components';



const HomeContainer = styled.div`
background:#ffff;
  width:1033px;
  height:100vh;
  max-width: 1066px;
  margin:0 auto;
  box-shadow:0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);

`
const TopContainer = styled.div`
    content: "";
    display: block;
    background: #ff6e14;
    border-radius: 0 0 100% 90%/0 0 100% 100%;
    margin: -.08rem -0.06rem 0;
    height: 200px;
    width:1033px;
    max-width: 1066px;
    overflow:hidden;

`




const Home = () => {
  return (
    <HomeContainer>
      <TopContainer>
      <h1>home page</h1>
      </TopContainer>
    </HomeContainer>
  )
}

export default Home
