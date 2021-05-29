import React from 'react';
import '../leboncoin.css';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import {Data} from './Data';

const HomeContainer = styled.div`
position:relative;
background:#ffff;
  width:1033px;
  height:1066px;
  ${'' /* max-width: 1066px; */}
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
   
`
const PostMiddlepWrapp = styled.div`
    margin-top:10px;
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
    cursor:pointer;
    
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
      width:100%;
    }
`
const PostBottomWrapp = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
`
const CbContainer = styled.div`
  display:flex;
  align-items:center;
  height:36px;
  width:100%;
  margin-top:5px;
 p{
  color: #1A1A1A;
	font-size: 15px;
  margin-left:16px;
 }
`
const PrixContainer = styled.div`
  height:36px;
  width:100%;
  margin-top:5px;
`
const BtnWrapper = styled.div`
    border: 1px solid #cad1d9;
    border-radius: 16px;
    display: inline-block;
    height: 100%;
    width:57.03px;
    transition: background-color .2s ease-in-out,border .2s ease-in-out;
    max-width: 100%;
    cursor: default;
    background: #fff;
    padding:auto auto;
`

const PriceButton = styled(Link)`
  height:30px;
  width:57.03px;
  border-radius:50px;
  text-decoration:none;
  color:#000;
  margin-left:15px;
  margin-top:15px;
  margin-bottom:0px;
  color:#000;
  font-size:14px;
`
const ResBtn = styled.div`
  height:40px;
  width:229.69px;
  color:#fff;
  font-size:12px;
  font-weight:bold;
 background:#4183D7;
 padding:10px 16px;
 position:absolute;
 top:300px;
 left:40%;
 right:60%;
 border-radius:5px;
 cursor:pointer;
`
const AnBtn = styled.div`
  height:40px;
  width:211.98px;
  
 background:#ff6e14;
 padding:10px 0px;
 position:absolute;
 top:370px;
 left:41%;
 right:59%;
 border-radius:5px;
 margin:0px 10px 0px 0px;
  padding:0px 0px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  span{
    padding-left:2px;
    color:#ffff;
    font-size:14px;
    font-weight:bold;
    margin:0px;

  }
`
const CategorieContainer = styled.div`
  height:130px;
  width:100%;
  position:absolute;
  top:530px;
  display:flex;
  overflow:hidden;
  white-space: nowrap;
`
const CatHeadWrapp = styled.div`
  height:36px;
  width:100%;
  margin-left:8px;
  position:absolute;
  top:500px;
  p{
    font-size:25px;
    font-weight:bold;
    color:#1a1a1a;
  }
`
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
          <PostBottomWrapp>
            <PrixContainer>
              <BtnWrapper>
                <PriceButton>Prix</PriceButton>
                </BtnWrapper>
            </PrixContainer>
            <CbContainer>
              <div>
          <label className="switch">
          <input type="checkbox" id="togBtn"/>
          <div className="slider round">
            <span className="on">ON</span>
            <span className="off">OFF</span>
          </div>
              </label>
              </div>
              <div> 
              <p >Voir également les annonces disponibles en livraison</p>
              </div>
            </CbContainer>
          </PostBottomWrapp>
        </PostContainer>
        <ResBtn>Rechercher(69 450 résultats)</ResBtn>
        <AnBtn>
            <span>Déposer une annoce</span>
          <AddBoxOutlinedIcon style={{ color: '#fff', fontSize: '30px'}}/>
        </AnBtn>
      </TopContainer>
      <CatHeadWrapp>
        <p>Top Categories</p>
      </CatHeadWrapp>
      <CategorieContainer>
        {Data.map((item, index) => {
          return <Categories key={index}
            title={item.title}
            image={item.image}
            alt={item.alt}
          />
      })}
      </CategorieContainer>
      
    </HomeContainer>
  )
}

export default Home
