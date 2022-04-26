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
       With the demand to move goods around the world, international transportation is required.
Maaz Global is the UK's leading aftermarket parts supplier for trucks and delivery vans, with an extensive universal range of original and replacement vehicle components, parts, and accessories for all makes of trucks and delivery vans, as well as fast delivery and personalised services for customers throughout the UK, Europe, and Pakistan.
At Maaz Global, we bring together the greatest brands of truck and delivery vans spare parts in order to provide our customers with the best components for their unique needs.
We aim to provide our clients with the best solution possible. This is why we provide a diverse choice of truck replacement parts and aim to provide the highest level of service possible, with a strong focus on customer happiness.
We provide you with the widest choice of spare parts and a vast range of applications for various truck and delivery vans models. All of our products are made with high-quality raw materials, allowing us to provide high-quality items at competitive costs to our consumers.
We successfully got the Approved Exporter designation thanks to our staff's years of expertise and in-depth knowledge of the subject. Maaz Globel delivers not only the items you require but also the essential advice and client service. We do everything we can to fulfil the needs of a market that is increasingly demanding better quality standards, ensuring all of the convenience of a simplified method managed by our internal operators.
Contact us for further information!</p>
       <button style={{height:'40px',width:'200px',marginTop:'40px',marginLeft:'30px',background:'white',borderRadius:'4px'}}>Read More {'>>'}</button> 
      </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
