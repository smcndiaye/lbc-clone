import React from 'react'
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height:120px;
  width:100%;
  margin:10px 10px;
`
const ImageTitle = styled.div`
  position:absolute;
  bottom:2px;
  left:30px;
  p{
    color:#fff;
    font-weight:bold;
  }
`
const Image = styled.div`
  height:100%;
  width:180px;
  position:relative;
  box-shadow:0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
  border-radius:5%;
  img{
    height:100%;
    width:100%;
  }

`
const Categories = ({ image,title,alt}) => {
  return (
    <>
    
    <ImageWrapper>
        <Image >
          <img src={image} alt={alt} />
        <ImageTitle>
            <p>{ title}</p>
        </ImageTitle>
      </Image>
      </ImageWrapper>
      </>
  )
}

export default Categories
