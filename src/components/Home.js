import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
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
const PostTopWrapp = styled.div`
  height:24px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  input{
     margin-left:4px;
     background:#ff6e14
   }
   label{
     margin-left:4px;
   }
`
const PostMiddlepWrapp = styled.div`
    height:40px;
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`
const CatWrapp = styled.div`
    height:100%;
    width:204.69px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background: #f4f6f7;
    
    span{
      color:#000;
      font-size:14px;
      margin:0px;
      padding:0px;
    }
`
const SearchWrapp = styled.div`
    height:100%;
    width:338.19px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background: #f4f6f7;
    margin-left:1px;
    border-left: 1px solid rgb(168, 180, 192);
    
    input{
      border-width:0px;
      outline:none;
      background: #f4f6f7;
      height:40px;
    }
`
const LocationWrapp = styled.div`
    height:100%;
    width:339.09px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background: #f4f6f7;
    margin-left:10px;
    
    
    input{
      border-width:0px;
      outline:none;
      background: #f4f6f7;
      height:40px;
    }
`
const  PostBottomWrapp = styled.div``


const Home = () => {
  return (
    <HomeContainer>
      <TopContainer>
        <span>Achetez ou vendez votre voiture avec le paiement sécurisé !</span>
        <p>Trouvez la bonne affaire parmi les millions de petites annonces leboncoin</p>
        <PostContainer>
          <PostTopWrapp>
            <div>
              <input type="radio" id="offres" name="drone" value="offres" checked />
              <label for="offeres">Offres</label>
            </div>
            <div>
              <input type="radio" id="demande" name="drone" value="demande" />
              <label for="demande">Demande</label>
            </div>
          </PostTopWrapp>
          <PostMiddlepWrapp>
            <CatWrapp>
              <FormatListBulletedOutlinedIcon  />
              <span>Categories</span>
              <KeyboardArrowDownOutlinedIcon style={{marginTop:'4px',marginLeft:'44px',fontSize:'30px',fill: 'rgb(168, 180, 192)',
                color: 'rgb(168, 180, 192)'}}/>
            </CatWrapp>
            <SearchWrapp>
              <SearchOutlinedIcon style={{fill: 'rgb(168, 180, 192)',
                color: 'rgb(168, 180, 192)'}}/>
              <input type="text"  placeholder='Que cherchez-vous ?'/>
            </SearchWrapp>
            <LocationWrapp>
            <RoomOutlinedIcon style={{fill: 'rgb(168, 180, 192)',
                color: 'rgb(168, 180, 192)'}} />
              <input type="text"  placeholder='Saisissez une ville et un rayon '/>
            </LocationWrapp>
          </PostMiddlepWrapp>
        </PostContainer>
      </TopContainer>
    </HomeContainer>
  )
}

export default Home
