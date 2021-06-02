import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Pays}  from './Data' 
import Apple from './apple.png';
import Google from './google.png';



const FooterWrapper = styled.div`
  position:relative;
  background:#474747;
  width:1033px;
  height:550px;
  margin:0 auto;
  color:#fff;
  box-shadow:0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
`

const TopFootWrapper = styled.div`
  height:333px;
  position:absolute;
  top:50px;
  width:100%;
  background:#474747;
  display:grid;
  grid-template-columns:repeat(auto-fit,240px)
`

const FootDiv = styled.div`
  height:207px;
  width:240px;
  background:#474747;
  span{
    color:#ffff;
    font-size:14px;
    font-weight:bold;
    border-bottom: 1px solid #cad1d9;
  }
  ul{
    list-style:none;
    color:#ffff;
  }
  li{
    padding-top:5px;
    font-size:12px;
    color:#ffff;
    cursor:pointer;
    :hover{
      color:#ff6e14;
    }
    a{
      color:#ffff;
    }
  }
 
`

const MidFoot = styled.div`
  position:absolute;
  bottom:50px;
  height:56px;
  width:90%;
  margin-left:5%;
  border-bottom: 1px solid #cad1d9;
  border-top: 1px solid #cad1d9;
  margin-top:50px;
  p{
    text-align: center;
    color:#ffff;
    font-size:13px;
  }
  a{
      color:#ffff;
      padding:0 2px;
    }
`
const AppWrapper = styled.div`
    width:240px;
    height:35px;
    position:absolute;
    top:200px;
    left:30px;
    display:flex;
    img{
      height:35px;
      width:100px;
      margin-left:2px;
    }
`

const SelectList = styled.div`
  position:absolute;
  height:38px;
  width:240px;
  top:230px;
  right:35px;
  span{
    font-weight:bold;
  }
`
const BottomFoot = styled.div`
  height:24px;
  width:100%;
  position:absolute;
  bottom:10px;
  display:flex;
  ailgn-items:center;
  justify-content:space-between;
`
const BottomLeft = styled.div`
  padding-left:5px;
  height:100%;
  width:40%;
  font-size:13px;
  span{
    
  }
`
const BottomRight = styled.div`
  height:100%;
  width:40%
  display:flex;
  padding-right:5px;
  span{
    height:19px;
    width:117px;
    font-size:13px;
    margin:0px;
      }
`
const Footer = () => {
  return (
    <FooterWrapper>
      <TopFootWrapper>
        <FootDiv>
        <ul>
            <li><a href="#"></a><span>À PROPOS DU BONCOIN</span></li>
            <li><a href="#">Qui sommes-nous ?</a></li>
            <li><a href="#">Nous rejoindre</a></li>
            <li><a href="#">Acteur responsable de l’économie française</a></li>
            <li><span>NOS APPLICATIONS</span></li>
          </ul>
        </FootDiv>
        <FootDiv>
        <ul>
            <li><a href="#"><span>INFORMATIONS LÉGALES</span></a></li>
            <li><a href="#">Conditions générales d’utilisation</a></li>
            <li><a href="#">Règles de diffusion, de référencement et de déréférencement</a></li>
            <li><a href="#">Conditions générales de vente</a></li>
            <li><a href="#">Conditions générales de vente</a></li>
            <li><a href="#">Vie privée / cookies</a></li>
            <li><a href="#">Vos droits et obligations</a></li>
            <li><a href="#">Critères de classement</a></li>
            <li><a href="#">Décisions de justice</a></li>
          </ul>
        </FootDiv>
        <FootDiv>
        <ul>
            <li><a href="#"><span>NOS SOLUTIONS PROS</span></a></li>
            <li><a href="#">Publicité</a></li>
            <li><a href="#">Professionnels de l’immobilier</a></li>
            <li><a href="#">Vos recrutements</a></li>
            <li><a href="#">Professionnels de l’auto</a></li>
            <li><a href="#">Professionnels du tourisme</a></li>
            <li><a href="#">Autres solutions professionnelles</a></li>
            <li><a href="#">Annuaire des professionnels</a></li>
            <li><a href="#">Dépôt gratuit d’emploi pour les TPE</a></li>
          </ul>
        </FootDiv>
        <FootDiv>
        <ul>
            <li><a href="#"><span>DES QUESTIONS ?</span></a></li>
            <li><a href="#">Aide</a></li>
            <li><a href="#">Le service de paiement sécurisé et la livraison</a></li>
            <li><a href="#">Le service de réservation de vacances en ligne pour les hôtes</a></li>
            <li><a href="#">Demandez conseil à la Communauté</a></li>
            <li><a href="#">Statut de nos services</a></li>
            <li><a href="#"><span>DES QUESTIONS ?</span></a></li>
            
          </ul>
          <SelectList>
       
              <Form.Group controlId="exampleForm.ControlSelect1" style={{width:'240px',marginRight:'0px'}}>
                <Form.Control as="select">
                  {Pays.map((p,index)=>{
                    return <option key={index}>{p}</option>
                  })}
                </Form.Control>
                </Form.Group>
             </SelectList>
        </FootDiv>
      </TopFootWrapper>
      <MidFoot>
        <p>
          leboncoin Groupe :
         <a href="#">A`VendreALouer</a> 
         <a href="#">leboncoin Immobilier Neuf</a> 
         <a href="#">L'argus </a> 
         <a href="#"> Paycar</a>
          <a href="#"> Agriaffaires</a>
          <a href="#"> MachineryZone</a>
          <a href="#"> Truckscorner</a>
         <a href="#"> Locasun </a>
         <a href="#"> Locasun-vp </a>
         <a href="#">Pilgo</a> 
         <a href="#"> Videdressing</a>
         <a href="#"> LeDénicheur</a>
         <a href="#"> Yo`united Credit</a>
      </p>
      </MidFoot>
      <BottomFoot>
        <BottomLeft>
              <span>leboncoin 2006 - 2021</span>
        </BottomLeft>
        <BottomRight>
          <span>Retrouvez-nous sur</span>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <PinterestIcon/>
       </BottomRight> 
      </BottomFoot>
      <AppWrapper>
        <img src={Apple} alt="apple" />
        <img src={Google} alt="apple" />
      </AppWrapper>
   </FooterWrapper>
 )
}

export default Footer
