import React, {useState} from 'react';
import '../leboncoin.css';
import ImageM from './image-11.jpeg';
import ComunaunteImg from './communaute-7491b632.png';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import HomeIcon from '@material-ui/icons/Home';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PetsIcon from '@material-ui/icons/Pets';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { BsTools } from 'react-icons/bs';
import { GiClothes } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import {Data} from './Data';
import MyMap from './MyMap';
import {Regions}  from './Data' 
import Options from './Options';

const ArrowBtn = css`
  height:50px;
  width:50px;
  margin-right:1rem;
  border-radius:50px;
  background:#fff;
  cursor:pointer;
  border-radius:50px;
  user-select:none;
  transition:0.3s;
  color:gray;
  &:hover{
   background: #ff6e14;
   transform:scale(1.05);
  }

`

const PrevArrow = styled(MdKeyboardArrowLeft)`
  ${ArrowBtn};
  margin-left:1rem;
`
const NextArrow = styled(MdKeyboardArrowRight)`
  ${ArrowBtn};
  right:50px;
`
const SliderButtons = styled.div`
  z-index:10;
  position:absolute;
  top:580px;
  ${'' /* right:50px; */}
  width:100%;
  display:flex;
  justify-content:space-between;
`




const HomeContainer = styled.div`
  position:relative;
  background:#ffff;
  width:1033px;
  height:2380px;
  max-width: calc(1066px + 2rem);
  margin:0 auto;

  box-shadow:0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
  @media screen and (max-width:768px){
    width:100vw;
    overflow: hidden;
	  white-space: nowrap;
    margin:0px;
  }
  
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
    white-space:nowrap;
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
  @media screen and (max-width:768px){
    display:none;
  }
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
   @media screen and (max-width:768px){
    display:none;
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
const AnBtn = styled(Link)`
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
  &:hover{
    text-decoration:none;
  }
`
const CategorieContainer = styled.div`
  height:150px;
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
    margin-left:15px;
    font-size:25px;
    font-weight:bold;
    color:#1a1a1a;
  }
`
const MapWrapper = styled.div`
  position:absolute;
  top: 800px;
  height:230px;
  width:1033px;
  display:flex;
  align-items:center;
  margin:20px 50px;
  padding-left:150px;
`
const SelectList = styled.div`
  position:absolute;
  height:38px;
  width:300px;
  top:1100px;
  right:200px;
  span{
    font-weight:bold;
  }
  @media screen and (max-width:768px){
    display:none;
  }
`
const ComDiv = styled.div`
  position:absolute;
  top:1300px;
  height:200px;
  width:969px;
  background:url(${ComunaunteImg});
  margin-left:20px;
  background-repeat: no-repeat;
  background-color: #fef0e9;
  background-position: 100% 100%;
  padding:16px 24px;
  span{
    font-size:18px;
    margin-left:10px;
    font-weight:bold;
    
  }
  br{
      padding-left:10px;
    }
  p{
    margin-left:10px;
  }
`

const CBtn = styled.div`
  height:40px;
  width:211.98px;
 background:#ff6e14;
 padding:10px 0px;
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

const Paragraph = styled.div`
  position:absolute;
  top:1530px;
  height:68px;
  width:969px;
  margin-left:20px;
  padding:16px 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  span{
  margin-left:10px;
  font-size:12px;
  margin-top:0px;
   font-weight:bold;
   text-align: center;
  }
`
const RegWrapper = styled.div`
  height:734px;
  position:absolute;
  top:1650px;
  width:100%;
  background:#f4f6f7;
  display:grid;
  grid-template-columns:repeat(auto-fit,240px)
`

const RegDiv = styled.div`
  height:148px;
  width:240px;
  border-bottom: 1px solid #cad1d9;
  span{
    color:#1a1a1a;
    font-size:14px;
    font-weight:bold;
    :hover{
      color:#ff6e14;
    }
  }
  ul{
    list-style:none;
  }
  li{
    padding-top:5px;
    font-size:12px;
    color:#8191a0;
    cursor:pointer;
    :hover{
      color:#ff6e14;
    }
  }
 
`
const CatOps = styled.div`
    position:absolute;
    top:110px;
    height:570px;
    width:890px;
    box-shadow: 0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
    background:#ffff;
    z-index:100;
    display:grid;
    grid-template-columns:repeat(auto-fit,290px);
    transform:${props=> props.show ? 'translateY(0)':'translateY(-200%)'};
`
const CatOpsDiv = styled.div`
  height:100%;
  width:290px;
  
`






const Home = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const next = () => {
      const conent = document.querySelector('#content');
      conent.scrollLeft += 190;   
  }
  const prev = () => {
    const conent = document.querySelector('#content');
    conent.scrollLeft -= 190;
}
  
  return (
    <HomeContainer>
      
      <TopContainer>
        <span >Achetez ou vendez votre voiture avec le paiement s??curis?? !</span>
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
            <CatOps  show={openStatus}>
              <CatOpsDiv onClick={()=>setOpenStatus(false)}>
                <Options   title='Toute Cat??gories' Icon={FormatListBulletedOutlinedIcon}/>
                <Options title='Vacances' Icon={ WbSunnyOutlinedIcon}/>
                <Options title='Emploi' Icon={ WorkOutlineOutlinedIcon}/>
                <Options title='V??hicule' Icon={ DirectionsCarOutlinedIcon}/>
                <Options title='Immobilier' Icon={ HomeIcon}/>
                <Options title='Mode' Icon={ GiClothes}/>
                <Options title='Maison' Icon={ EventSeatIcon}/>
                <Options title='Multim??dia' Icon={ PhoneAndroidIcon}/>
                <Options title='Loisirs' Icon={ SportsBasketballIcon}/>
                <Options title='Animaux' Icon={ PetsIcon}/>
                <Options title='Mat??riel Professionnel' Icon={ BsTools}/>
                <Options title='Services ' Icon={ FaHandshake}/>
                <Options title='Divers' Icon={ MoreHorizIcon}/>
              </CatOpsDiv>
              <CatOpsDiv onClick={()=>setOpenStatus(false)}>
                <Options title='Vacances' Icon={ WbSunnyOutlinedIcon}/>
                <Options title='Locations & G??tes' />
                <Options title="Chambres d'h??tes" />
                <Options title='H??bergements insolites' />
                <Options title='H??tels' />
                <Options title='Ventes priv??es vacances' />
              </CatOpsDiv>
          </CatOps>
            <CatWrapp onClick={()=>setOpenStatus(!openStatus)}>
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
              <p >Voir ??galement les annonces disponibles en livraison</p>
              </div>
            </CbContainer>
          </PostBottomWrapp>
        </PostContainer>
        <ResBtn>Rechercher(69 450 r??sultats)</ResBtn>
        <AnBtn to='/deposer-annoce'>
            <span>D??poser une annoce</span>
          <AddBoxOutlinedIcon style={{ color: '#fff', fontSize: '30px'}}/>
        </AnBtn>
      </TopContainer>
      <CatHeadWrapp>
        <p>Top Categories</p>
      </CatHeadWrapp>
      
        <CategorieContainer  id='content' >
        
        {Data.map((item, index) => {
          return <Categories key={index}
                title={item.title}
                image={item.image}
                alt={item.alt}
            />
        })}
        </CategorieContainer>
        <SliderButtons>
            <PrevArrow  onClick={prev} />
            <NextArrow   onClick={next} />
        </SliderButtons>
        <MapWrapper>
        <img src={ImageM} alt='Mimage' style={{height:'195px',width:'288px',cursor:'pointer'}}/>
        <MyMap/>
        </MapWrapper>
        <SelectList>
       
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label ><span>R??gion</span></Form.Label>
    <Form.Control as="select">
      {Regions.map((regeion,index)=>{
        return <option key={index}>{regeion}</option>
      })}
    </Form.Control>
    </Form.Group>
        </SelectList>
    <ComDiv>
        <span>Avoir une passion c'est bien ! <br /></span>
        <span>La partager avec les autres, c'est mieux !</span>
        <p>Jardinage, mode, v??lo... Ils sont nombreux ?? en parler sur <br/> la Communaut?? leboncoin ! Rejoignez-les !</p>
    <CBtn><span>D??couvrir la Communaut??</span></CBtn>
      </ComDiv>
      <Paragraph>
        <span>Avec leboncoin, trouvez la bonne affaire sur le site r??f??rent de petites annonces de particulier ?? particulier et de professionnels. Avec des millions de petites annonces, trouvez la bonne occasion dans nos cat??gories voiture, immobilier, emploi, vacances, mode, maison, jeux vid??o, etc??? D??posez une annonce gratuite en toute simplicit?? pour vendre, rechercher, donner vos biens de seconde main ou promouvoir vos services. Achetez en toute s??curit?? avec notre syst??me de paiement en ligne et de livraison pour les annonces ??ligibles.</span>
      </Paragraph>
      <RegWrapper>
      <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
            <li><a href="#"></a><span>NOS APPLICATIONS</span></li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>VACANCES</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>MODE</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>MAISON</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>V??HICULES</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href=""></a><span>LOISIRS</span></li>
            <li><a href=""></a>Offres d'emploi</li>
            <li><a href=""></a>Offres d'emploi Cadres</li>
            <li><a href=""></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href=""></a><span>EMPOI</span></li>
            <li><a href=""></a>Offres d'emploi</li>
            <li><a href=""></a>Offres d'emploi Cadres</li>
            <li><a href=""></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        <RegDiv>
          <ul>
            <li><a href="#"></a><span>EMPOI</span></li>
            <li><a href="#"></a>Offres d'emploi</li>
            <li><a href="#"></a>Offres d'emploi Cadres</li>
            <li><a href="#"></a>Formations Professionnelles</li>
          </ul>
        </RegDiv>
        
      </RegWrapper>
    </HomeContainer>
  )
}

export default Home
