import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
  Settings
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";

//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav, } from "react-bootstrap";
//import Dropdown from './Dropdown'
import { NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const AboutUs= () => {
  
  return (
    <div className={nav.mission}>
        <img src='https://www.chanceparts.com/Uploads/flash/60cc47be9bd70.jpg'/>
      <div className={nav.mitem2}>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'24px',marginLeft:'30px',color:'white'}}>ABOUT US</p>
       <p style={{alignItems:'justify-content',marginLeft:'30px',color:'white'}}>MAZ 
        Global  is a team of people working in truck spare parts more than 15 years.
          With the development truck parts industry and technology in the last decade in China,
           we are also growing up with them. We save a wide and close purchase sources after years of
            cooperation with many truck parts manufacturers.We continuously strive to source new products 
            of high quality and extremely competitive prices to satisfy our wide range of customers throughout all around the world.</p>
       <button style={{height:'40px',width:'200px',marginTop:'40px',marginLeft:'30px',background:'white',borderRadius:'4px'}}>Read More {'>>'}</button> 
      </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
