import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  height:100vh;
  width:80vw;
  margin:0 auto;
`
const TopContainer = styled.div`
    width:714px;
    height:259px;
    margin-bottom:0px;
`
const MidContainer = styled.div`
  display:flex;
  height:259px;
  width:100%;
`

const LefMidContainer = styled.div`
  width:714px;
  height:100%;
  background:#ffff;

`
const AddAnnoce = () => {
  return (
    <Container>
      <TopContainer>
        <h1>Déposer une annoce</h1>
      </TopContainer>
      <MidContainer>
        <LefMidContainer>
          <h3>Commençons par l’essentiel !</h3>
          <p>Quel est le titre de l’annonce ?</p>
          <input type="text" style={{ width:'322px',height:'38px'}}/>
        </LefMidContainer>
      </MidContainer>
    </Container>
  )
}

export default AddAnnoce
