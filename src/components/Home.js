import React from 'react'
import styled from 'styled-components';



const HomeContainer = styled.div`
position:relative;
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
span{
  color:#ffff;
  text-align:center;
  margin:4rem 100px;
  font-size:30px;
  font-weight:bold;
  }
p{
  color:#ffff;
  margin:2rem 200px;
  font-weight:bold;
}
`
const PostContainer = styled.div`
    height:210px;
    width:930px;
    margin:0px 50px;
    padding:20px;
    max-width: 93rem;
    box-shadow: 0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
    background-color: #fff;
    padding: 2rem;
    top:110px;
    border-radius: 4px;
   position:absolute;
`



const Home = () => {
  return (
    <HomeContainer>
      <TopContainer>
        <span>Achetez ou vendez votre voiture avec le paiement sécurisé !</span>
        <p>Trouvez la bonne affaire parmi les millions de petites annonces leboncoin</p>
        <PostContainer>

        </PostContainer>
      </TopContainer>
    </HomeContainer>
  )
}

export default Home
