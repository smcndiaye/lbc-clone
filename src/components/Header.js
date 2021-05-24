import React from 'react'
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

import logo from '../logo.jpeg'
import './Header.css'
const NavContainer = styled.nav`
  display:flex;
  position:sticky;
  top:80px;
  background:#ffff;
  width:1033px;
  height:60px;
  max-width: 1066px;
  margin:0 auto;
  margin-top:200px;
  box-shadow:0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
  @media screen and (min-width:971px){
    justify-content:space-between;
    padding: 0 1rem;
    box-shadow:0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
  }
  z-index:999;
`
const LeftContainer = styled.div`
display:flex;
  align-items:center;
  justify-content:center;
  padding-left:10px;
  height:100%;
  width:100%;
`

const LogoContainer = styled.img`
background:#ffff;
  width:174px;
  height:100%;
`
const AnnoceContainer = styled.div`
  
  background:#ff6e14;
  width:201.98px;
  height:40px;
  margin:0px 10px 0px 0px;
  padding:0px 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  span{
    padding-left:2px;
    color:#ffff;
    font-size:14px;
    font-weight:bold;

  }
`
const SearchContainer = styled.div`
  margin-left:20px;
  padding:0px 10px;
  width:130.58px;
  height:60px;
  align-items:center;
  justify-content:center;
  display:flex;
  input{
    height:21px;
    width:130.58px;
    outline-width:none;
    border-width:0px;
  }
`


const InfoContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding-left:10px;
  height:100%;
  width:100%;
  margin-left:30px;
`
const BlockContainer = styled.div`
  height:60px;
  width:107.81px;
  display:flex;
  align-items:center;
  flex-direction:column;
  padding-bottom:5px;
  span{
    
    font-size:12px;
  }
  `


const Header = () => {
  return (
    
    <NavContainer>
      <LeftContainer>
      <LogoContainer src={logo} alt='logo' />
      <AnnoceContainer>
        <AddBoxOutlinedIcon className='addIcon' />
        <span>Déposer une annoce</span>
      </AnnoceContainer>
      <SearchContainer>
          <SearchOutlinedIcon className= 'mui-icon-search'/>
        <input placeholder='Rechercher'/>
        </SearchContainer>
      </LeftContainer>
      <InfoContainer>
        <BlockContainer>
          <NotificationsNoneOutlinedIcon className='info-icon' />
          <span>Mes recherches</span>
        </BlockContainer>
        <BlockContainer>
          <FavoriteBorderOutlinedIcon className='info-icon'/>
        <span>Favoris</span>
        </BlockContainer>
        <BlockContainer>
          <MessageOutlinedIcon className='info-icon'/>
        <span>Messages</span>
        </BlockContainer>
        <BlockContainer>
          <Avatar className='avt'/>
          <span>Smc NDIAYE</span>
        </BlockContainer>
      </InfoContainer>
    </NavContainer>
  )
}

export default Header
