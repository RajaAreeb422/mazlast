import styled from "styled-components";

import Navbar2 from "../components/Navbar2";
//import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined,Category } from "@material-ui/icons";
import Navbar from "../components/Navbar";
//import axios from "axios";
//import Pagination from '@material-ui/lab/Pagination';

const Services = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [color, setColorProduct] = useState([]);
  const [spro, setSizeProduct] = useState([
    {
      id: 1,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/1/1/11979.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 2,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0001420-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 3,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0001272_2.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 4,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0700185_2.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 5,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0011706-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 6,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012367K.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 7,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012736-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 8,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0011706-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 9,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012368K.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    
  ]);
  useEffect(() => {
    // const config = {
    //     headers: {
    //       Authorization: 'Bearer ' + localStorage.getItem('token'),
    //     },
    //   };
    //     axios.get( `http://95.111.240.143:8080/ecom-api/products/page/${1}`)//api url
    //    .then(resp =>{//calling url by method GET
    //          setItems(resp.data.data)
    //             setSizeProduct(resp.data.data)
    //         }).catch(err=>console.log(err))//setting response to state posts
  }, []);

  const handlePageChange = (event, value) => {
    //   setPage(value);
    //   console.log("val",value)
    //   axios.get(`http://95.111.240.143:8080/ecom-api/products/page/${value}`)
    //   .then(res=>{
    //     console.log('data',res.data.data)
    //     setSizeProduct(res.data.data)
    //   }) .catch(err=>console.log(err))
  };

  const handleSelectChange = (e) => {
    //   var slist=[]
    // items.map((sin,i)=>{
    //     axios.get(`http://95.111.240.143:8080/ecom-api/products/${sin.id}`)
    //     .then(res=>{
    //        if(res.data.data.variants.length!=0)
    //        {
    //         slist.push({...res.data.data,
    //           ['id']:sin.id
    //         })
    //          Sort(slist,e.target.value)
    //        }
    //         }).catch(err=>console.log(err))
    // })
    // setColorProduct(slist)
  };
  function Sort(slist, value) {
    //   var cl=[]
    //     slist.map(it=>{
    //       it.variants.map(v=>{
    //            v.values.map(sz=>{
    //              if(sz==value)
    //              {
    //              cl.push(it)
    //              }
    //            })
    //       })
    //     })
    //     setSizeProduct(cl)
  }
  return (
    <>
      <Navbar2/>
      <Navbar/>
      <img src='https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg' width='100%'/>
      <Container>
       
    
      <div style={{display:'flex',flexDirection:'column'}}>
          <LeftBar>
            <Filter>
              <Bar>
                <div style={{backgroundColor:'rgba(16, 103, 138, 0.933)',width:'50px',height:'50px'}}>
                <Category style={{color:'white',marginTop:'8px'}} />
                </div>
              <FilterTitle >
                PRODUCT CATEGORIES
              </FilterTitle>
              </Bar>
              <hr width="245px" style={{marginTop:'-2px'}} />
              <FilterText >
              {'>'}  Air Brake System
              </FilterText>
              
              <FilterText >
              {'>'} Clutch System
              </FilterText>
              
              <FilterText >
              {'>'} Suspension
              </FilterText>
              
              <FilterText >
              {'>'} Body Parts
              </FilterText>
              <FilterText >
              {'>'} Engine
              </FilterText>
              
              <FilterText>
              {'>'}  Brake
              </FilterText>
             
              <FilterText >
              {'>'} Clutch & FlyWheel
              </FilterText>
              <FilterText >
              {'>'} Engine
              </FilterText>
              <FilterText >
              {'>'} Axle & Trailer parts
              </FilterText>
              <FilterText >
              {'>'} Steering
              </FilterText>
              <FilterText >
              {'>'} Transmission
              </FilterText>
              <hr width="200px" />
            </Filter>
          </LeftBar>

          <SearchBar>
            <Filter>
              <Bar>
                <div style={{backgroundColor:'rgba(16, 103, 138, 0.933)',width:'50px',height:'50px'}}>
                <Category style={{color:'white',marginTop:'8px'}} />
                </div>
              <FilterTitle >
                SEARCH
              </FilterTitle>
              </Bar>
              <hr width="245px" style={{marginTop:'-2px'}} />
              <FilterText >
              Product Search
              </FilterText>
              <input type='text' className="form-control" placeholder="Enter OEM no, Chance no etc"
              style={{borderRadius:'8px',background:'whitesmoke',width:'220px',height:'40px',padding:'8px',marginLeft:'10px',marginTop:'10px'}}
              />
              <FilterText >
              Product Categories
              </FilterText>
              <select className="form-control"
               style={{borderRadius:'8px',background:'whitesmoke',width:'220px',height:'40px',padding:'8px',marginLeft:'10px', marginTop:'10px'}}
  
              >
                 <option>Air Brake System</option> 
                 <option>Suspension</option> 
                 <option>Body parts</option> 
                 <option>Engine</option> 
              </select>
              

              <FilterText >
              Vehicle
              </FilterText>
              <select className="form-control"
               style={{borderRadius:'8px',background:'whitesmoke',width:'220px',height:'40px',padding:'8px',marginLeft:'10px', marginTop:'10px'}}
  
              >
                 <option>BMW</option> 
                 <option>Toyota</option> 
                 <option>Honda</option> 
                 <option>MG</option> 
              </select>
              <button style={{marginBottom:'10px',height:'40px',width:'100px',marginLeft:'10px',marginRight:'auto',marginTop:'20px',backgroundColor:'rgba(16, 103, 138, 0.933)',color:'white'}}>Search</button>
              
            </Filter>
          </SearchBar>
          </div>
        

        <div style={{ margin:'60px'}}>
          <Productshow>
            <P style={{fontWeight:'400',fontSize:'24px'}}>Services</P>
            

          <P>MAIN SERVICES WE CAN PROVIDE</P>

          <ul style={{ fontWeight:'320'}}>
           <li> Product Sourcing</li> 
           <li>Factory Inspection</li> 
           <li> Shipment Inspection</li> 
           <li>  Combined shipment Coordination</li> 
             
          </ul>

          <P style={{fontWeight:'320',fontSize:'24px'}}>WHAT IS OUR ADVANTAGE ?</P>
          <P style={{fontWeight:'300'}}>
          Before you work with us, you might have found several China manufacturers on the internet.
           However, you still think you have not got one because you can’t know which will be the right supplier for you.   
          </P>
          <P style={{fontWeight:'300'}}>
          You might get frustrated because you have been communicating with suppliers in China for months,
           but fail to move forward. You need someone from China who knows Chinese culture and can be “your eyes 
           and ears” to get more accurate information and help make the correct decision on who are the appropriate suppliers.   
          </P>
          </Productshow>
        </div>
        
            


      </Container>
      <Footer/>
    </>
  );
};

export default Services;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const P= styled.p`
  font-weight:200;
  
  font-size:16px;
`;
const Bar = styled.div`
   display:flex;
   width:245px;
   flex-direction:row;
   background-color:whitesmoke;
   //border-style:groove;
   border-bottom-color:whitesmoke;
  text-align: center;
`;


const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const Filter = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: column;
  

  //height:40px;
  // background-color:white;
`;

const FilterHome = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  //height:40px;
`;
const Images = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  //height:40px;
`;
const LeftBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  
  border-color: whitesmoke;
  border-style: groove;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const SearchBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  margin-bottom:40px;
  border-color: whitesmoke;
  border-style: groove;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;
const Right = styled.div`
  margin-left: 30px;
`;

const FilterText = styled.span`
  font-size: 14px;
  padding: 8px;
  
  margin-left: 10px;
`;
const FilterHomeText = styled.span`
  font-size: 14px;
  padding: 6px;
  /* padding:20px;
  margin-top: 10px;
  margin-left:20px */
`;
const SortText = styled.span`
  font-size: 14px;
`;
const FilterTitle = styled.span`
 font-size: 14px;
  font-weight: 500;
  padding: 4px;
  background-color: whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  padding: 20px;
  width:700px;
  margin-top:0px;
  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
    border-style:groove;
    border-color:whitesmoke;
  display: flex;
  
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
display:flex;
flex-direction:row;

  width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

